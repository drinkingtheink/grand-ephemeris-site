import React from 'react';

const InstrumentWidgets = () => {
	return (
	<svg className="ge-instrument-widgets" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 923 232">
		<g id="switches-widget" className="widget">
			<rect id="left-bar" x="20" width="17" height="224"/>
			<rect id="center-bar" x="85" width="17" height="224"/>
			<rect id="right-bar" x="150" width="17" height="224"/>
			<rect className="switch left-switch" y="17" width="57" height="24"/>
			<rect className="switch center-switch" x="65" y="17" width="57" height="24"/>
			<rect className="switch right-switch" x="130" y="17" width="57" height="24"/>
		</g>

		<g id="text-widget" className="widget">
			<g className="text-panel"><rect x="618" y="6" width="305" height="216" rx="20" ry="20"/></g>
			<g id="top-text">
				<rect className="text-panel-text" x="644" y="32" width="169" height="14" rx="7" ry="7"/>
				<rect className="text-panel-text" x="824" y="32" width="54" height="14" rx="7" ry="7"/>
				<rect className="text-panel-text" x="644" y="59" width="109" height="14" rx="7" ry="7"/>\
			</g>

			<g id="bottom-text">
				<rect className="text-panel-text" x="644" y="117" width="84" height="14" rx="7" ry="7"/>
				<rect className="text-panel-text" x="740" y="117" width="84" height="14" rx="7" ry="7"/>
				<rect className="text-panel-text" x="644" y="152" width="169" height="14" rx="7" ry="7"/>
				<rect className="text-panel-text" x="824" y="152" width="54" height="14" rx="7" ry="7"/>
			</g>
		</g>

		<g id="radar-widget" className="widget">
			<g id="base-circle">
				<path d="M431.67,260a116,116,0,1,1,116-116A116.13,116.13,0,0,1,431.67,260Zm0-221a105,105,0,1,0,105,105A105.12,105.12,0,0,0,431.67,39Z" transform="translate(-22.67 -28)"/>
			</g>
			<g id="hori-meter">
				<path d="M496.87,130.92c-3.66-.59-7.61-1.13-11.74-1.61l-.46,4c4.07.48,8,1,11.57,1.59Z" transform="translate(-22.67 -28)"/>
				<path d="M426.19,130.53l0-4c-4,0-7.92.13-11.81.26l.13,4C418.33,130.66,422.27,130.57,426.19,130.53Z" transform="translate(-22.67 -28)"/>
				<path d="M473.36,128.13c-3.8-.32-7.77-.6-11.79-.82l-.23,4c4,.23,7.91.5,11.68.82Z" transform="translate(-22.67 -28)"/>
				<path d="M520.12,136.53a87,87,0,0,0-11.56-3.38l-.89,3.9a83,83,0,0,1,11,3.21Z" transform="translate(-22.67 -28)"/>
				<path d="M449.76,126.78c-3.88-.13-7.85-.21-11.81-.25l0,4c3.93,0,7.87.13,11.72.25Z" transform="translate(-22.67 -28)"/>
				<path d="M379.45,133.3l-.47-4c-4.12.48-8.07,1-11.74,1.62l.64,3.95C371.49,134.32,375.38,133.78,379.45,133.3Z" transform="translate(-22.67 -28)"/>
				<path d="M356.45,137.1l-.9-3.9A85.17,85.17,0,0,0,344,136.61l1.45,3.73A81.32,81.32,0,0,1,356.45,137.1Z" transform="translate(-22.67 -28)"/>
				<path d="M402.77,131.31l-.23-4c-4,.23-8,.51-11.79.83l.34,4C394.87,131.82,398.8,131.54,402.77,131.31Z" transform="translate(-22.67 -28)"/>
				<path d="M530.15,142.18c-1.42.43-2.86.85-4.32,1.26-1.48,2.23-8.1,5.91-26.12,9.1s-42,4.95-67.53,4.95-49.51-1.76-67.53-4.95-24.64-6.87-26.12-9.1c-1.47-.41-2.9-.83-4.32-1.26,0,.11,0,.21,0,.32,0,13.94,58.61,19,98,19s98-5.06,98-19C530.17,142.39,530.15,142.29,530.15,142.18Z" transform="translate(-22.67 -28)"/>
			</g>
			<g id="vert-meter">
				<path d="M446,231.3a26.86,26.86,0,0,0,7.86-6.42l6,5.27a34.72,34.72,0,0,1-10.27,8.29ZM460,215.91a85.71,85.71,0,0,0,4.8-10.15l7.43,3a93.92,93.92,0,0,1-5.25,11.1ZM468.52,195c1-3.53,2-7.27,2.77-11.12l7.83,1.64c-.85,4-1.83,8-2.92,11.71Zm4.74-22.44c.53-3.74,1-7.59,1.27-11.46l8,.65c-.33,4-.77,8-1.32,11.93Zm1.89-23c0-1.83.07-3.71.07-5.57s0-4-.08-6l8-.22c.06,2.05.09,4.14.09,6.2s0,3.88-.07,5.78Zm-1.94-34.52,7.92-1.14c.56,3.89,1,7.9,1.35,11.93l-8,.66C474.18,122.64,473.74,118.79,473.21,115.05Zm-4.8-22.43,7.67-2.26c1.1,3.73,2.09,7.67,2.95,11.7l-7.83,1.66C470.39,99.9,469.44,96.16,468.4,92.63Zm-8.55-20.87,7-4a92.55,92.55,0,0,1,5.31,11.09l-7.42,3A84.41,84.41,0,0,0,459.85,71.76ZM445.67,56.55l3.48-7.2a34.05,34.05,0,0,1,10.4,8.17l-6,5.33A26.18,26.18,0,0,0,445.67,56.55Z" transform="translate(-22.67 -28)"/>
				<path d="M439.78,232.64c-16.16-4.83-32.11-39.11-32.11-88.39s15.95-83.56,32.11-88.39q.94-4.32,2-8.52c-23.75,2.14-42.08,43.93-42.08,96.91S418,239,441.75,241.16Q440.72,237,439.78,232.64Z" transform="translate(-22.67 -28)"/>
			</g>
				
			<circle className="radar-blip" cx="356.5" cy="62.5" r="16.5"/>
		</g>
		

	</svg>
	)
}

export default InstrumentWidgets;