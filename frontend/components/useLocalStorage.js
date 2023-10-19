import React, { useState } from "react";

function useLocalStorage(key, initialValue) {

    const readStorage = () => {
        return JSON.parse(localStorage.getItem(key))
    }


    const [value, setValue] = useState(() => {
        return readStorage || initialValue

    })

    const storage = (newValue) => {
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }





    return [value, storage]
}
export default useLocalStorage