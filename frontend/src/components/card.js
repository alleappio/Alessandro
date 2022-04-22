import React, {Component} from 'react';
import "./card.css"

class Card extends Component{
	render(){
		return(
			<div>
				<div className="card" style={{width: "18rem", textAlign: "center"}}>
	  				<img className="imgCard" src={this.props.immagine} alt="" />
	  				<div className="card-body">
	    				<h5 className="card-title black">{this.props.titolo}</h5>
	    				<p className="black">{this.props.descrizione}</p>
	    				<button className="red btn" style={{backgroundColor: "#B33030", borderColor: "#B83836", color: "#FFFFFF"}} onClick={(e)=>{
							e.preventDefault();
							window.location.href=this.props.link;
						}}>Dettagli</button>
	  				</div>
				</div>
			</div>
		);
	}
}
export default Card;
