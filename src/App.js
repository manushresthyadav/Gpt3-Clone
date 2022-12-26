import logo from './logo.svg';
import './App.css';
import Header from "./header.js"
import './index.css'
import FirstSection from "./firstsection"
import Logo from "./onlylogo"
import Blog1 from "./blog"
import Feature1 from "./feature"
import Feature2 from "./feature2"
import Cat from './cat'
import Blog2 from './blog2'
import Footer from './footer'
import BothFtrs from './ftrs'
import SignIn from "./Signin"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <div>
      <FirstSection/>
      <Logo/>
      <Blog1/>
      <BothFtrs/>
      <Cat/>
      <Blog2/>
      <Footer/>
     {/* <SignIn/> */}
      </div>
      
    </div>
  );
}

export default App;
