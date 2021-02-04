import React from "react";
import './PagesList.scss'

export function PagesList({page, setPage}) {
    return (
        <div>
            <div className="btn-toolbar justify-content-center up" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group mr-2" role="group" aria-label="Second group">
                    <button onClick={()=>(page===1?'disabled':(setPage(page-1)))} type="button" className="btn btn-secondary">prev</button>
                    <button type="button" className="btn btn-secondary">{page}</button>
                    <button onClick={()=>(setPage(page+1))}type="button" className="btn btn-secondary">next</button>
                </div>
            </div>
        </div>
    )
}