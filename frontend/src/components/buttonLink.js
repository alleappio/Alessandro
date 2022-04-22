import "./buttonLink.css";
import React, {Component} from 'react';

class ButtonLink extends Component{
    render(){
        return(
            <span>
                <button 
                    onClick={(e)=>{
                        e.preventDefault();
                        window.location.href=this.props.link;
                    }} 
                    type="button" 
                    className="buttonLink" 
                    >
                    <img 
                        src={this.props.immagine}
                        alt="logo"
                    />
                </button>
            </span>
        );
    }
}
export default ButtonLink;
