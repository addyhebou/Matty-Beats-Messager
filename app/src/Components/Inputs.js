import React, { Component } from 'react';
import Message from './Message';

export default class Inputs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            compliment: '',
            loaded: false,
        }

        this.publish = this.publish.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCompliment = this.handleChangeCompliment.bind(this);
    }

    handleChangeName({ target }) {
        this.setState({
          name: target.value
        });
    }

    handleChangeCompliment({ target }) {
        this.setState({
          compliment: target.value
        });
    }
    
    publish() {
        this.setState({ loaded: true, })
    }
    
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter name of duet-er here..." 
                    value={ this.state.name}
                    onChange={ this.handleChangeName } 
                />
      
                {/* <input 
                    type="text" 
                    name="compliment" 
                    placeholder="Enter assumed compliment here..."
                    value={ this.state.compliment } 
                    onChange={ this.handleChangeCompliment } 
                /> */}
      
                <button value="Send" onClick={ this.publish }>Publish</button>

                {this.state.loaded && <Message name = {this.state.name}/>}
            </div>
        )
    }
}

