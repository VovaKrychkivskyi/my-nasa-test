import React from "react";
import {socialMediaIcons} from '../constans';
import {Badge} from 'reactstrap';
import './Footer.scss'


export function Footer() {
    return (
        <div className="my-footer">
            <div className="my-footer-content">
                <Badge color="info"
                       pill className="my-footer-text">Some text about authors</Badge>
                <div className="my-footer-social-media-wrapper">
                    {
                        socialMediaIcons.map((value, index) => {
                            return (
                                <img key={index}
                                     className='my-footer-social-media-icon'
                                     src={value.src}
                                     alt={value.alt}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className='my-footer-text'> All rights reserved. may-app © 2021</div>
        </div>
    )
}

