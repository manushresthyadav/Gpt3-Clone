import './su.css'
import Gmail from "./assets/gmail.jpeg"
import Fb from "./assets/fb.png"
import {Link,Routes,Route} from "react-router-dom"  
import Fs from "./firstsection"
export default function signup(){


   

    return (
<div className="su ">
    <div className='blck flex flex-col text-black relative'>
        <Link to="/">
        <div className='one-right text-black'>
        <i class="fa-sharp fa-solid fa-xmark fa-xl"></i>
        </div>
        </Link>
       
        <div className='two mt-16'>
            <div className='circle'></div>
            <div className='text-2xl w-64 m-auto font-bold mt-4' >
                Unlimited free access to our resources
            </div>
            <p className='text-sm'>Sign Up to See more</p>
        </div>
        <div className='third'>
<button className='text-white bg-black subtn'>Continue with Email</button>
<button className='text-black subtn tb'><img src={Fb} className="w-8 inline-block mr-3"></img>Continue with Facebook</button>
<button className='text-black subtn tb'><img src={Gmail} className="w-8 inline-block mr-6"></img>Continue with Google</button>
        </div>
        <div className='fourth text-sm mt-4 flex flex-col'>
            <div>
            <p className='text-center font-thin'>By continuing, you agree to the <p className='underline inline-block cursor-pointer'>Terms of Service</p><p className='inline-block'>and acknowledge you have read our</p> <p className='underline font-bold inline-block cursor-pointer'>Privacy Policy</p></p>
            </div>
            
            <div className='mt-10 font-bold cursor-pointer'>Already a member? <p className='inline-block underline cursor-pointer'> Log In</p></div>
        </div>
        {/* <Routes>
            <Route path='/' element={<Fs/>}></Route>
        </Routes> */}
    </div>
</div>
    );
}

