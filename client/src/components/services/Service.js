import { useState } from 'react';
import ServiceForm from './ServiceForm';
import Comments from '../comments/Comments'

const  Service = ({ id, serv_type, cost,  deleteService, updateService }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
    <br />
    <br />
    <br />
      <li>
        {serv_type}
        <br />
        {/* Name: { serv_type ? "Yes" : "No" } */}
        {
          editing ?
          <>
            <ServiceForm
              id={id}
              title={serv_type}
              name={serv_type}
              updateService={updateService}
              setEdit={setEdit}
            />
            <ServiceForm
              id={id}
              title={cost}
              name={cost}
              updateService={updateService}
              setEdit={setEdit}
            />
          </>
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteService(id)}>Delete</button>
      </li>
      <Comments serviceId={id} />
    </>
  )
}

export default Service;