import React from 'react'
import { Container, Button } from 'react-bootstrap'

export default function Search({ onChange, value, onSubmit }) {
  return (
    <Container>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          name="search"
          type="text"
          value={value}
          placeholder="Search Movies"
          onChange={(e) => onChange(e)}
        ></input>
        {/* <button type="submit">Search</button> */}
        <Button type="submit" variant="secondary" size="sm" active>
          Search
        </Button>
      </form>
    </Container>
  )
}
