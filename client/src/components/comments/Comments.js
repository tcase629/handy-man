import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Comments = () => {
  const [comments, setComments] = useState([])

  // before it mounts 
  useEffect( () => {
    // grab the todos from the db
    axios.get(`/api/services/${service_id}/comments`)
      .then( res => {
        // and set it to state
        setComments(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  // add todo
  const addComments = (comment) => {
    // add in the db
    // add in the state in the client 
    //  { todo: {title: "", complete: false}}
    axios.post(`/api/services/${service_id}/comments`)
      .then( res => {
        setComments([...comments, res.data])
      })
      .catch( err => console.log(err))
  }

  // update todo
  const updateComments = (id, comment) => {
    // update in the db
    //  { todo: {title: "", complete: false}}
    axios.put(`/api/services/${service_id}/comments/${id}`, { comment })
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
  const deleteComments = (id) => {
    // delete in the db
    axios.delete(`/api/services/${service_id}/comments/${id}`)
      .then( res => {
        // delete in the state in the client 
        setComments(comments.filter( c => c.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
     <CommentForm addComments={addComments} />
      <CommentList 
        comments={comments} 
        deleteComments={deleteComments}
        updateComments={updateComments}
        />
    </>
  )
}

export default Commments;