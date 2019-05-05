import React , { Component } from 'react'
import './FileBox.css'


class LanguageLogo extends Component{
    constructor(props){
        super(props)
        this.style = {color : this.props.data.color} 
    }
    
    render(){
        return(
            <h4 style = {this.style}>
                {this.props.data.ex}
            </h4>
        )
    }
}


class FileBox extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="file-box">
                <div className="file-logo">
                    <LanguageLogo data = {{ex : this.props.data.ex , color : this.props.data.color}}/>
                </div>
                <div className="file-name">
                    <h3>{this.props.data.name}</h3>
                </div>
            </div>
        )
    }
}

export default FileBox 