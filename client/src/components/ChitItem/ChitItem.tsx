import React from 'react';
import './ChitItem.scss';

type Props = IChits;

export const ChitItem: React.FC<Props> = ({ id, name, description, date }) => {
  const localDate = new Date(date).toLocaleString('en-GB');
  console.log(id, name, description, date);
  return (
    <li className="ChitItem collection-item avatar">
      <i className="ChitItem-Icon material-icons circle green darken-3">
        contact_mail
      </i>
      <div className="ChitItem-Header">
        <span className="ChitItem-Name title">{name}</span>
        <span className="ChitItem-Date title">{localDate}</span>
      </div>
      <p className="ChitItem-Description">{description}</p>
      <i className="material-icons">favorite_border</i>
    </li>
  );
};
