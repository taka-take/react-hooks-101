import React, { useContext } from 'react';

import { DELETE_EVENT, ADD_OPERATION_LOG } from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const { id, title, body } = event;
  const handleClickDeleteButton = () => {
    const result = window.confirm(
      `イベント(id=${id})を本当に削除しても良いですか？`,
    );

    if (result) {
      dispatch({ type: DELETE_EVENT, id });

      const operatedAt = timeCurrentIso8601();
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント(id=${id})を削除しました。`,
        operatedAt,
      });
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClickDeleteButton}>
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
