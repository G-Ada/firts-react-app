import React, {Suspense} from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner'

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

export default function LazyTrending() {
    const { isNrearScreen, fromRef } = useNearScreen({ distance: '200px' })

    return <div ref={fromRef}>
        <Suspense fallback={<Spinner />}>
        {
            isNrearScreen ? <TrendingSearches /> : <Spinner />
        }
        </Suspense>
    </div>
}