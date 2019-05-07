import React , { Component } from 'react'
import './FileContent.css'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco , atelierEstuaryDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


class Code extends Component{
    constructor(props){
        super(props)
        this.language = this.language.bind(this)
    }

    language(path){
        path = path.split(".") 
        let ex = path[path.length - 1]
        if(ex === "js"){
            ex = "javascript"
        }
        return ex
    }

    render(){
        return(
            <div className="code">
                {/* 
                <SyntaxHighlighter  language='javascript' style={atelierEstuaryDark}>
                    {this.language(this.props.data.path)}
                </SyntaxHighlighter>
                */}
                <SyntaxHighlighter language= {this.language(this.props.data.path)} style={atelierEstuaryDark}>{this.props.data.code}</SyntaxHighlighter>
            </div>
        )
    }
}

class FileContent extends Component{
    constructor(props){
        super(props)
        this.state = {
            content : "empty" ,
            path : "" ,
            code : ""
        }
        this.fetchData = this.fetchData.bind(this)
        this.xmlToContent = this.xmlToContent.bind(this)
        this.setCode = this.setCode.bind(this)
    }

    fetchData(newPath){
        //let path = this.props.path 
        let path = newPath
        let repo = this.props.data.repo
        let user = this.props.data.user
        let endPoint = "https://api.github.com/repos/" ;
        let link = `${endPoint}${user}/${repo}/contents${path}` 
        //console.log(link)
        fetch(link)
        .then(Response => Response.json())
        .then(data => {
            //console.log(data.download_url)
            let state = this.state 
            state.content = data.download_url
            state.code = "loading ..."
            this.setState(state)
            this.xmlToContent(this.setCode)
        })
    }

    componentWillReceiveProps(newProps){
        console.log(newProps.path)
        if(newProps.path != ""){
            this.fetchData(newProps.path)
        }
    }

    setCode(code){
        let state = this.state 
        state.code = code 
        this.setState(state)
    }

    xmlToContent(setCode){
        // convert
        setCode("loading...")
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                setCode(this.responseText)
            }
        };
        xhttp.open("GET", this.state.content, true);
        xhttp.send();
    }

    render(){
        return(
            <div className="file-content">
                <Code data = {{code : this.state.code , path : this.props.data.path}}/>
            </div>
        )
    }
}

export default FileContent 