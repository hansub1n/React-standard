import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Counter from "./components/Counter";
import Status from "./components/Status";
import Footer from "./components/Footer";

function App() {
	const [count, setCount] = useState(0);
	const title = `Counter App`;
	const year = 2024;

	return (
		<>
			<Header title={title} />
			<Content />
			<Counter count={count} setCount={setCount} />
			<Status count={count} />
			<Footer year={year} />
		</>
	);
}

export default App;
