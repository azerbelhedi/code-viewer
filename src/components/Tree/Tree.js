import React , { Component } from 'react'
import './Tree.css'

import FileBox from '../FileBox/FileBox' 
import DirectoryBox from '../DirectoryBox/DirectoryBox'

class Tree extends Component{
    constructor(props){
        super(props)
        this.state = {
            tree : []
        }
        this.fileLogo = this.fileLogo.bind(this) 
        // props contains user and repo !
    }

    fileLogo(fileName){
        // return { ex , color , name}
        let arr = fileName.split(".") 
        let ex = arr[arr.length - 1 ]
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

            case "PNG" :
                color = "grey"
                ex = "PIC"
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
        let treeToRender = [] 
        this.props.data.tree.map(file => {
            if(file.type === "dir"){
                treeToRender.push(<DirectoryBox data = {{
                    name : file.name ,
                    repo : this.props.data.repo ,
                    user : this.props.data.user ,
                    path : `/${file.name}` ,
                    level : 1
                    }}/>)
            }
        })
        this.props.data.tree.map(file => {
            if(file.type === "file"){
                treeToRender.push(<FileBox data = {this.fileLogo(file.name)} extraData = {{path : `/${file.name}`}} />)
            }
        })
        return(
            <div className="tree">
                {treeToRender}
            </div>
        )
    }

}

export default Tree ;