import React , { Component } from 'react'
import './FileContent.css'

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
                {this.state.code}
            </div>
        )
    }
}

export default FileContent 