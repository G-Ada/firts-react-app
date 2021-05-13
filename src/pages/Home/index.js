import { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import { useGifs } from 'hooks/useGifs'

const POPULAR_GIFS = ["Matrix", "Rick", "Morty", "Pandas"]

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()

    const handleSubmit = evt => {
        try {
            if (keyword) {
                evt.preventDefault()
                pushLocation(`/search/${keyword}`)
            }
        } catch (error) {
            console.log(error.message)
        }

    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    return (
        <section className="Home-content">
            <form onSubmit={handleSubmit}>
                <button>Buscar</button>
                <input placeholder="Search a Gif... " onChange={handleChange} type="text" value={keyword}></input>
            </form>
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
                <div className="App-category">
                    <TrendingSearches />
                </div>
            </div>
        </section>
    )
}