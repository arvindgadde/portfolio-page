import React from 'react'
import './About.css'
import Typist from 'react-typist'
import styled,{keyframes} from 'styled-components'
import {fadeInRight} from 'react-animations'
import '@fortawesome/fontawesome-free/js/all'

const fadein  = keyframes`${fadeInRight}`;

const Card = styled.div`
box-shadow: 0 3px 15px 0 rgb(100,100,100,100.5);
border-radius:10%;
animation: 1.5s ${fadein};
border-type:solid;
border-color:white;
border-width:10px;
`;
const Icon = styled.span`
font-size:8vmin;
color:beige;
animation: 2s ${fadein};
`;
const Linkw = styled.a`
text-decoration:none;
color:inherit;
`; 
export default class About extends React.Component{

  state={show:false};

  componentDidMount(){
    setTimeout(()=>{
      this.setState({show:true});
    },2000);
  }

  render(){
        return(
            <div className="r">
            <Card className="a">
            <img src="../static/profile.jpeg" alt="Profle Pic"/>
            <h1 className="hi">Arvind Gadde</h1>
            </Card>
            <Typist
                avgTypingDelay={100}
                startDelay={2000}
                cursor={{hideWhenDone: true}}
                className="T2">
              <a>About Me 👉</a> 
              </Typist>
            <Card className="b">
              {/*Content under About Me! */}
              <a className="ab"> Experienced Business Intelligence Analyst with a demonstrated history of working in the financial services industry. Designed, developed and implemented innovative Analytical Dashboard solutions and ad-hoc reports for various business sectors using TIBCO Spotfire. Skilled in Databases, Software Development Life Cycle (SDLC), and Visual Basic .NET (VB.NET). Strong research professional with a Bachelor’s Degree focused in Management Information Systems from the University of Illinois at Chicago. 
              </a>
            </Card>
            <Icon className="L I"><Linkw href="https://www.linkedin.com/in/gadde96/"><i className="fab fa-linkedin"/></Linkw></Icon>
            <Icon className="T I"><Linkw href="https://www.facebook.com/arvindgadde8899"><i className="fab fa-facebook"/></Linkw></Icon>

            {/* in the href below add link to your resume! */}
            <Icon className="D I"><p className="t"> Take a look at my Resume!</p><Linkw href="https://dev.to/nodeicode"><i className="fas fa-address-card"/></Linkw></Icon>
            {this.state.show?(<style global jsx>{`.I{display:block}`}</style>):null}
            <div className="footer">
              <p>Contact Me: <a class="footert" href="arvindgadde999@gmail.com"> arvindgadde999@gmail.com</a></p>
            </div>
          </div>
        );
    }}
