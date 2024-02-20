/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-300 flex'>
        <div className='flex gap-4 max-w-6xl mx-auto p-3'>
            <Link to="/">
                <h1 className='font-bold'>SmarTrainer</h1>
            </Link>
            <ul className='flex gap-4'>
                <Link to="/accounts">
                    <li>Accounts</li>
                </Link>
                <Link to="/users">
                    <li>Users</li>
                </Link>
            </ul>
        </div>
        <div className='flex justify-between max-w-6xl mx-auto p-3'>
            <ul className='flex gap-4'>

                <Link to="/sign-in">
                    <li>Sign In</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}
