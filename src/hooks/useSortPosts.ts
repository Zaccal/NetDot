import { useMemo } from 'react';
import { PostType } from './../types/Interfaces';
import { sortEnum } from '../types/enums';

type sortOptionType = sortEnum.Title | sortEnum.Description | sortEnum.Date | string

const useSortPosts = (posts: PostType[], sortOption: sortOptionType) => {
    let sortedPosts
    sortedPosts = useMemo(() => {
        if (sortOption === sortEnum.Date) {
            return [...posts].sort((post, post2) => post.createdDate.localeCompare(post2.createdDate))
        }
        else if (sortOption === sortEnum.Title) {
            return [...posts].sort((post, post2) => post.postTitle.localeCompare(post2.postTitle))
        }
        else if (sortOption === sortEnum.Description) {
            return [...posts].sort((post, post2) => post.postBody.localeCompare(post2.postBody))
        }
        else {
            return posts
        }
    }, [posts, sortOption])

    return sortedPosts
}

export default useSortPosts