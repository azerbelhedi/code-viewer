import React , { Component } from 'react'
import './Tree.css'

import FileBox from '../FileBox/FileBox' 

class Tree extends Component{
    constructor(props){
        super(props)
        this.state = {
            tree : []
        }
        this.fileLogo = this.fileLogo.bind(this) 
    }

    fileLogo(fileName){
        // return { ex , color , name}
        let arr = fileName.split(".") 
        let ex = arr[1]
        ex = ex.toUpperCase() ;
        let color ;
        switch(ex){
            case "JS" :
                color = "yellow"
            break

            case "HTML" :
                color = "orange"
            break
            
            case "CSS" :
                color = "#1ca8ff"
            break   

            case "JSON" :
                color = "red"
            break 

            case "MD" :
                color = "#4460ff"
                ex = "INFO"
            break

            default :
                color = "white"
                ex = "FILE"
            break
        }
        return(
            {name : fileName , ex : ex , color : color}
        )
    }

    render(){
        return(
            <div className="tree">
                <FileBox data = {this.fileLogo("main.js")} />
                <FileBox data = {this.fileLogo("index.html")} />
                <FileBox data = {this.fileLogo("style.css")} />
                <FileBox data = {this.fileLogo("config.json")} />
                <FileBox data = {this.fileLogo("azer.idk")} />
                <FileBox data = {this.fileLogo("readme.md")} />

                {this.props.data.tree.map(file => {
                    console.log(file)
                    return(
                        <h4>{file.name}</h4>
                    )
                })}
            </div>
        )
    }

}

export default Tree ;