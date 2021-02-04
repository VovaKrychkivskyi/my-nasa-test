import React, {useEffect, useState} from "react";
import {Badge} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './UserInfo.scss'

export function UserInfo() {

    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const renderIsLoading = () => {
        return (
            <div className="lds-hourglass"></div>
        )
    };

    const renderUser = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random() * 9) + 1}`);
            const data = await response.json();
            const newUser = data;
            setIsLoading(false);
            setUser([newUser]);

        } catch (e) {
            console.error(e);
            setIsLoading(false)
        }
    };

    useEffect(() => {
        renderUser()
    }, []);

    return (
        <div>
            <Badge className='d-flex align-items-center justify-content-around head'
                   color="info"
                   pill>
                <div>
                    {
                        isLoading && renderIsLoading() || user.map(value => {
                            return (
                                <div key={value.id} >
                                    {value.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        isLoading && renderIsLoading() ||
                        <img className='cat'
                             src={`https://cataas.com/cat/says/hello%20world!${Math.floor(Math.random() * 100)}`}
                             alt="cats"/>
                    }
                </div>
            </Badge>
        </div>
    )
}