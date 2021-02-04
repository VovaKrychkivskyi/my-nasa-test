import React from "react";
import './SearchPanel.scss'

export function SearchPanel() {
    return (
        <nav className="navbar">
            <form className="form-inline">
                <input className="form-control btn-sm mr-sm-2" type="search" placeholder="Search is fake panel"
                       aria-label="Search"/>
                <button className="btn btn-outline-info  btn-sm my-2 my-sm-0" type="button">Search</button>
            </form>
        </nav>
    )
}