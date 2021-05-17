import React, { useState } from 'react'

function SearchForm({onSubmit}) {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt => {
        try {
            if (keyword) {
                evt.preventDefault()
                onSubmit({keyword})
            }
        } catch (error) {
            console.log(error.message)
        }

    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <button>Buscar</button>
            <input placeholder="Search a Gif... " onChange={handleChange} type="text" value={keyword}></input>
        </form>
    )
}

export default React.memo(SearchForm)