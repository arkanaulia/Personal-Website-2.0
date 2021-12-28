import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'
import logo from "./images/logo.png";
import gif1 from "./images/gif1.webp";
import gif4 from "./images/gif5.webp";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBehance } from "react-icons/bs";
import Work from "./component/Work";
import Exp from "./component/Exp";
import Hi from "./component/Hi";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="fixed w-full ">
          <div className="flex justify-between items-center">
            <Link to='/'><img src={logo} className="m-10 lg:m-14 lg:ml-32 md:ml-9" alt="" /></Link>
            <Link to='/hi' className="w-max m-10 lg:mr-32 md:mr-9 text-xl transition ease-in-out link link-underline link-underline-black">say hi!</Link>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 w-full">
          <div className="flex justify-between items-center bottom-0 left-0">
            <Link to='/exp' className="w-max m-20 lg:ml-32 ml-9 text-xl transition ease-in-out link link-underline link-underline-black">experience.</Link>
            <Link to='/work' className="w-max m-20 lg:mr-32 mr-9 text-xl transition ease-in-out link link-underline link-underline-black">work.</Link>
          </div>
        </div>

        <Routes>
        <Route
            path="/"
            element={
              <div className="flex justify-center items-center lg:flex-row flex-col  h-screen">
                <div className="flex w-full lg:w-1/3 items-center justify-center">
                  <p className="w-60 text-lg font-medium text-center lg:text-left lg:w-40">
                    hi, im Arkan. UI/UX // Graphics // Motion // 3D Designer.
                  </p>
                </div>
                <div className="w-full lg:w-max" id="introo">
                  <img
                    src={gif4}
                    alt="gif"
                    className="flex items-center w-max "
                  />
                </div>
                <div className="flex w-full lg:w-1/3 items-center justify-center" id="intro2">
                  <img
                    src={gif1}
                    alt="gif"
                    className="flex items-center w-max"
                  />
                </div>
                <div className="flex w-full lg:w-1/3 items-center justify-center">
                  <div className="w-max flex lg:flex-col lg:space-y-3 lg:space-x-0 space-x-3 text-gray-400 transition  lg:text-3xl text-2xl">
                    <a className="transition hover:text-gray-800" href="https://www.linkedin.com/in/arkanaulia/"><BsLinkedin /></a>
                    <a className="transition hover:text-gray-800" href="https://www.instagram.com/arkanaulia/"><BsInstagram /></a>
                    <a className="transition hover:text-gray-800" href="https://www.github.com/arkanaulia/"><BsGithub /></a>
                    <a className="transition hover:text-gray-800" href="https://www.behance.net/arkanauliaf"><BsBehance /></a>
                  </div>
                </div>
              </div>
            }
          ></Route>
          <Route path='/work' element={<Work/>}/>
          <Route path='/exp' element={<Exp/>}/>
          <Route path='/hi' element={<Hi/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
