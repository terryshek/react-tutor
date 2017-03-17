import React, { Component } from "react";
import "./app.css"
import Clock from "./Clock.jsx";
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            deadline:"2017-04-18",
            newDeadline:''
        }
    }
    changeDeadline(){
        this.setState({
            deadline:this.state.newDeadline
        })
    }
    render() {
        return (
            <div className="App">
                <div className="App-title">Count down champ to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline}/>
                <Form inline>
                    <FormControl
                    className="Deadline-input" 
                    type="text" 
                    placeholder="new date"
                    onChange={event=>this.setState({newDeadline:event.target.value})} />
                    <Button onClick={this.changeDeadline.bind(this)}>Submit</Button>
                </Form>
            </div>
        )
    }
}
export default App;