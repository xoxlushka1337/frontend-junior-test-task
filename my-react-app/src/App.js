import React, { useState } from "react";
import "./App.css";
import data from "../../data.json";
import Select from "./Select.jsx";

function App() {
	const [selectedItem, setSelectedItem] = useState(null);

	const handleSelect = item => {
		setSelectedItem(item);
	};

	return (
		<div className="App">
			<h1>Select with Autocomplete</h1>
			<Select data={data} filterKey="name" callback={handleSelect} />
			{selectedItem && (
				<div>
					<h2>Selected Item</h2>
					<p>Name: {selectedItem.name}</p>
					{/* Другие свойства объекта selectedItem */}
				</div>
			)}
		</div>
	);
}

export default App;
