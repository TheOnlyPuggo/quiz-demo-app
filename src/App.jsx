//components
import Navbar from "./components/Navbar";
import Question from "./components/Question";

function App() {
	return (
		<div className="h-screen bg-gray-800 flex justify-center">
			<Navbar />
			<div className="mt-14">
				<Question />
				<Question />
				<Question />
			</div>
		</div>
	);
}

export default App;
