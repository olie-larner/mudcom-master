import React from 'react';

import Faccy from '../media/Faccy';

const Sketch = (props) => {
	const { blur } = props;

	return (
		<div className="w-1/2 sm:w-1/5 pb-8">
			<Faccy blur={blur} />
		</div>
	);
};

export default Sketch;
