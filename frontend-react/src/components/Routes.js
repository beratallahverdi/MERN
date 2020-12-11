import React from 'react';
import {
    Route
} from 'react-router-dom';
import {Home} from './Berat/Home';
import {About} from './Berat/About';
import {Contact} from './Berat/Contact';
import Dersler from './Berat/Dersler';

class Routes extends React.Component {
    constructor(props){ 
        super(props); 
        this.state = { color : '#4cb96b' }; 
    } 
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/dersler/:dersKodu" component={Dersler} />
            </div>
        );
    }
}

export default Routes; 