import React , { Component } from 'react'

import TopBar from './components/TopBar/TopBar' 
import Tree from './components/Tree/Tree'

class App extends Component{
    constructor(props){
        super(props) 
        this.state = {
            link : "" ,
            user : "" ,
            repo : "" ,
            tree : []
        }

        this.savelink = this.savelink.bind(this)
        this.linkToData = this.linkToData.bind(this) 
        this.getTree = this.getTree.bind(this)
    }

    linkToData(link){
        // return {name : "name" , repo : "repo"}
        link = link.split("/") ;
        let user = link[3] 
        let repo = link[4]
        return ({user : user , repo : repo }) 
    }

    savelink(link){
        let state = this.state 
        state.link = link 
        let data = this.linkToData(link)
        state.user = data.user 
        state.repo = data.repo

        this.setState(state) 
        /*console.log(this.state.link)*/ 
        /*console.log(this.linkToData(link))*/
        console.log(this.state)
        this.getTree() 
    }

    getTree(){
        let endPoint = "https://api.github.com/repos/" ;
        let link = `${endPoint}${this.state.user}/${this.state.repo}/contents` 
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
        })
    }

    render(){
        return(
            <div className="app">
                <TopBar function = {this.savelink}/>
                <Tree data = {{user : this.state.user , repo : this.state.repo , tree : this.state.tree}}/>
            </div>
        )
    }

}


export default App ;