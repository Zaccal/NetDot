import { Form } from "react-bootstrap"
import { OptionSelectType } from "../../types/Interfaces"
import List from "../List/List"
import { ChangeEvent } from "react"

interface SelectProps {
    defualtOption: string,
    options: OptionSelectType[],
    value: string,
    onChange: (event?: ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({defualtOption, options, onChange, value}: SelectProps) => {
  return (
    <Form.Select value={value} onChange={onChange} aria-label="Default select example">
        <option disabled value={defualtOption}>{defualtOption}</option>
        <List items={options} renderItem={option => { return <option key={option.id} value={option.value}>{option.name}</option> }}/>
    </Form.Select>
  )
}

export default Select