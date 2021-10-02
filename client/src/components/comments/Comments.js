import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Comments = ({ serviceId }) => {
  const [comments, setComments] = useState([])

  // before it mounts 
  useEffect( () => {
    // grab the todos from the db
    axios.get(`/api/services/${serviceId}/comments`)
      .then( res => {
        // and set it to state
        setComments(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  // add todo
  const addComment = (comment) => {
    // add in the db
    // add in the state in the client 
    //  { todo: {title: "", complete: false}}
    axios.post(`/api/services/${serviceId}/comments`)
      .then( res => {
        setComments([...comments, res.data])
      })
      .catch( err => console.log(err))
  }

  // update todo
  const updateComment = (id, comment) => {
    // update in the db
    //  { todo: {title: "", complete: false}}
    axios.put(`/api/services/${serviceId}/comments/${id}`, { comment })
      .then( res => {
        // update in the state in the client 
        const updatedComments = comments.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setComments(updatedComments)
      })
      .catch( err => console.log(err))
  }


  // delete todo 
  const deleteComment = (id) => {
    // delete in the db
    axios.delete(`/api/services/${serviceId}/comments/${id}`)
      .then( res => {
        // delete in the state in the client 
        setComments(comments.filter( c => c.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
     <CommentForm addComment={addComment} />
      <CommentList 
        comments={comments} 
        deleteComment={deleteComment}
        updateComment={updateComment}
        />
    </>
  )
}

export default Comments;