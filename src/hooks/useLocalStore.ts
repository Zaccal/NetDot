/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

// LS = Local Store

function useLocalStore<T>(key: string, initialValue: T): [T, (newValue: T) => void] {
    const getValue = (): T => {
        const storage = localStorage.getItem(key)

        if (storage) {       
            return JSON.parse(storage)
        }

        return initialValue
    }
    
    const [value, setValue] = useState(getValue)

    const setNewValue = (newValue: T) => setValue(newValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setNewValue]
}

export default useLocalStore