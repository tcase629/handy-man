import { useState } from 'react';
import ServiceForm from './ServiceForm';

const  Service = ({ id, serv_type, cost,  deleteService, updateService }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        {serv_type}
        <br />
        Name: { serv_type ? "Yes" : "No" }
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
    </>
  )
}

export default Service;