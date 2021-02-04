import React, {useEffect, useState} from "react";
import {APIKey} from "../constans";
import './PosterPreview.scss'


export function PosterPreview(routerProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [poster, setPoster] = useState([]);
    const {history, satellite, date, setDate} = routerProps;

    const onGoBackClick = () => {
        history.push('/')
    };
    const renderIsLoading = () => {
        return (
            <div className="lds-hourglass"></div>
        )
    };
    const onSelectedDate = (e) => {
        setDate(e.target.value)
    }
    const fetchNasa = async () => {
        setIsLoading(true);
        try {
            const result = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${satellite}/photos?earth_date=${date}&api_key=${APIKey}`);
            const data = await result.json();
            const newPoster = data.photos;
            setIsLoading(false);
            setPoster(newPoster);
        } catch (e) {
            console.error(e);
            setIsLoading(false)
        }
    };
    useEffect(() => {
        fetchNasa();
    }, [date]);

    useEffect(() => {
        fetchNasa();
    }, []);

    return (
        <div className='head'>
            {!poster.length > 0 ? <div>no more image, sorry</div> : null}
            {isLoading && renderIsLoading() ||
            poster.map(value => {
                return (
                    <div key={value.id} className="head btn btn-outline-info">

                        <div className="card-body">
                            <input type="date" className='btn btn-warning' onChange={onSelectedDate}/>
                            <button type='button' className='btn btn-warning' onClick={onGoBackClick}>go back
                            </button>
                            <a href="#" className='btn btn-warning'>add to favorite list</a>
                        </div>

                        <img className="card-img-top"
                             src={value.img_src}
                             alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">{value.earth_date}</h4>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
