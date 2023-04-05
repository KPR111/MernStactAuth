import React,{useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginUser=async(e)=>{
        e.preventDefault();

        const res=await fetch("/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        })

        const data=res.json();

        if(res.status===400 || !data){
            window.alert("Invalid Credentials");

        }
        else{
            window.alert("Login Successful");
            console.log("Login Successful");
            navigate("/");
        }
    }
    return (
        <>
            <form method='POST'>
                <div className="form-group widthonly60">
                    <label className='boldtext' for="exampleInputEmail1">Email address</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group widthonly60">
                    <label className='boldtext' for="exampleInputPassword1">Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" name="password" id="password" placeholder="Password" />
                </div>
                <input type="submit" onClick={loginUser} id="login" name="login" value="login" className="btn btn-primary marginleft100"/>
            </form>
            <div>
                <center className='hvacc'>
                    <NavLink to="/signup">Iam need to Register</NavLink>
                </center>
            </div>

        </>
    )
}

export default Login