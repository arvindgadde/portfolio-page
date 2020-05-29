import '../static/index.css'
import React from 'react'
import About from '../src/components/About/About.js'
import Typist from 'react-typist'
import {FadeOutLeft} from 'react-animations'
export default class HomePage extends React.Component {

  state = {render:false,class:""}

  componentDidMount(){
   /* fetch('https://api.github.com/users/nodeicode/repos',{
      method:'GET',
      headers:{
      'Authorization':'token fbdd3205a5fa28578d120f3ee578a7ac2d6df4d2'}
    }).then(res=>res.json())
      .then(response=>{
        response.forEach(element => {
          console.log(JSON.stringify(element["name"]));
        });
      })
      .catch(err=>console.log(err));*/
  }
  
  renderAbout=()=>{
    setTimeout(()=>{
      this.setState({render:true,class:"dis"});
    },300);
  }

  render(){
  const dis = {display:'none'}
  //return(<About/>)
    return (
    <div className="root">
      <Typist
        avgTypingDelay={100}
        startDelay={500}
        className="T1"
        cursor={{blink:true}}
        onTypingDone={this.renderAbout}>
        <a className="a1">Hello!</a>
      <Typist.Delay ms={500}/>
      <Typist.Backspace count={6} delay={50}/>
        </Typist>
      {this.state.render?(<div>  
      <About/>
      <style jsx global>{`.T1{display:none}`}</style>
      </div>):null}
    </div>
  )
}}