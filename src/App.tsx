import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { LayoutContainer } from "./styled-components/layout.styled";

function App() {
	return (
		<Provider store={store}>
			<NavBar />
			<LayoutContainer>
				<Home />
			</LayoutContainer>
		</Provider>
	);
}

export default App;
