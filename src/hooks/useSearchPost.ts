/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react'
import { PostType } from "../types/Interfaces"

export const useSearchPost = (Posts: PostType[], searchingItem: string): PostType[] => {
    let searchedPost
    searchedPost = useMemo(() => {        
        return Posts.filter(post => post.postTitle.toLocaleLowerCase().includes(searchingItem.toLocaleLowerCase()))
    }, [Posts, searchingItem])

    return searchedPost
}