import React, { Component } from "react";

class CountPeople extends Component{
    constructor(){
        super();
        this.state = {
            entrycount: 0,
            exitcount: 0,
            c: 0
        };

        this.updateEntry = this.updateEntry.bind(this);
        this.updateExit = this.updateExit.bind(this);
    }
    updateEntry(){
        this.setState((prevState, props)=>{
            return {entrycount: prevState.entrycount + 1}
        });
    }
    updateExit(){
        this.setState((prevState, props)=>{
            return {exitcount: prevState.exitcount + 1}
        });
    }

    render(){
        return(
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '200px' }}>
                <div>
                    <button onClick={this.updateEntry} style={{ backgroundColor: 'lightgreen', marginRight: '10px', padding: '5px 10px', cursor: 'pointer' }}>
                        Login
                    </button>
                    <span>{this.state.entrycount} People Entered!!!</span>
                </div>

                <div>
                    <button onClick={this.updateExit} style={{ backgroundColor: 'lightgreen', marginRight: '10px', padding: '5px 10px', cursor: 'pointer' }}>
                        Exit
                    </button>
                    <span>{this.state.exitcount} People Left!!!</span>
                </div>
            </div>
        );
    }
}
export default CountPeople;