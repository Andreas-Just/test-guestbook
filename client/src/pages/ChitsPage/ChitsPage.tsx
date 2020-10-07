import React, { useCallback, useEffect, useState } from 'react';
import { useHttp } from '../../hooks/httpHook';
import { Spinner } from '../../components/Spinner';
import { ChitItem } from '../../components/ChitItem';
import './ChitsPage.scss';

export const ChitsPage = () => {
  const { request, loading } = useHttp();
  const [chits, setChits] = useState([]);

  const fetchChit = useCallback(async () => {
    try {
      const fetched = await request('/api/chit/', 'GET', null);

      setChits(fetched);
    } catch (err) {}
  }, [request]);

  useEffect(() => {
    fetchChit();
  }, [fetchChit]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="ChitsPage">
      <h2 className="visually-hidden">Chits Page</h2>
      {!chits.length
        ? <p>No messages yet</p>
        : (
          <ul className="ChitsPage-List collection">
            {chits.map(({
              _id, name, description, date,
            }) => (
              <ChitItem
                key={_id}
                id={_id}
                name={name}
                description={description}
                date={date}
              />
            ))}
          </ul>
        )}
    </div>
  );
};
