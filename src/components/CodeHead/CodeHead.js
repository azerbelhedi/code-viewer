import React , { Component } from 'react'
import './CodeHead.css'

class CodeHead extends Component{
    render(){
        return(
            <div className="code-head">
                <h1>
                    {this.props.data.user ? <span className="uer-repo"> {this.props.data.user}/{this.props.data.repo}</span> : "" }
                    {this.props.data.path ? <span className="files">{this.props.data.path}</span> : "" }
                </h1>
            </div>
        )
    }
}

export default CodeHead 