import React, { Component } from "react";

class ComplaintRegister extends Component{
    constructor(props){
        super(props);
        this.state = {
            ename: '',
            complaint: '',
            NumberHolder: Math.floor(Math.random() * 100)
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value });
    }

    handleSubmit(event){
        var msg = 'Thanks' + this.state.ename + '\nYour Complaint was Submitted.\nTransaction ID is: ' + this.state.NumberHolder;
        alert(msg);
        event.preventDefault();
    }

    render(){
        return(
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1 style={{ color: 'red' }}>Register your complaints here!!!</h1>
                <form onSubmit={this.handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ display: 'inline-block', width: '100px' }}>Name:</label>
                        <input type="text" name="ename" value={this.state.ename} onChange={this.handleChange} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ display: 'inline-block', width: '100px', verticalAlign: 'top' }}>Complaint:</label>
                        <textarea name="complaint" value={this.state.complaint} onChange={this.handleChange} rows="3" />
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ComplaintRegister;