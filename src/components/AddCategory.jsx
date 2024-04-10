import { useState } from "react"

export const AddCategory = (props) => {
    const { onNewCategory } = props
    const [inputValue, setinputValue] = useState('Dragon ball')

    const onInputChange = ({target}) => {
        setinputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 2) return
        // setCategories( categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setinputValue('')
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>

            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}