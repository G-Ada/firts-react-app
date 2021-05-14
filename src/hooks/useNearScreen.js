import {useEffect, useState, useRef} from 'react'

export default function useNearScreen({distance = '100px'} = {}) {
    const [isNrearScreen, setShow] = useState(false)
    const fromRef = useRef()


    useEffect(function(){
        let observer
        const onChange = (entries) => {
            const el = entries[0]
            if(el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            } 
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
            ? IntersectionObserver 
            : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            })
    
            observer.observe(fromRef.current)
        })



        return () => observer && observer.disconnect()
    })

    return {isNrearScreen, fromRef}

}
