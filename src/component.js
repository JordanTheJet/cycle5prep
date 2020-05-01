import React from 'react';

class ComponentJ extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            coolness: 1000000,
            
        }
    }
    incrementer = ()=>{
        this.setState({
            coolness: this.state.coolness+1
        })
    }
    render(){
        return(
            <div onClick={this.incrementer}>
                {this.state.coolness}
            </div>
        )
    }
}
export default ComponentJ;