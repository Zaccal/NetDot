import { ReactNode } from "react"

interface ListProps<T> {
    items: T[],
    renderItem: (item: T) => ReactNode,
}

function List<T>({items, renderItem}: ListProps<T>) {
    return (
        <>
            {items.map(renderItem)}
        </>
    )
}

export default List