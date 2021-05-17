import Gif from 'components/Gifs/Gifs'
import './style.scss'

export default function ListOfGifs({ gifs }) {

    return <div className="ListOfGifs">
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    title={title}
                    id={id}
                    url={url}
                />)
        }
    
    </div>

}