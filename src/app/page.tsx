'use client';
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)

    const x = {};

    for (var pair of formData.entries()) {
      x[pair[0]] = pair[1];
      console.log(pair[0]+ ', ' + pair[1]);
    }

    console.log(x);

    const response = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(x),
    })
 
    // Handle response if necessary
    const data = await response.json()
    alert(JSON.stringify(data))
    // const app = document.getElementById("info");
    // app.textContent = data;
  }
 
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}
