import { useState, useEffect } from 'react';

const CommentForm = ({ addComment, id, title, body,  updateComment, setEdit }) => {
  const [comment, setComment] = useState({ title: "",  body: "" })

  useEffect( () => {
    if (id) {
      setComment({ title, body })
      // setTodo({ title: title, complete: complete })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateComment(id, comment)
      setEdit(false)
    } else {
      addComment(comment)
    }
    setComment({ title: "", body: "" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="title"
          value={comment.title}
          onChange={(e) => setComment({...comment, title: e.target.value })}

          required
          placeholder="Title"
        />

        <input
          name="body"
          value={comment.body}
          onChange={(e) => setComment({...comment, body: e.target.value})}
          required
          placeholder="Body"        
          />

       
       
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default CommentForm;