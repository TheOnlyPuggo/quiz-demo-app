import { useState, useEffect } from "react";

function Question() {
	const [buttonStates, setButtonStates] = useState([
		false,
		false,
		false,
		false,
	]);

	const updateButtonState = (event) => {
		let newArray = [];
		buttonStates.map((state, index) => {
			if (event.target.name != index) {
				newArray.push(false);
			} else {
				newArray.push(true);
			}
		});

		setButtonStates(newArray);
	};

	useEffect(() => {
		console.log(buttonStates);
	}, [buttonStates]);

	return (
		<div className="relative border-b border-b-gray-700 w-[700px] h-32 mt-8">
			<p className="text-white text-center text-2xl">
				Why did the titanic sink?
			</p>
			<div className="mt-[50px] flex justify-between">
				{!buttonStates[0] && (
					<button
						name="0"
						className="text-white border border-cyan-600 rounded-lg w-44 h-10 mx-5 hover:bg-cyan-700 active:bg-cyan-900"
						onClick={updateButtonState}
					>
						Answer 1
					</button>
				)}
				{buttonStates[0] && (
					<button
						name="0"
						className="text-white bg-cyan-600 rounded-lg w-44 h-10 mx-5 hover:bg-cyan-700 active:bg-cyan-900"
						onClick={updateButtonState}
					>
						Answer 1
					</button>
				)}

				{!buttonStates[1] && (
					<button
						name="1"
						className="text-white border border-cyan-600 rounded-lg w-44 h-10 mx-5 hover:bg-cyan-700 active:bg-cyan-900"
						onClick={updateButtonState}
					>
						Answer 2
					</button>
				)}
				{buttonStates[1] && (
					<button
						name="1"
						className="text-white bg-cyan-600 rounded-lg w-44 h-10 mx-5 hover:bg-cyan-700 active:bg-cyan-900"
						onClick={updateButtonState}
					>
						Answer 2
					</button>
				)}

				{!buttonStates[2] && (
					<button
						name="2"
						className="text-white border border-cyan-600 rounded-lg w-44 h-10 mx-5 hover:bg-cyan-700 active:bg-cyan-900"
						onClick={updateButtonState}
					>
						Answer 3
					</button>
				)}
				{buttonStates[2] && (
					<button
						name="2"
						className="text-white bg-cyan-600 rounded-lg w-44 h-10 mx-5 hover:bg-cyan-700 active:bg-cyan-900"
						onClick={updateButtonState}
					>
						Answer 3
					</button>
				)}

				{!buttonStates[3] && (
					<button
						name="3"
						className="text-white border border-cyan-600 rounded-lg w-44 h-10 mx-5 hover:bg-cyan-700 active:bg-cyan-900"
						onClick={updateButtonState}
					>
						Answer 4
					</button>
				)}
				{buttonStates[3] && (
					<button
						name="3"
						className="text-white bg-cyan-600 rounded-lg w-44 h-10 mx-5 hover:bg-cyan-700 active:bg-cyan-900"
						onClick={updateButtonState}
					>
						Answer 4
					</button>
				)}
			</div>
		</div>
	);
}

export default Question;
