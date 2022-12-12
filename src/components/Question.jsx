import { useState, useEffect } from "react";

import QuestionButton from "./QuestionButton";

function Question() {
	const [buttonStates, setButtonStates] = useState([
		false,
		false,
		false,
		false,
	]);

	const updateButtonState = (id) => {
		let newArray = [];
		buttonStates.map((state, index) => {
			if (id != index) {
				newArray.push(false);
			} else {
				newArray.push(true);
			}
		});

		setButtonStates(newArray);
	};

	return (
		<div className="relative border-b border-b-gray-700 w-[800px] h-32 mt-8">
			<p className="text-white text-center text-2xl">
				Why did the titanic sink?
			</p>
			<div className="mt-[50px] flex justify-center">
				{buttonStates.map((state, index) => {
					return (
						<QuestionButton
							index={index}
							buttonStates={buttonStates}
							answer={`Answer ${index + 1}`}
							updateButtonState={updateButtonState}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Question;
