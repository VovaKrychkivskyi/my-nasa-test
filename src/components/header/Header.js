import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {UserInfo} from "../user-info/UserInfo";
import {SiteInfo} from "../site-info/SiteInfo";
import {SearchPanel} from "../search-panel/SearchPanel";
import {FindList} from "../find-list/FindList";
import './Header.scss'

export function Header({isDark, setIsDark, setDate, setSatellite}) {
    return (
        <div className='d-flex justify-content-around align-items-center head'>
            <SiteInfo/>
            <FindList setSatellite={setSatellite} setDate={setDate}/>
            <button type="button"
                    className="btn btn-outline-info btn-sm"
                    onClick={() => (setIsDark(!isDark))}>
                {isDark ? 'White' : 'Dark'}
            </button>
            <SearchPanel/>
            <UserInfo/>
        </div>
    )
}