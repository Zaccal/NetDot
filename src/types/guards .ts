export const isAvatar = (avatar: any): avatar is string => {
    return typeof avatar === 'string'
}

export const isBoolean = (element: any): element is boolean => {
    return typeof element === 'boolean'
}