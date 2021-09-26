import { useState, useEffect } from 'react';
import axios from 'axios';

const Workers = () => {
  const [workers, setWorkers] = useState([])

  // before it mounts 
  useEffect( () => {
    // grab the todos from the db
    axios.get('/api/workers')
      .then( res => {
        // and set it to state
        setWorkers(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  // add todo
  const addWorkers = (worker) => {
    // add in the db
    // add in the state in the client 
    //  { todo: {title: "", complete: false}}
    axios.post('/api/workers', { worker })
      .then( res => {
        setWorkers([...worker, res.data])
      })
      .catch( err => console.log(err))
  }

  // update todo
  const updateWorkers = (id, worker) => {
    // update in the db
    //  { todo: {title: "", complete: false}}
    axios.put(`/api/workers/${id}`, { worker })
      .then( res => {
        // update in the state in the client 
        const updatedWorkers = workers.map( t => {
          if (t.id == id) {
            return res.data
          }
          return t
        })
        setWorkers(updatedWorkers)
      })
      .catch( err => console.log(err))
  }


  // delete todo 
  const deleteWorkers = (id) => {
    // delete in the db
    axios.delete(`/api/workers/${id}`)
      .then( res => {
        // delete in the state in the client 
        setWorkers(workers.filter( t => t.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>

    </>
  )
}

export default Workers;