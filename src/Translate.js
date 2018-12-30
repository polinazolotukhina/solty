import React, { Component } from 'react';
import './App.css';

export const findVowels = (str)=> {
  return (str.match(/[aeiou]/ig)||[]);
}
export const checkLetter = (l) =>{
    if( findVowels(l).length>0) {
      return l +'l' + l
    }else {
      return l
  }
}
export const translate = (input ) =>{
    const res =  input.split('').map(letter => checkLetter(letter));
    return res.join('');
}

class Input extends Component {
    state = {
        value: '',
        showOutput: false,
        translation:''
    }

    translate = ()=>{
        this.setState({
            showOutput:true,
            translation: translate(this.state.value)
        })
    }
    handleUserInput = (e) => {
        this.setState({
            value: e.target.value,
        });
    }
  render() {
     const {  showOutput  } = this.state;
    return (
      <div>
      <textarea onChange={this.handleUserInput} value={this.state.value} data-test="component-input"/>
      <button data-test="component-button" onClick={()=>{ this.translate()}} > Translate </button>
      {showOutput&&
          <textarea  value={this.state.translation} data-test="component-output"/>
      }

      </div>
    );
  }
}

export default Input;
