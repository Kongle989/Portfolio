import React from 'react';
import {Link, Route} from 'react-router-dom';
import AboutMe from './Children/AboutMe';
import NavBar from './Children/NavBar';

export default class Main extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            firstName: "Kong",
            lastName: "Le",
            location: "Winter Park, Fl",
            email: "kongle989@yahoo.com",
            phone: "626-272-1962",
            linkedin: "https://www.linkedin.com/in/kong-le-4a2108a7/",
            github: "https://github.com/Kongle989"
        };

    }

    render() {
        return (
            <div>
                <div className="Main">
                    <NavBar/>
                </div>
                <div className="aboutmecont">
                    <AboutMe/>
                </div>
            </div>
        );
    }
}