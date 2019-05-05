import React , { Component } from 'react'
import './DirectoryBox.css'
import FileBox from '../FileBox/FileBox'

class DirectoryBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            contentMode : "collapse" ,
            tree : []
        }
        this.toggleContentMode = this.toggleContentMode.bind(this)
        this.getTree = this.getTree.bind(this)
        this.fileLogo = this.fileLogo.bind(this)
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

    toggleContentMode(){
        let state = this.state 
        state.contentMode === "collapse" ? state.contentMode = "expand" : state.contentMode = "collapse"
        this.setState(state) 
    }

    getTree(){
        let endPoint = "https://api.github.com/repos/" ;
        let link = `${endPoint}${this.props.data.user}/${this.props.data.repo}/contents/${this.props.data.path}${this.props.data.name}` 
        console.log(link)

        let state = this.state ;
        state.tree = [] ;
        this.setState(state)
        
        fetch(link)
        .then(response => response.json())
        .then(data => {console.log(data)
            data.map(file => {
                state.tree.push(file)
            })
            this.setState(state)
            console.log(this.state.tree)
        })
    }

    componentWillMount(){
        this.getTree() 
    }

    render(){
        return(
            <div className="directory-box">
                <div className="directory-head" onClick = {() => {this.toggleContentMode()} }>
                    <div className="directory-logo">
                        <img src="https://img.icons8.com/color/48/000000/opened-folder.png"/>
                    </div>
                    <div className="directory-name">
                        {this.props.data.name}
                    </div>
                </div>
                <div style = {{paddingLeft : `${this.props.data.level * 15}px` }} className = {`directory-content ${this.state.contentMode}`}>
                    {this.state.tree.map( file => {
                        if(file.type === "file"){
                            return(
                                <FileBox data = {this.fileLogo(file.name)} />
                            )
                        }
                        else{
                            return (
                            <DirectoryBox data = {{
                                name : file.name ,
                                repo : this.props.data.repo ,
                                user : this.props.data.user ,
                                path : `${this.props.data.name}/${file.name}` ,
                                level : this.props.data.level + 1
                            }}/>
                        )
                        }
                    })}
                </div>
            </div>
        )
    }

}

export default DirectoryBox ;