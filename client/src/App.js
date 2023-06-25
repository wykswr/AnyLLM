import './App.css';
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/chat"} element={<ChatPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
