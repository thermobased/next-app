'use client';
import {CookieValueTypes, getCookie} from "cookies-next";
import type {InferGetServerSidePropsType, GetServerSideProps} from "next";
import AuthStatus from "@/pages/AuthStatus";
import RegisterForm from "@/pages/RegisterForm";
import LoginForm from "@/pages/LoginForm";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
export const getServerSideProps = (async ({req, res}) => {

    const login = getCookie('token', {req, res});
    if (login) {
        return {props: {'login': login}}
    } else {
        return {props: {'login': ''}}
    }

}) satisfies GetServerSideProps<{ login: CookieValueTypes }>;


export default function Home({login}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const router = useRouter();
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsSubmitting(true);
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
        setIsSubmitting(false);
    }

    async function onSubmitLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsSubmitting(true);
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
        router.push('/profile');
        setIsSubmitting(false);
    }

    useEffect(() => {
        if(login != ''){
            router.push('/profile');
        }
    }, []);


    return (
        <div>
            <AuthStatus login = {login}/>
            <div>
                <RegisterForm submit = {onSubmit} isDisabled = {isSubmitting}/>
                <LoginForm submit = {onSubmitLogin} isDisabled = {isSubmitting}/>
            </div>
        </div>
    );
}
