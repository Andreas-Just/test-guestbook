import React from 'react';
import './ChitItem.scss';

type Props = IChits;

export const ChitItem: React.FC<Props> = ({ name, description, date }) => {
  const localDate = new Date(date).toLocaleString('en-GB');

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
