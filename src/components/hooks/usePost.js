import {useMemo} from "react";

export const useSortedPost = (posts, selectedSort) => {
    let sortedPosts;
    sortedPosts = useMemo(() => {
            if (selectedSort === 'sortTitle') {
                return [...posts].sort((a, b) => a.title.localeCompare(b.title))
            }
            else if (selectedSort === 'sortDescription') {
                return [...posts].sort((a, b) => {
                    if (a.description) {
                        return a.description.localeCompare(b.description)
                    }
                    return a.body.localeCompare(b.body)
                })
            }
            else if (selectedSort === 'sortDate') {
                return [...posts].sort((a, b) => a.date.localeCompare(b.date))
            }
            else {
                return posts
            }
        },
        [posts, selectedSort]);

    return sortedPosts
}

export const usePost = (posts, selectedSort, input) => {
    const sortedPosts = useSortedPost(posts, selectedSort)

    let sortedAndSearchPost
    sortedAndSearchPost = useMemo(() => {
        return [...sortedPosts].filter(post => post.title.toLowerCase().includes(input.toLowerCase()))
    }, [input, sortedPosts])

    return sortedAndSearchPost
}