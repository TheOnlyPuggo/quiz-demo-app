import { useState, useEffect } from "react";

import QuestionButton from "./QuestionButton";

function Question(props) {
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

	useEffect(() => {
		buttonStates.map((value, buttonIndex) => {
			if (buttonIndex === props.correctAnswer) {
				if (value) {
					let newArray = [];
					props.questionCorrect.map((data, index) => {
						if (index === props.id) {
							newArray.push(true);
						} else {
							newArray.push(data);
						}
					});

					props.setQuestionCorrect(newArray);
				} else {
					let newArray = [];
					props.questionCorrect.map((data, index) => {
						if (index === props.id) {
							newArray.push(false);
						} else {
							newArray.push(data);
						}
					});

					props.setQuestionCorrect(newArray);
				}
			}
		});

		console.log(props.questionCorrect);
	}, [buttonStates]);

	return (
		<div className="relative border-b border-b-gray-700 w-[800px] h-32 mt-8">
			<p className="text-white text-center text-2xl">{props.title}</p>
			<div className="mt-[50px] flex justify-center">
				{buttonStates.map((state, index) => {
					return (
						<QuestionButton
							key={index}
							index={index}
							buttonStates={buttonStates}
							answer={`Answer ${index + 1}`}
							updateButtonState={updateButtonState}
							question={props.questions[index]}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Question;
