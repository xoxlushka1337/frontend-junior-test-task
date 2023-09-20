import "./App.css";
import data from "../src/data.json";
import Select from "./components/Select.jsx";

function App() {
	const handleSelect = selectedItem => {
		console.log("Выбран элемент:", selectedItem);
	};

	return (
		<div className="wrapper">
			<h1>Компонент Select с автодополнением</h1>
			<Select data={data} onSelect={handleSelect} />
		</div>
	);
}

export default App;
