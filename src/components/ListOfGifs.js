import { useState, useEffect } from 'react';
import Gif from './Gifs'
import getGifs from '../services/getGifs'

export default function ListOfGifs({ params }) {
    const { keyword } = params
    // const [loading, setLoading] = useState(false)

    const [gifs, setGifs] = useState({
        loading: false, results: []
    })

    useEffect(function () {
        setGifs(
            actualGifs => ({ loaging: true, results: gifs.results })
        )

        getGifs({ keyword })
            .then(gifs => {
                setGifs({ loading: false, results: gifs })
                // setGifs(gifs)
                // setLoading(false)
            })
    }, [keyword])

    if (gifs.loading) return <i>Cargando</i>

    return <div>
        {
            gifs.results.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    title={title}
                    id={id}
                    url={url}
                />)
        }
    )
    </div>

}