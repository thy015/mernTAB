 import React from 'react'
 import axios from 'axios'
export default class Test extends React.Component{
    state={content:null}
    async componentDidMount() {
        try {
            const response = await 
            axios.get("http://localhost:4000/home");
            this.setState({
                content: response.data
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    render(){
        return <h1> {this.state.content}</h1>
    }
}