"use client";
import React from "react";
import { useState, useEffect } from "react";

const users = () => {
    // Define a state variable "items" and a function "setItems" to update the state
    const [users, setUsers] = useState([]);

    // Use the useEffect hook to fetch data from the API endpoint when the component mounts
    useEffect(() => {
        fetch("http://localhost:3000/api", {
            method: "GET",
            headers: {
                "Content-Type": "application/json", // Set the request headers to indicate JSON format
            },
        })
            .then((res) => res.json()) // Parse the response data as JSON
            .then((data) => setUsers(data)); // Update the state with the fetched data
    }, []);

    // Create a collection of JSX elements based on the fetched "items" data
    const collection = users.map((item) => {
        return (
            <div key={users.['id']} id={users.['id']}>

                <h2>{users.['login']}</h2>
                <p>{users.['email']}</p>
                <p>{users.['password']}</p>
            </div>
        );
    });
console.log({use});
    // Return the JSX elements wrapped in a Material-UI Grid container
    return (
        <div>
            {collection}
        </div>
    );
};

export default users;





/*
'use client';
import { PrismaClient } from "@prisma/client"
import RegisterUserForm from "@/app/RegisterUserForm";
import {resolveAppleWebApp} from "next/dist/lib/metadata/resolvers/resolve-basics";
const prisma = new PrismaClient();
async function registerNewUser(user){
    const response = await fetch('/api/route', {
        method: 'POST',
        body: JSON.stringify(user)
    });

    return await response.json();
}
export default function Home() {

  /!*async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const x = {};

    for (var pair of formData.entries()) {
      x[pair[0]] = pair[1];
      console.log(pair[0] + ', ' + pair[1]);
    }
    //console.log(x);

    const response = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(x),
    })
                                            // Handle response if necessary
    const data = await response.json()

      alert(JSON.stringify(data));
                                            // const app = document.getElementById("info");
                                            // app.textContent = data;
  }
*!/

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        try{
            await registerNewUser(formData);
        }
        catch (err){
            console.log(err);
        }
        alert("asd");
    }

    return (

      <form onSubmit={onSubmit}>
          <input type="text" name="login" />
          <input type="password" name="password"/>
          <button type="submit">Submit</button>
      </form>
  );
}*/
