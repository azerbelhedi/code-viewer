import React , { Component } from 'react'
import './TopBar.css'

class TopBar extends Component{
    constructor(props){
        super(props) 
        this.state = {
            link : ""
        }
        this.handleLinkChange = this.handleLinkChange.bind(this)
    }

    handleLinkChange(e){
        let state = this.state 
        state.link = e.target.value 
        this.setState(state)
        /*console.log(this.state)*/
    }

    render(){
        return(
            <div className="top-bar">
                <input placeholder = "repository's link" type="text" onChange = {(e) => {this.handleLinkChange(e)}}/>
                <button onClick = {
                    () => {
                        this.props.function(this.state.link) 
                    }
                }>start</button>
            </div>
        )
    }
}

export default TopBar ;