import React, { Component } from 'react';
import Star from './Star';

const colors = [
	'white',
	'#FBF8C4'
]

class StarGenerator extends Component {
	constructor(props){
		super(props);
		this.state = {
			starField: []
		};
		this.setStarCount = this.setStarCount.bind(this);
	}

	getRandomColor() {
		let randomColor = colors[Math.floor(Math.random()*colors.length)];
		return randomColor;
	}

	getRandomInt(min, max) {
	    min = Math.ceil(min);
	    max = Math.floor(max);
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	getRandomString(string_length){
    let random_string = '';
    let random_ascii;
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
	}

	setStarCount() {
		let newNumber = this.getRandomInt(25, 50);
		let newStarField = [];
		let app = this;

		for (var i = 0; i < newNumber; i++) {
		    let newStar = {
		    	size: app.getRandomInt(5, 10),
		    	opacity: app.getRandomInt(2, 5),
		    	right_pos: app.getRandomInt(1, 100),
		    	left_pos: app.getRandomInt(1, 100),
		    	top_pos: app.getRandomInt(1, 100),
		    	color: app.getRandomColor(),
		    	box_shadow: `0 0 ${app.getRandomInt(1, 15)}px 0 ${app.getRandomColor()}`,
		    	key: app.getRandomString(9),
		    	animationDelay: app.getRandomInt(1, 10)
		    }
		    newStarField.push(newStar);
	  	}
		this.setState({ starField: newStarField });
	}

	componentDidMount() {
		this.setStarCount();
	    let app = this;
	    setInterval(function(){
	      app.setStarCount();
	    }, 40000);
	}

	render() {
		return (
			<section className="star-generator">
				{this.state.starField.map((item, index) => (
			    	<Star key={item.key} star={item} />
			    ))}
			</section>
		)
	}
}

export default StarGenerator;