import React,{useState} from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'


const Signup = () => {
    const navigate=useNavigate();
    const [user, setUser] = useState({
        name:"", email:"", phone:"", work:"", password:"", cpassword:""
    })
    const changehandler=e=>{
        console.log(e.target.value)
        setUser({...user, [e.target.name]:e.target.value})
    }
    const postData=async(e)=>{
        e.preventDefault();
        const {name, email, phone, work, password, cpassword}=user;
        const res=await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        })
        const data=await res.json();
        if(data.status===422 || !data){
            window.alert("Invalid Registration")
            console.log("Invalid Registration")
        }
        else{
            window.alert("Registration Successfull")
            console.log("Registration Successfull")
            navigate("/login")
        }
    }
    return (
        <>
            <form method="POST">
                <div className="form-group widthonly60">
                    <label className='boldtext' for="exampleInputEmail1">Name</label>
                    <input type="email" autoComplete='off' value={user.name} onChange={changehandler} className="form-control" name="name" id="name" aria-describedby="emailHelp" placeholder="Enter your Name" />
                </div>
                <div className="form-group widthonly60">
                    <label className='boldtext' for="exampleInputEmail1">Email address</label>
                    <input type="email" autoComplete='off' value={user.email} onChange={changehandler} className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group widthonly60">
                    <label className='boldtext' for="exampleInputEmail1">Phone</label>
                    <input type="email" autoComplete='off' value={user.phone} onChange={changehandler} className="form-control" name="phone" id="phone" aria-describedby="emailHelp" placeholder="Enter Phone number" />
                </div>
                <div className="form-group widthonly60">
                    <label className='boldtext' for="exampleInputEmail1">Work</label>
                    <input type="email" autoComplete='off' value={user.work} onChange={changehandler} className="form-control" name="work" id="work" aria-describedby="emailHelp" placeholder="Enter YOur work" />
                </div>
                <div className="form-group widthonly60">
                    <label className='boldtext' for="exampleInputPassword1">Password</label>
                    <input type="password" autoComplete='off' value={user.password} onChange={changehandler} className="form-control" name="password" id="password" placeholder="Password" />
                </div>
                <div className="form-group widthonly60">
                    <label className='boldtext' for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" autoComplete='off' value={user.cpassword} onChange={changehandler} className="form-control" name="cpassword" id="cpassword" placeholder="Confirm Password" />
                </div>

                <input type="submit" id="signup" name="signup" value="register" onClick={postData} className="btn btn-primary marginleft100"/>
            </form>
            <div>
                <center className='hvacc'>
                    <NavLink to="/login">Iam Aldready registered</NavLink>
                </center>
            </div>

        </>
    )
}

export default Signup