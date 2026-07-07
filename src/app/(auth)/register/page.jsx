"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = async (data) => {
        const { name, photoUrl, email, password } = data;

        const {data: res, error} = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photoUrl,
            callbackURL: "/",
        });

        if (error) {
            alert(error.message);
        }

        if (res) {
            alert("Sign up successful!");
        }

    }

     
    return (
        <div className="flex justify-center items-center h-[85vh] container mx-auto bg-slate-200 my-2">
            <div className="bg-white p-4 rounded-box border-base-300 border w-96">
                <h2 className="text-xl font-bold mb-2 text-center">Register your account</h2>

                <form onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset">
                        <label className="label">Your Name</label>
                    <input 
                        type="text" 
                        {...register("name", { required: "Name is required" })} 
                        className="input w-full" placeholder="Enter your name" />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                    <label className="label">Photo Url</label>
                    <input 
                        type="text" 
                        {...register("photoUrl", { required: "Photo URL is required" })} 
                        className="input w-full" placeholder="Enter your photo URL" />
                    {errors.photoUrl && <p className="text-red-500">{errors.photoUrl.message}</p>}
                   

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
                    

                    <button className="btn btn-neutral mt-4 w-full">Register</button>
                    </fieldset>
                </form>
                <p className="text-center mt-4">
                    Already have an account? <Link href="/login" className="text-rose-500 hover:underline">Login</Link>
                </p>

            </div>
        </div>
    );
};

export default RegisterPage;