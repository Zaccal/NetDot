import { OptionSelectType } from '../../types/Interfaces'
import { sortEnum } from '../../types/enums'

export const SelectDateItems: OptionSelectType[] = [
    {
        id: 1,
        value: sortEnum.Date,
        name: 'Sort on date'
    },
    {
        id: 2,
        value: sortEnum.Title,
        name: 'Sort on title'
    },
    {
        id: 3,
        value: sortEnum.Description,
        name: 'Sort on decription'
    },
    {
        id: 4,
        value: sortEnum.disableSort,
        name: 'Disable sort'
    }
]