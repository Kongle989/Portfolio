import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Bubble from './Bubble';
import AboutMe from './Children/AboutMe';
import {NavBar} from './Children/NavBar';
import MySkills from './Children/MySkills';
import Welcome from './Children/Welcome';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

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
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.pathname.split('/')[1]}
                                       classNames="pageSlider"
                                       timeout={1000}
                                       mountOnEnter={true}
                                       unmountOnExit={true}>
                            <Switch location={this.props.location}>
                                <Route exact path="/" component={Welcome}/>
                                <Route path="/aboutme" component={AboutMe}/>
                                <Route path="/myskills" component={MySkills}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <Bubble/>
            </div>
        )
    }
}