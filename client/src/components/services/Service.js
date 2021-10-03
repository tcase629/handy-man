import { useState } from 'react';
import ServiceForm from './ServiceForm';
import Comments from '../comments/Comments'

const  Service = ({ id, serv_type, cost,  deleteService, updateService }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
    <br />
      <li>
        {serv_type}
        <br />
        {cost}
        <br />
        {
          editing ?
          <>
            <ServiceForm
              id={id}
              serv_type={serv_type}
              cost={cost}
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