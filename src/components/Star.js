import React from 'react';

const Star = (props) => {
	const starStyle = {
		animationDelay: `${props.star.animationDelay}s`,
		backgroundColor: props.star.color,
		width: `${props.star.size}px`,
		height: `${props.star.size}px`,
		opacity: `.${props.star.opacity}`,
		right: `${props.star.right_pos}em`,
		left: `${props.star.left_pos}em`,
		top: `${props.star.top_pos}em`,
		boxShadow: props.star.box_shadow
	}

	return (
		<span className="star" style={starStyle}></span>
	)
}

export default Star;