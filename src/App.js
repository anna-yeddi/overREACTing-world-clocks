import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import CityForm from './components/CityForm'
import Clocks from './components/Clocks'

function App() {
  // Default clock on load
  const initialClocks = [
    {
      city: 'Greenwich',
      gmt: 0,
      id: '007',
    },
  ]
  // Flash the form
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

    setClocks((prevClocks) =>
      prevClocks.concat([{ city: form.city, gmt: form.gmt, id: nanoid(4) }])
    )

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
      <Clocks clocks={clocks} onRemove={handleRemove} />
    </div>
  )
}

export default App
