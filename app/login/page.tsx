"use client";
import Link from "next/link";
import React, { useEffect, useState  } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";





export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React. useState({
        email:"",
        password:"",
       
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup/login", user);
            console.log("login sucess", response.data);
            toast.success("Login success");
            router.push("/profile");

        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    };
         useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    },[user]);
    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">

            <div className="flex flex-col gap-4 w-80">

            <h1 className="text-white text-4xl font-bold text-center mb-2" >{loading? "Processing" : "Login"}</h1>
            <hr  className="border-gray-600"/>
        

            <label htmlFor="email">email</label>
            <input
            className="p-3 border border-white rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input
            className="p-3 border border-white rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            
            />
            <button 
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login here</button>
           <Link href="/signup">Visit Signup page</Link> 
            </div>
        </div>
    )
}