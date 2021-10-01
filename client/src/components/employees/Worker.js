import { useState } from 'react';
import WorkerForm from './WorkerForm';

const Worker = ({ id, name, phone, specialty, deleteWorker, updateWorker }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <a href={`/workers/${id}/services`}>link</a>
      <li>
        {name}
        <br />
        Name: { name ? "Yes" : "No" }
        {
          editing ?
          <>
            <WorkerForm
              id={id}
              title={name}
              name={name}
              updateWorker={updateWorker}
              setEdit={setEdit}
            />
            <WorkerForm
              id={id}
              title={specialty}
              name={specialty}
              updateWorker={updateWorker}
              setEdit={setEdit}
            />
            <WorkerForm
              id={id}
              title={phone}
              name={phone}
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