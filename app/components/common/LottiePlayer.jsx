import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LoadingAnim = () => {

	const animationContainer = useRef(null);

	//renders lottie animation on mounting
	useEffect(() => {
		const instance = lottie.loadAnimation({
			container: animationContainer.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: "/loading.json",

		});


		return () => instance.destroy()
	}, []);

	return (
		<div
			ref={animationContainer}
			style={{
				width: '100px',
				height: '100px',
			}}
		/>
	);
};

export default LoadingAnim;
