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
        this.playCode = this.playCode.bind(this)
    }

    playCode(e){
        /*
        console.log("path please")
        console.log(this.props.extraData.path)
        */
       this.props.displayCode(this.props.extraData.path)
    }

    render(){
        return(
            <div className="file-box" onClick = {(e) => {this.playCode(e)}}>
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