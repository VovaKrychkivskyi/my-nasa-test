import React, {createContext, useState} from "react";
import {Header} from '../header/Header'
import {Footer} from "../footer/Footer";
import {MoviesList} from "../movies-list/MoviesList";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {PosterPreview} from "../poster-preview/PosterPreview";
import './MainPage.scss'

const DarkThemeContext = createContext();

export function MainPage() {
    const [isDark, setIsDark] = useState(false)
    const [satellite, setSatellite] = useState('Curiosity')
    const [date, setDate] = useState('2021-02-03')

    return (
        <DarkThemeContext.Provider value={isDark}>
            <Router>
                <div className={isDark ? 'dark' : ''}>
                    <Header isDark={isDark} setIsDark={setIsDark} setSatellite={setSatellite} setDate={setDate}/>
                    <Switch>
                        <Route path='/' exact>
                            <MoviesList satellite={satellite}/>
                        </Route>
                        <Route path='/:id'
                               render={(routerProps) => (<PosterPreview satellite={satellite} date={date}
                                                                        setDate={setDate}{...routerProps}
                               />)}
                        />
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </DarkThemeContext.Provider>
    )
}