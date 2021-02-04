import React from "react";
import {Badge} from 'reactstrap';
import './SiteInfo.scss'

export function SiteInfo() {
    return (
        <div>
            <Badge className='d-flex align-items-center justify-content-around head'
                   color="info"
                   pill>
                <div>
                    <img className='logo' src={`https://i.gifer.com/BUOg.gif`} alt="avatar"/>
                </div>
                <div className='pl-5'>Nasa db</div>
            </Badge>
        </div>
    )
}
