import { useState } from 'react'
import {Link, useLocation} from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
import './style.scss'

const POPULAR_GIFS = ["Matrix", "Rick", "Morty", "Pandas"]

export default function Home (){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit = evt => {
        try {
            if(keyword){
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
                <input placeholder="Search a Gif... " onChange={handleChange} type="text" value={keyword}></input>
                <button>Buscar</button>
            </form>
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs}/>
            <h3 className="App-title">Los Gifs más populares</h3>
            <ul>
                {
                    POPULAR_GIFS.map((popularGif) => (
                        <li key={popularGif}>
                            <Link to={`/search/${popularGif}`} className="LinkToGifs">
                                Gifs de {popularGif}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}