'use client'
import { registerUser } from '@/app/actions/auth/registerUser';
import React from 'react'

const RegisterForm = () => {
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        await registerUser({name,email,password})
        alert('successfully submited');
        form.reset()
    }
    return (
        <div>
            <form
            onSubmit={handleSubmit}
            >
                <div className='mt-4'>
                    <label
                        className='block mb-2 text-sm font-medium dark:text-white text-gray-600 '
                        htmlFor='name'
                    >
                        Username
                    </label>
                    <input
                        id='name'
                        autoComplete='name'
                        name='name'
                        className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                        type='text'
                    />
                </div>
                <div className='mt-4'>
                    <label
                        className='block mb-2 text-sm font-medium dark:text-white text-gray-600 '
                        htmlFor='photo'
                    >
                        Photo URL
                    </label>
                    <input
                        id='photo'
                        autoComplete='photo'
                        name='photo'
                        className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                        type='text'
                    />
                </div>
                <div className='mt-4'>
                    <label
                        className='block mb-2 text-sm font-medium dark:text-white text-gray-600 '
                        htmlFor='LoggingEmailAddress'
                    >
                        Email Address
                    </label>
                    <input
                        id='LoggingEmailAddress'
                        autoComplete='email'
                        name='email'
                        className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                        type='email'
                    />
                </div>

                <div className='mt-4'>
                    <div className='flex justify-between'>
                        <label
                            className='block mb-2 text-sm font-medium dark:text-white text-gray-600 '
                            htmlFor='loggingPassword'
                        >
                            Password
                        </label>
                    </div>

                    <input
                        id='loggingPassword'
                        autoComplete='current-password'
                        name='password'
                        className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                        type='password'
                    />
                </div>
                <div className='mt-6'>
                    <button
                        type='submit'
                        className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm