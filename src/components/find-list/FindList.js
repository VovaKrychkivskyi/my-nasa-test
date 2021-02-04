import React from "react";

export function FindList({setSatellite, setDate}) {

    const onSelected = (e) => {
        setSatellite(e.target.value)
    }

    return (
        <div>
            <select name="satellite" id="satellite" className="btn btn-outline-info btn-sm" onChange={onSelected}>
                <option value="Curiosity">Curiosity</option>
                <option value="Opportunity">Opportunity</option>
                <option value="Spirit">Spirit</option>
            </select>
        </div>
    )
}