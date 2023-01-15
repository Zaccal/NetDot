export const getDisignDate = (data: number) => data < 10 ? `0${data}` : data

export const random = (min: number, max: number) => {
    return Math.floor(
        Math.random() * (max - min) + min
      )
}

export const createRandomDate = () => {
    const date = new Date()
    const day = getDisignDate(random(1, 31))
    const month = getDisignDate(random(1, 12))
    const year = random(2000, date.getFullYear())

    return `${day}.${month}.${year}`
}

export const getPages = (totgalCountPages: number, countPostsInOnePage: number): number => {
    return Math.floor(totgalCountPages / countPostsInOnePage)
}