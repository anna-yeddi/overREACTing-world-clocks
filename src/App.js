import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import CityForm from './components/CityForm'
import Clocks from './components/Clocks'

function App() {
  const initialClocks = [
    {
      city: 'New York',
      gmt: -5,
      id: '007',
    },
  ]
  const emptyForm = { city: '', gmt: 0 }

  const [clocks, setClocks] = useState(initialClocks)
  const [form, setForm] = useState(emptyForm)

  const handleInput = (name, value) => {
    // Update form state
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    // Update state with a new clock with new id
    // const formWithId = {..}
    setClocks((prevClocks) =>
      prevClocks.push({ city: form.city, gmt: form.city, id: nanoid(4) })
    )
    console.log('Form ', form, 'clocks ', clocks)

    // Flush form
    setForm(emptyForm)
  }

  const handleRemove = (id) => {
    // Remove the clock from state
    setClocks((prevClocks) => prevClocks.filter((o) => o.id !== id))
  }

  return (
    <div className="container">
      <h1>World Clocks</h1>
      <CityForm form={form} onInput={handleInput} onSubmit={handleSubmit}>
        Add Clock
      </CityForm>
      {clocks.map((o) => (
        <Clocks clock={o} onRemove={handleRemove} key={o.id} />
      ))}
    </div>
  )
}

export default App
