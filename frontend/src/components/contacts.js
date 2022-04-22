import React, {Component} from 'react';
import ButtonLink from './buttonLink';
import instaIcon from "../img/instaIcon.svg";
import facebookIcon from "../img/facebookIcon.svg"
import googleIcon from "../img/googleIcon.svg"
import "./contacts.css";
class Contacts extends Component{
    render(){
        return(
            <div>
                <h1> Questi sono i miei contatti: </h1>
                <br />
                <ButtonLink 
                    immagine={instaIcon} 
                    link="https://www.instagram.com/alessandro.appio/" 
                />
                <ButtonLink 
                    immagine={facebookIcon}
                    link="https://www.facebook.com/alessandro.appio"
                />
                <ButtonLink 
                    immagine={googleIcon}
                    link="mailto:alle.appio@gmail.com"
                />
            </div>
        );
    }
}

export default Contacts