'use client';
import {CookieValueTypes, getCookie} from "cookies-next";
import type {InferGetServerSidePropsType, GetServerSideProps} from "next";

export const getServerSideProps = (async( { req, res }) => {

    const login = getCookie('token', {req, res});
    if(login){
        return {props: {'login' : login}}
    }   else {
        return {props: {'login' : ''}}
    }

    }) satisfies GetServerSideProps<{login : CookieValueTypes}>;


export default function Home({login}:InferGetServerSidePropsType<typeof getServerSideProps>) {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const x = {};

    for (var pair of formData.entries()) {
      x[pair[0]] = pair[1];
      console.log(pair[0] + ', ' + pair[1]);
    }

     const response = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify({
            'login': x['login'],
            'password': x['password'],
            'action': 'register'
        })
    });

    const data = await response.json();

    alert(JSON.stringify("registered!", data));
  }

    async function onSubmitLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const x = {};

        for (var pair of formData.entries()) {
            x[pair[0]] = pair[1];
            console.log(pair[0] + ', ' + pair[1]);
        }

        const response = await fetch('/api/submit', {
            method: 'POST',
            body: JSON.stringify({
                'login': x['login'],
                'password': x['password'],
                'action': 'login'
            })
        });

        const data = await response.json();
        alert(JSON.stringify("logged in!" + JSON.stringify(data)));
        alert(getCookie('token'));


    }



    return (

      <div>

          <h1> {login} </h1>

        <div>
        <form onSubmit={onSubmit}>
            <input type = "text" name = "login"/>
            <br/>
            <input type = "password" name = "password"/>
            <br/>
            <button type = "submit" value = "register" name = "action">Register</button>
        </form>



          <form onSubmit={onSubmitLogin}>
              <input type = "text" name = "login"/>
              <br/>
              <input type = "password" name = "password"/>
              <br/>
              <button type = "submit" value = "login" name = "action">Login</button>
          </form>

        </div>


      </div>
  );
}
