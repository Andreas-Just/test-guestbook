import React, { ChangeEvent, useEffect, useState, useRef } from 'react';
import { useHttp } from '../../hooks/httpHook';
import './CreatePage.scss';
import { useHistory } from 'react-router';

const option = {
  maxNameSize: 50,
  maxMessageSize: 250,
  pattern: /[^a-z0-9_.,!?:;'`" ]/ig,
};

type NewTaskValues = {
  name: string;
  description: string;
};

const defaultValues: NewTaskValues = {
  name: '',
  description: '',
};

export const CreatePage = () => {
  const history = useHistory();
  const { loading, request } = useHttp();
  const [ chit, setChit ] = useState(defaultValues);
  const textareaRef = useRef(null);

  useEffect(() => {
    window.M.updateTextFields();
    window.M.textareaAutoResize(textareaRef.current!);
  }, []);

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const { pattern, maxNameSize, maxMessageSize } = option;
    const text = value.replace(pattern, '').replace(/\s{2,}/g, ' ');

    if (name === 'name') {
      setChit({ ...chit, [name]: text.slice(0, maxNameSize) });
    } else {
      setChit({ ...chit, [name]: text.slice(0, maxMessageSize) });
    }
  };

  const createHandler = async () => {
    try {
      await request('/api/chit/generate', 'POST', chit);
      setChit(defaultValues);
      history.push('/chits');
    } catch (err) {}
  };

  return (
    <div className="CreatePage row">
      <h2 className="visually-hidden">Create Page</h2>
      <div className="CreatePage-Form col s8 offset-s2 card blue-grey lighten-5">
        <div className="CreatePage-Content card-content">
          <span className="card-title">Write a message</span>
          <div className="CreatePage-TextField input-field">
            <input
              id="name"
              name="name"
              type="text"
              value={chit.name}
              placeholder="Please enter your name"
              className="CreatePage-Input"
              onChange={changeHandler}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="CreatePage-TextField input-field">
            <i
              className="CreatePage-Icon material-icons prefix"
            >
              mode_edit
            </i>
            <textarea
              ref={textareaRef}
              id="description"
              name="description"
              value={chit.description}
              placeholder="Please enter your message"
              className="CreatePage-Textarea materialize-textarea"
              onChange={changeHandler}
            />
            <label htmlFor="description">Message</label>
          </div>

        </div>
        <div className="CreatePage-Action card-action">
          <button
            className="CreatePage-Btn btn green darken-4"
            onClick={createHandler}
            disabled={loading}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
