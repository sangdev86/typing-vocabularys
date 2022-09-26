import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StoreProvider from "./store";
import GlobalProvider from "./store/GlobalProvider";

const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<React.StrictMode>
		<GlobalProvider>
			<App />
		</GlobalProvider>
	</React.StrictMode>
);

reportWebVitals();
