export const getPageCount = (totalPosts, postsInOnePage) => {
    return Math.ceil(totalPosts / postsInOnePage)
}