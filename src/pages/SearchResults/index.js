import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import { useCallback, useEffect, useRef } from 'react'
import debounce from 'just-debounce-it'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const {isNrearScreen, fromRef} = useNearScreen( {
    externalRef : loading ? null : externalRef,
    once: false
  } )
  
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [])
  
  useEffect(function(){
    if(isNrearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNrearScreen])
  
  return <>
    {loading
      ? <Spinner />
      : <>
        <h3 className="App-title">Gifs de {decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </>
    }
  </>
}