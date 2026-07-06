"use client";
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleLogin = (data) => {console.log(data)}
    return (
        <div className="flex justify-center items-center h-[85vh] container mx-auto bg-slate-200 my-2">
            <div className="bg-white p-4 rounded-box border-base-300 border w-96">
                <h2 className="text-xl font-bold mb-2 text-center">Login with your account</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset">
                   

                    <label className="label">Email</label>
                    <input 
                        type="email" 
                        {...register("email", { required: "Email is required" })} 
                        className="input w-full" placeholder="Enter your email" />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <label className="label">Password</label>
                    <input 
                        type="password" 
                        {...register("password", { required: "Password is required" })} 
                        className="input w-full" 
                        placeholder="Enter your password" />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    

                    <button className="btn btn-neutral mt-4 w-full">Login</button>
                    </fieldset>
                </form>
                <p className="text-center mt-4">
                    Don&apos;t have an account? <Link href="/register" className="text-rose-500 hover:underline">Register</Link>
                </p>

            </div>
        </div>
    );
};

export default LoginPage;