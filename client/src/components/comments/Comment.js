import { useState } from 'react';
import CommentForm from './CommentForm';

const Comment = ({ id, title, body, deleteComment, updateComment }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        {title}
        <br />
        Name: { title ? "Yes" : "No" }
        {
          editing ?
          <>
            <CommentForm
              id={id}
              title={title}
              name={title}
              updateComment={updateComment}
              setEdit={setEdit}
            />
            <CommentForm
              id={id}
              title={body}
              name={body}
              updateComment={updateComment}
              setEdit={setEdit}
            />
          </>
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteComment(id)}>Delete</button>
      </li>
    </>
  )
}

export default Comment;