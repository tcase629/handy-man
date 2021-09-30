import { useState, useEffect } from 'react';

const WorkerForm = ({ addWorker, id, name, phone, specialty, updateWorker, setEdit }) => {
  const [worker, setWorker] = useState({ name: "",  specialty: "", phone: "" })

  useEffect( () => {
    if (id) {
      setWorker({ name, phone, specialty })
      // setTodo({ title: title, complete: complete })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateWorker(id, worker)
      setEdit(false)
    } else {
      addWorker(worker)
    }
    setWorker({ name: "", specialty: "", phone: "" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="name"
          value={worker.name}
          onChange={(e) => setWorker({...worker, name: e.target.value })}

          required
          placeholder="Name"
        />

        <input
          name="phone"
          value={worker.phone}
          onChange={(e) => setWorker({...worker, phone: e.target.value})}
          required
          placeholder="Phone"        
          />

        <input
          name="specialty"
          value={worker.specialty}
          onChange={(e) => setWorker({...worker, specialty: e.target.value})}
          required
          placeholder="Specialty"        
          />
       
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default WorkerForm;