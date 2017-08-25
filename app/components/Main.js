import React from 'react';
import {Link, Route} from 'react-router-dom';
import Whatido from './Children/Whatido';
import Enhance from './Children/Enhance';

export default class Main extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            firstName: "Kong",
            lastName: "Le",
            location: "Winter Park, Fl"
        };

    }

    render() {
        return (
            <div>
                <div className="Main">
                    <div className="name colored">
                        <h1>{'<  '}{this.state.firstName}{'  >'}</h1>
                    </div>

                </div>
                <Whatido/>
                <Enhance/>
            </div>
        );
    }
}