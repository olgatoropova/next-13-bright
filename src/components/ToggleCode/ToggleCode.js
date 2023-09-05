'use client';
import React from 'react';

function ToggleCode({ children }) {
	const [isCodeShown, setIsCodeShown] = React.useState(false);
	return (
		<>
			{isCodeShown ? (
				children
			) : (
				<div className="reveal">
					<button onClick={() => setIsCodeShown(true)}>Reveal Content</button>
				</div>
			)}
		</>
	);
}

export default ToggleCode;
