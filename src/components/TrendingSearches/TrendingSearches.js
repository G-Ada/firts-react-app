import React, { useEffect, useState } from 'react'
import Category from 'components/Category'
import getTrendingTerms from 'services/getTrendingTerms'


export default function TrendingSearches () {
    const [trends, setTrends] = useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category name="Trendings" options={trends}/>
}