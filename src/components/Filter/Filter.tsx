/* eslint-disable react-hooks/exhaustive-deps */
import { useState, ChangeEvent, useEffect } from 'react'
import { PostType } from "../../types/Interfaces"
import SearchInput from "../Inputs/SearchInput/SearchInput"
import Select from "../select/Select"
import { SelectDateItems } from './FilterData'
import { useSearchPost } from '../../hooks/useSearchPost'
import { TypeSetState } from '../../types/types'
import useSortPosts from '../../hooks/useSortPosts'

interface FilterProps {
  Posts: PostType[], 
  setFilteredPosts: TypeSetState<PostType[]>
}

const Filter = ({Posts, setFilteredPosts}: FilterProps) => {
  const [searchingItem, setSearchingItem] = useState<string>('')
  const [sortOption, setSortOption] = useState<string>('Sort on...')
  
  const searchedPosts = useSearchPost(Posts, searchingItem)
  const sortedPosts = useSortPosts(searchedPosts, sortOption)

  useEffect(() => {  
    setFilteredPosts(sortedPosts)
  }, [searchedPosts, sortOption])

  return (
    <>
        <SearchInput value={searchingItem} onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchingItem(event.target.value)}/>
        <Select onChange={event => setSortOption(event?.target.value!)} value={sortOption} defualtOption="Sort on..." options={SelectDateItems}/>
    </>
  )
}

export default Filter