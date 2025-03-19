'use client';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

const Navbar = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    console.log(session)

    const handleSignOut = async () =>{
       await signOut({redirect: false})
       toast('signout successfull')
       router.push('/signIn');
    }
    const navMenu =
        <>
            <li> <Link href={'/'}>Home</Link></li>
            <li> <Link href={'/about'}>About</Link></li>
            <li> <Link href={'/service'}>Service</Link></li>
            <li> <Link href={'/blog'}>Blog</Link></li>
            <li> <Link href={'/contact'}>Contact</Link></li>
        </>


    return (
        <div className="navbar bg-base-100 shadow-sm px-10">
            <div className="navbar-start">
                <Link href={'/'}>
                    <Image src={'/assets/logo.svg'} width={70} height={70} alt='logo' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
                <ul className='menu menu-horizontal px-1 items-center'>
                    {status === 'authenticated' ?
                        (<>
                            <li>
                                <Image src={session?.user?.image}
                                 height={60} width={60}
                                 className='rounded-full'
                                  alt='profileImage' />
                            </li>
                            <li className='btn btn-outline mr-2' onClick={handleSignOut}> Sign Out</li>
                        </>) :
                        (<>
                            <li > <Link href={'/register'}
                            className='btn text-green-500 btn-outline mr-2'>Register</Link></li>
                            <li > <Link href={'/signIn'} className='btn btn-outline mr-1'>Sign In</Link></li>
                        </>)}

                </ul>
                <a className="btn btn-outline text-orange-500">Appoinment</a>
            </div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 
                    absolute right-0 shadow">
                    {navMenu}
                </ul>
            </div>
        </div>
    )
}

export default Navbar