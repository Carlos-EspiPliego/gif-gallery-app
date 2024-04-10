import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

const GifGalleryApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball'])
    const onAddCategory = (value) => {
        if (categories.includes(value)) return
        setCategories([value, ...categories])
    }

    return (
        <>
            <h1>Gif Gallery App</h1>
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

export default GifGalleryApp