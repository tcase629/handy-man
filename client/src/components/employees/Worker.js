import { useState } from 'react';
import WorkerForm from './WorkerForm';

const Worker = ({ id, name, phone, specialty, deleteWorker, updateWorker }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <a href={`/workers/${id}/services`}>Services</a>
      <li>
        {name}
        <br />
        {specialty}
        <br />
        {phone}
        <br />
        {
          editing ?
          <>
            <WorkerForm
              id={id}
              name={name}
              phone={phone}
              specialty={specialty}
              updateWorker={updateWorker}
              setEdit={setEdit}
            />
          </>
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteWorker(id)}>Delete</button>
      </li>
    </>
  )
}

export default Worker;

//Could add a link  after the name or form within return statement.