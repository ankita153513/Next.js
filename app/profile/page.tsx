"use client";
import axios from "axios";
import Link from "next/link";    
export default function UserProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-black text-white">
      
      <h1 className="text-2xl">Profile</h1>
      <hr/>

      <p className="text-4xl font-bold">
        Profile page

      </p>
      <hr/>
      <button
      onClick={logout}
        className="bg-blue-500  mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>

    </div>
  );
}