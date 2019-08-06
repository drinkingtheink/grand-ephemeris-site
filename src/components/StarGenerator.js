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

	setStarCount() {
		let newNumber = this.getRandomInt(40, 75);
		let newStarField = [];
		let app = this;

		for (var i = 0; i < newNumber; i++) {
		    let newStar = {
		    	size: app.getRandomInt(5, 15),
		    	opacity: app.getRandomInt(3, 9),
		    	right_pos: app.getRandomInt(1, 100),
		    	left_pos: app.getRandomInt(1, 100),
		    	top_pos: app.getRandomInt(1, 100),
		    	color: app.getRandomColor(),
		    	box_shadow: `0 0 ${app.getRandomInt(1, 15)}px 0 ${app.getRandomColor()}`
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
	    }, 20000);
	}

	render() {
		return (
			<section className="star-generator">
				{this.state.starField.map((item, index) => (
			    	<Star key={`star-${index}`} star={item} />
			    ))}
			</section>
		)
	}
}

export default StarGenerator;