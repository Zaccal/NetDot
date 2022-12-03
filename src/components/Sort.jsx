import React from 'react';
import Select from "./UI/select/Select";

const Sort = ({options, defaultValue = 'Сортировка по...', value, sortPosts}) => {
    return (
        <Select value={value} onChange={event => sortPosts(event.target.value)}>
            <option disabled value={defaultValue}>{defaultValue}</option>
            {
                options.map(option => <option key={option.value} value={option.title}>{option.value}</option>)
            }
        </Select>
    );
};

export default Sort