'use client'
import React from 'react'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'


const SignInForm = () => {
    const router = useRouter();

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        toast('Submitting .... ');

        try {
            const response = await signIn('credentials', {
                email,
                password,
                callbackUrl: '/',
                redirect: false
            });
            if (response.ok) {
                router.push('/');
                toast.success('successfully signIn');
                form.reset()
            }else{
                toast.error('authentication failed')
            }

        } catch (error) {
            toast.error('authentication failed')
            console.log(error);

        }

    }
    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
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
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm