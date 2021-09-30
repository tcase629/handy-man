import { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceList from './ServiceList';
import ServiceForm from './ServiceForm';

const Services = () => {
  const [services, setServices] = useState([])

  // before it mounts 
  useEffect( () => {
    // grab the todos from the db
		axios.get(`/api/workers/${worker_id}/services`)
      .then( res => {
        // and set it to state
        setServices(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  // add todo
  const addServices = (service) => {
    // add in the db
    // add in the state in the client 
    //  { todo: {title: "", complete: false}}
    axios.post(`/api/workers/${worker_id}/services`, { service })
      .then( res => {
        setServices([...services, res.data])
      })
      .catch( err => console.log(err))
  }

  // update todo
  const updateServices = (id, service) => {
    // update in the db
    //  { todo: {title: "", complete: false}}
    axios.put(`/api/workers/${worker_id}/services/${id}`, { service })
      .then( res => {
        // update in the state in the client 
        const updatedServices = services.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setServices(updatedServices)
      })
      .catch( err => console.log(err))
  }


  // delete todo 
  const deleteServices = (id) => {
    // delete in the db
    axios.delete(`/api/workers/${worker_id}/services/${id}`)
      .then( res => {
        // delete in the state in the client 
        setServices(services.filter( s => s.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
     <ServiceForm addServices={addServices} />
      <ServiceList 
        services={services} 
        deleteServices={deleteServices}
        updateServices={updateServices}
        />
    </>
  )
}

export default Services;