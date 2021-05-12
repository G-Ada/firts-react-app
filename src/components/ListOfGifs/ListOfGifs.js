import Gif from '../Gifs/Gifs'
import './style.css'

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