import Gif from 'components/Gifs/Gifs'
import Spinner from 'components/Spinner'
import useGlobalGifs from 'hooks/useGlobalGifs'
import useSingleGif from 'hooks/useSingleGif'
import { Redirect } from 'wouter'
import './detail-styles.scss'

export default function Detail({ params }) {
    const {gif, isLoading, isError} = useSingleGif({id: params.id})

    if(isLoading) return <Spinner />
    if(isError) return <Redirect to='/404' />
    if(!gif) return null

    return <>
        <h3 className="App-title">{gif.title}</h3>
        <Gif {...gif} />
    </>
}