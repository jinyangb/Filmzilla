import React from 'react'

export default function Search({ onChange, value, onSubmit }) {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        name="search"
        type="text"
        value={value}
        placeholder="Search Movies"
        onChange={(e) => onChange(e)}
      ></input>
      <button type="submit">Search</button>
    </form>
  )
}
