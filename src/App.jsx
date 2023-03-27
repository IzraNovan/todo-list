import React from "react";
import { StateContext } from "./context/StateContext";
import Main from "./pages/Main";

function App() {
	return (
		<StateContext>
			<Main />
		</StateContext>
	);
}

export default App;
