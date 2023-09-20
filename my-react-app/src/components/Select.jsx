import React, { useState } from "react";
import "../scss/_select.css";

const Select = ({ data, onSelect }) => {
	const [inputValue, setInputValue] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [filteredData, setFilteredData] = useState([]);

	const handleInputChange = e => {
		const value = e.target.value;
		setInputValue(value);
		toggleDropdown(value);
	};

	const toggleDropdown = value => {
		const filtered = data.filter(item =>
			item.name.toLowerCase().includes(value.toLowerCase())
		);

		setFilteredData(filtered);
		setIsOpen(true);
	};

	const handleSelectItem = item => {
		setInputValue(item.name);
		setIsOpen(false);
		onSelect(item);
	};

	return (
		<div className="select">
			<input
				className="select__input"
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Выберите из списка..."
				onClick={() => toggleDropdown(inputValue)}
			/>
			<ul className={`select__dropdown ${isOpen ? "open" : ""}`}>
				{filteredData.map(item => (
					<li
						className="select__list"
						key={item.name}
						onClick={() => handleSelectItem(item)}>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Select;
