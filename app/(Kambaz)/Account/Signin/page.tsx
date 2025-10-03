import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signin() {
 return (
   <div id="wd-signin-screen">
     <h1>Sign in</h1>
     <FormControl placeholder="username" id="wd-username" className="mb-2" defaultValue="mpaclob"/>
     <FormControl placeholder="password" type="password" id="wd-password" className="mb-2" defaultValue="helloWorld" />
     <Link id="wd-signin-btn" href="/Dashboard" className="btn btn-primary w-100 mb-2"> 
     Sign in </Link>
     <Link href="Signup" id="wd-signup-link"> Sign up </Link>
   </div>
);}
