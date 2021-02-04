import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {APIKey} from "../constans";
import './MovieCards.scss'

export function MovieCards({page, satellite}) {
    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState([]);

    const renderIsLoading = () => {
        return (
            <div className="lds-dual-ring"></div>
        )
    };

    const fetchMongo = async () => {
        setIsLoading(true);
        try {
            const result = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${satellite}/photos?sol=1000&page=${page}&api_key=${APIKey}`);
            const data = await result.json();
            const newMovie = data.photos;

            setIsLoading(false);
            setMovie(newMovie);
        } catch (e) {
            console.error(e);
            setIsLoading(false)
        }
    };

    useEffect(() => {
        fetchMongo();
    }, [page, satellite]);

    useEffect(() => {
        fetchMongo();
    }, []);

    return (
        <div className='head'>
            {!movie.length > 0 ? <div>no more image, sorry</div> : null}
            {isLoading && renderIsLoading() ||
            movie.map(value => {
                return (
                    <Link key={value.id} to={`${value.rover.id}`}>
                        <div className='headzz card btn btn-outline-info'
                             key={value.rover.id}>
                            <img className="card-img-top"
                                 src={value.img_src}
                                 alt={value.id}/>
                            <div className="card-body">
                                <h5 className="card-title"><p>{value.rover.name}</p></h5>
                            </div>
                            <div className="card-header-tabs">
                                <div className="card-header">
                                    <p className="card-text">{value.earth_date}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
            }
        </div>
    );
}


