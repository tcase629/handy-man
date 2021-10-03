import { useState, useEffect } from 'react';

const ServiceForm = ({ addService, id,serv_type, cost,  updateService, setEdit }) => {
  const [service, setService] = useState({ serv_type: "",  cost: "" })

  useEffect( () => {
    if (id) {
      setService({ serv_type, cost })
      // setTodo({ title: title, complete: complete })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateService(id, service)
      setEdit(false)
    } else {
      addService(service)
    }
    setService({ serv_type: "", cost: "" })
  }

  return (
    <>
    <br />
    <br />
    <br />
      <form onSubmit={handleSubmit}>
        <input 
          name="serv_type"
          value={service.serv_type}
          onChange={(e) => setService({...service, serv_type: e.target.value })}

          required
          placeholder="serv_type"
        />

        <input
          name="cost"
          value={service.cost}
          onChange={(e) => setService({...service, cost: e.target.value})}
          required
          placeholder="cost"        
          />
        <button type="submit">Submit</button>
      </form>

    </>
  )
}

export default ServiceForm;