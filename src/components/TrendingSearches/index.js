import React, { useEffect, useState } from 'react'
import Category from '../Category'
import getTrendingTerms from '../../services/getTrendingTerms'

function TrendingSearches () {
    const [trends, setTrends] = useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrends)
    })

    return <Category name="Tendencias" options={trends}/>
}

export default function LazyTrending () {
    const [show, setShow] = useState(false)

    useEffect(function(){
        const onChange = (entries) => {
            const el = entries[0]
            if(el.isIntersecting) {
                setShow(true)
            } 
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        }, {show})

        observer.observe(document.getElementById('LazyTrending'))
    })

    return <div id="LazyTrending">
        {show ? <TrendingSearches /> : null}
    </div>
}