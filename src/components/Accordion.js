import React, { Component } from 'react';

class Accordion extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false }
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let openSetting = !this.state.open;
		console.log(`OPENING THIS ACORDIONG`);
		this.setState({ open: openSetting });
	}

	render() {
		let props = this.props || {};
		let state = this.state || {};

		return (
			<section className={`ge-accordion ${state.open ? 'open' : ''}`} onClick={this.handleClick}>
				<h2 className="ge-accordion-title">
					<span className={`indicator ${state.open ? 'tilted' : ''}`}>&#8227;</span>
					{ props.title }
				</h2>
				{this.state.open 
					? <p className="ge-accordion-content">Info will go here...</p>
					: ''
				}
			</section>
		)
	}
}

export default Accordion;