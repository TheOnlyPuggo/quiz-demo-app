function QuestionButton(props) {
	return (
		<div>
			{!props.buttonStates[props.index] && (
				<button
					onClick={() => props.updateButtonState(props.index)}
					className="text-white border border-cyan-600 rounded-lg w-44 h-10 mx-5 hover:bg-cyan-700 active:bg-cyan-900"
				>
					{props.question}
				</button>
			)}
			{props.buttonStates[props.index] && (
				<button
					onClick={() => props.updateButtonState(props.index)}
					className="text-white bg-cyan-600 rounded-lg w-44 h-10 mx-5 hover:bg-cyan-700 active:bg-cyan-900"
				>
					{props.question}
				</button>
			)}
		</div>
	);
}

export default QuestionButton;
