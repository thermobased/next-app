'use client';
import {CookieValueTypes, getCookie} from "cookies-next";
import type {InferGetServerSidePropsType, GetServerSideProps} from "next";
import {redirect} from "next/navigation";
import {useRouter} from "next/navigation";

export const getServerSideProps = (async( { req, res }) => {

    const login = getCookie('token', {req, res});
    if(login){
        return {props: {'login' : login}}
    }   else {
        return {props: {'login' : ''}}
    }

}) satisfies GetServerSideProps<{login : CookieValueTypes}>;


export default function Home({login}:InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();
    async function logOut (){
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: JSON.stringify({
                'action': 'logout'
            })
        });

        const data = await response.json();
        if(data.result == 'ok'){
            router.push("/");
        }
        alert(JSON.stringify(data.result));


    }

    return (

        <div>
            <div>
            Hello, {login}
            </div>

            <button onClick={logOut}> Logout </button>

        </div>
    );
}