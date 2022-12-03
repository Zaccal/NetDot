import React from 'react';
import Find from "./Find";
import Sort from "./Sort";

const PostFilter = ({filter, setFilter, sortPosts}) => {
    return (
        <div>
            <Find value={filter.findInput} onChange={event => setFilter({...filter, findInput: event.target.value})}></Find>
            <Sort
                value={filter.selectedSort}
                sortPosts={sortPosts}
                options={[
                    {
                        title: 'sortDescription',
                        value: 'Сортировка по описанию',
                    },
                    {
                        title: 'sortTitle',
                        value: 'Сортировка по названию',
                    },
                    {
                        title: 'sortDate',
                        value: 'Сортировка по дате',
                    },
                ]}/>
        </div>
    );
};

export default PostFilter;