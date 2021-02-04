import React, {useState} from "react";
import {PagesList} from "../pages-list/PagesList";
import {MovieCards} from "../movie-cards/MovieCards";


export function MoviesList({satellite}) {
    const [page, setPage] = useState(1);
    return (
        <div>
            <MovieCards page={page} satellite={satellite}/>
            <PagesList page={page} setPage={setPage}/>
        </div>
    )
}