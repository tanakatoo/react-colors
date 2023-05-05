import React, { useState } from "react"

const Form = ({ addData }) => {
    const INITIAL_STATE = { name: '', hex: '#ffffff' }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addData({ name: formData.name, hex: formData.hex })
    }
    return (<div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Color Name</label>
            <input type="text" name="name" onChange={handleChange} value={formData.name}></input>
            <label htmlFor='hex'>Color value</label>
            <input type="color" name="hex" onChange={handleChange} value={formData.hex}></input>
            <button>Add this color</button>
        </form>
    </div>)
}

export default Form