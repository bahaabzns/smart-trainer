/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-blue-300'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to="/">
                <h1 className='font-bold'>SmarTrainer</h1>
            </Link>
            <ul className='flex gap-4'>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/users">
                    <li>Users</li>
                </Link>
                <Link to="/sign-in">
                    <li>Sign In</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}
