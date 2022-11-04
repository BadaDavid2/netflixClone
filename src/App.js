import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
