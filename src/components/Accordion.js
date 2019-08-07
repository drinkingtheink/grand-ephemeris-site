import React, { Component } from 'react';

class Accordion extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false }
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let openSetting = !this.state.open;
		this.setState({ open: openSetting });
	}

	render() {
		let props = this.props || {};
		let state = this.state || {};
		let contentRow;
		if (props.content) {
			contentRow = props.content.split('\n').map((item, i) => {
			    return <p className="ge-accordion-content" key={i}>{item}</p>;
			});	
		} 

		return (
			<section className={`ge-accordion ${state.open ? 'open' : ''}`} onClick={this.handleClick}>
				<h2 className="ge-accordion-title">
					<span className={`indicator ${state.open ? 'tilted' : ''}`}>&#8227;</span>
					{ props.title }
				</h2>
				{state.open 
					? contentRow
					: ''
				}
			</section>
		)
	}
}

export default Accordion;