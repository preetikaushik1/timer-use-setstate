
import React from "react";

class Setstate extends React.Component{

    state = {
        Hours:0
    }
    state = {
        Menout:0
    }
    state = {
        Secound:0
    }

    functionIncrement = () => {
       this.setState({
        Hours: this.state.Hours + 1
       }) 
    }

    functionDecrement = () => {
        this.setState({
         Menout: this.state.Menout - 1
        }) 
     }

     render(){
        return(
            <>
                <h1>{this.state.Hours} , {this.state.Menout}</h1>
                <button onClick={this.functionIncrement}>+</button>
                <button onClick={this.functionDecrement}>-</button>
            </>
        )
     }
}


export default Setstate