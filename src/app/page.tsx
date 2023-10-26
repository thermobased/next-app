'use client';
import { PrismaClient } from "@prisma/client"
import RegisterUserForm from "@/app/RegisterUserForm";


const prisma = new PrismaClient();
async function registerNewUser(user){
    const response = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(user)
    });

    return await response.json();
}

export default function Home() {

  /*async function onSubmit(event: FormEvent<HTMLFormElement>) {
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
*/

  return (
      <div>

        <RegisterUserForm onSubmit = {async (data) => {
            try{
                await registerNewUser(data);
            }
            catch (err) {
                console.log(err)}
        }}/>

      </div>
  );
}
