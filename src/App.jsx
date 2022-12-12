import { useState, useEffect } from "react";

//components
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import data from "./data";

function App() {
	const [questionCorrect, setQuestionCorrect] = useState([]);
	const [allowRender, setAllowRender] = useState(false);

	useEffect(() => {
		let newArray = [];
		data.map(() => {
			newArray.push(false);
		});

		setQuestionCorrect(newArray);
		setAllowRender(true);
	}, []);

	return (
		<div className="h-screen bg-gray-800 flex justify-center">
			<Navbar />
			<div className="mt-14">
				{allowRender != 0 &&
					data.map((question, index) => {
						return (
							<Question
								key={question.id}
								id={question.id}
								title={question.title}
								questions={question.questions}
								correctAnswer={question.correctAnswer}
								questionCorrect={questionCorrect}
								setQuestionCorrect={setQuestionCorrect}
							/>
						);
					})}
			</div>
		</div>
	);
}

export default App;
