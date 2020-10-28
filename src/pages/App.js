import React, { useState, useEffect } from 'react';
import useMouse from '@react-hook/mouse-position';
import useWindowSize from '../utils/useWindowSize';

import Logo from '../components/Logo';
import Sketch from '../components/Sketch';
import '../styles/global.css';
import Instagram from '../media/instagram.png';
import Email from '../media/email.png';
import MudCom from '../media/logo.png';
import Slurry from '../media/Slurry.png';

function App() {
	const [blurAmount, setBlurAmount] = useState(undefined);
	const ref = React.useRef(null);
	const size = useWindowSize();
	const mouse = useMouse(ref, {
		enterDelay: 100,
		leaveDelay: 100,
	});

	useEffect(() => {
		const centerX = size.width * 0.5;
		const centerY = size.height * 0.5;
		if (mouse.x !== null && mouse.y !== null) {
			if (mouse.x > centerX && mouse.y > centerY) {
				const blur = mouse.x - centerX + (mouse.y - centerY);
				setBlurAmount(blur / 10);
			}
			if (mouse.x < centerX && mouse.y < centerY) {
				const blur = mouse.x - centerX + (mouse.y - centerY);
				setBlurAmount(blur * -0.1);
			}
			if (mouse.x < centerX && mouse.y > centerY) {
				const blur = mouse.x - centerX + (centerY - mouse.y);
				setBlurAmount(blur * -0.1);
			}

			if (mouse.x > centerX && mouse.y < centerY) {
				const blur = mouse.x - centerX + (centerY - mouse.y);
				setBlurAmount(blur / 10);
			}
		}
	}, [mouse.x, mouse.y, size.height, size.width]);

	return (
		<div
			ref={ref}
			className="w-full h-screen bg-center bg-cover main-container"
		>
			<div className="container flex flex-col items-center justify-center h-full mx-auto">
				<Sketch blur={blurAmount} />
				<div className="w-1/2 sm:w-1/5">
					<img
						src={MudCom}
						alt=""
						className="mx-1"
					/>
					<img
						src={Slurry}
						alt=""
						className="mx-1"
					/>
				</div>
				<div className="absolute bottom-0 flex flex-row items-center justify-center w-full mb-8">
					<img
						src={Instagram}
						alt=""
						className="mx-1"
						style={{ width: '24px' }}
					/>
					<img
						src={Email}
						alt=""
						className="mx-1"
						style={{ width: '27px', height: '22px' }}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
