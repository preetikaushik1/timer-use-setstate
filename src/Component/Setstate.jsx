
import React from "react";

class Setstate extends React.Component{

   state = {
    count: 0,
    count2:0,
    count3:0,
   }

   functionHours =() => {
    this.setState({
        count:this.state.count +1
    })

   }
   functionMinutes=() => {
    this.setState({
        count2:this.state.count2 +1
    })
    
   }
  
   functionSecound =() => {
    this.setState({
        count3:this.state.count3 +1
    })
    
   }
   
   functionHours2 =() => {
    this.setState({
        count:this.state.count -1
    })

   }
   functionMinutes2=() => {
    this.setState({
        count2:this.state.count2 -1
    })
    
   }
  
   functionSecound2 =() => {
    this.setState({
        count3:this.state.count3 -1
    })
    
   }
  
   
     render(){
        return(
            <>
            <div className="outerbox">
            <h1>Set Your Current time</h1>
                <h1><span className="three">{this.state.count}</span> <span className="one">{this.state.count2}</span> 
                <span className="two">{this.state.count3}</span></h1>



<div className="outerbox2">
    <div className="box1">
    <span>Hours<br/>
               <button onClick={this.functionHours}className="btn1">+</button>
               <button onClick={this.functionHours2} className="btn2">-</button></span>
    </div>


    <div className="box1">
    <span>Minutes<br/>
                <button onClick={this.functionMinutes}className="btn1">+</button>
                <button onClick={this.functionMinutes2}className="btn2">-</button></span>

    </div>


    <div className="box1">
    <span>Secound<br/>
                <button onClick={this.functionSecound} className="btn1">+</button>
                <button onClick={this.functionSecound2} className="btn2">-</button></span>

    </div>
</div>








                               </div>
            </>
        )
     }
}


export default Setstate