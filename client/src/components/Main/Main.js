import React, { Component } from 'react';
import TopNews from './TopNews';

class Main extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        
    }
    render(){
        return (
            <main className="main"> 
              <div className="container">
                <TopNews />
              </div>
            </main>
        )
    }
}

export default Main;