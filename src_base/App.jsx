import React, {Component} from "react"
import logo from "./logo.svg"
import "./App.css"

export default class App extends Component {
    render () {
        return(
            <div>
                <img src={logo} alt="logo" style={{width:100,height:100}}/>
                <h4 className="title">啷个里格啷啷 啷个里格啷</h4>
            </div>
        )
    }
}