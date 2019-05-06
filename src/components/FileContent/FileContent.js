import React , { Component } from 'react'
import './FileContent.css'

class FileContent extends Component{
    constructor(props){
        super(props)
        this.state = {
            content : "empty" ,
            path : ""
        }
        this.fetchData = this.fetchData.bind(this)
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
        })
    }

    componentWillReceiveProps(newProps){
        console.log(newProps.path)
        if(newProps.path != ""){
            this.fetchData(newProps.path)
        }
    }

    render(){
        return(
            <div className="file-content">
                <h1>this is code ;</h1>
                {this.state.content}
            </div>
        )
    }
}

export default FileContent 