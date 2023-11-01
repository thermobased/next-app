'use client';
import Image from 'next/image'
import styles from './page.module.css'
import DisplayContents from "@/app/DisplayContents";
export default function Home() {
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
            'action': 'register',
            'login': x['login'],
            'password': x['password']
        })
    });

    const data = await response.json();

    alert(JSON.stringify(data));
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
                'action': 'login',
                'login': x['login'],
                'password': x['password']
            })
        });

        const data = await response.json();

        alert(JSON.stringify(data));
    }



    return (
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

        <DisplayContents/>

      </div>
  );
}
