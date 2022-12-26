import Ml from "./assets/aiml.jpeg"
import "./signin.css"
import gl from "./assets/ggl.jpeg"
import tw from "./assets/twitter.jpeg"
import {Link,Routes,Route} from "react-router-dom"
import SignUp from "./signup"
export default function signin(){
    return (
      <div className="signin flex ">
<img src={Ml}></img>
<div className="text-white text-left im">
    <div className="circle "></div>
<div className="text-4xl font-bold mt-12">Work with Us</div>
<div className="mt-4">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ratione esse fuga dicta! Non, suscipit dicta. Provident totam labore, minus neque iste voluptas.</div>
</div>
<div className="siblck text-black">
    <div className="first text-right mr-8 mt-4 text-sm cursor-pointer">
        <p>Don't have an account?<p className="underline inline-block font-bold">Sign up?</p></p>
    </div>
    <div className="second flex flex-col">
        <div className="text-2xl text-left ml-8 mt-20 font-bold">Sign In</div>
        <button className="sibtn font-bold mt-8"><img src={gl} className=" inline-block mr-3 "></img>Continue with Google</button>
        <button className="sibtn font-bold mb-10"><img src={tw} className=" inline-block mr-3 "></img>Continue with Twitter</button>
        <div className="line"><p className="merge">OR</p></div>
    </div>
    <div className="third flex flex-col mt-8">
        <div>
        <p className="text-left ml-36">User name or email address</p>
<input className="thirdip"></input>
        </div>

<div className="flex"><p className="text-left ml-36">Your password</p> <p className="ml-52"><i class="fa-solid fa-eye-slash mr-4"></i>Hide</p></div>
<input className="thirdip"></input>
<div className="font-bold underline text-right mr-36">Forgot Your Password</div>
<button className="tbtn">Sign In</button>

<Link to="/signup">
<div className="mt-2 mr-32 cursor-pointer text-black">
<p>Don't have an account?<p className="underline inline-block font-bold">Sign up?</p></p>
</div>
</Link>



    </div>
</div>
{/* <Routes>
    <Route path="/signup" element={<SignUp/>}></Route>
</Routes>  */}
      </div> 
        
    );
}