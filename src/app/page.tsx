'use client';
import Image from 'next/image'
import styles from './page.module.css'
// import * as fs from "fs";

// const userFiles = fs.readFileSync('./src/pages/page1.txt', 'utf-8');

export default function Home() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    alert(data)
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
