import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import { useGifs } from 'hooks/useGifs'
import SearchForm from 'components/SearchForm'
import { useCallback } from 'react'

export default function Home() {
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()

    const handleSubmit = useCallback(({ keyword }) => {
        try {
            pushLocation(`/search/${keyword}`)
        } catch (error) {
            console.log(error.message)
        }
    }, [pushLocation])

    return (
        <section className="Home-content">
            <SearchForm onSubmit={handleSubmit} />
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