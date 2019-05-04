import React , { Component } from 'react'
import './Tree.css'

import FileBox from '../FileBox/FileBox' 

class Tree extends Component{
    constructor(props){
        super(props)
        this.state = {
            tree : []
        }
    }

    fileLogo(fileName){
        // return { ex , color , name}
    }

    render(){
        return(
            <div className="tree">
                <FileBox data = {{name : "main.js" , ex : "JS" , color : "yellow"}} />
                <FileBox data = {{name : "index.html" , ex : "HTML" , color : "orange"}} />
                <FileBox data = {{name : "style.css" , ex : "CSS" , color : "#1ca8ff"}} />
                <FileBox data = {{name : "style.idk" , ex : "FILE" , color : "white"}} />

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