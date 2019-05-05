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

    fetchData(){
        let path = this.props.data.path 
        let repo = this.props.data.repo
        let user = this.props.data.user
        let endPoint = "https://api.github.com/repos/" ;
        let link = `${endPoint}${user}/${repo}/contents${path}` 
        console.log(link)
        fetch(link)
        .then(Response => Response.json())
        .then(data => {
            console.log(data.download_url)
        })
        //console.log(path , repo , user) 
        return("still no code")
    }

    render(){
        let code = "no code"
        if(this.props.data.path){
            code = this.fetchData()
        }

        return(
            <div className="file-content">
                <h1>this is code ;</h1>
                {code}
            </div>
        )
    }
}

export default FileContent 