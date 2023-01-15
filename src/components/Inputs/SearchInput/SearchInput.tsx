import { ChangeEventHandler } from 'react'
import { InputGroup } from "react-bootstrap"
import { FormControl } from "react-bootstrap"

interface SearchProps {
  value: string,
  onChange: ChangeEventHandler
}

const SearchInput = ({value, onChange}: SearchProps) => {
  return (
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">🔎</InputGroup.Text>
        <FormControl
          placeholder="Search"
          aria-label="text"
          aria-describedby="basic-addon1"
          value={value}
          onChange={onChange}
        />
    </InputGroup>
  )
}

export default SearchInput