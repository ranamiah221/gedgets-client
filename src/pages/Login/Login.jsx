import React from 'react';
import loginImg from '../../assets/b9-crud-10/signIn.jpg'
import { FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Login = () => {
    const handleLogin=(event)=>{
        event.preventDefault();
        console.log('click login button')
    }
    return (
        <div className="">
    
        <div className="hero-content h-[600px] flex-col lg:flex-row gap-0 border p-0">
          <div className="w-1/2 h-full">
             <img className='h-full w-full' src={loginImg} alt="" />
          </div>
          <div className="card bg-base-100 w-1/2 h-full py-10 px-10 space-y-5">
                <h1 className='text-3xl font-bold'>Login in to GigaGedgets </h1>
                <p className='font-medium'>Enter your details below</p>
                <p className='flex flex-inline gap-2 font-bold items-center py-2 bg-gray-200 w-2/5 px-2 rounded-md'><FaGoogle className='text-red-600'></FaGoogle> <span>Sign in with google</span></p>
            <form onSubmit={handleLogin} className="space-y-3">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn bg-pink-600 text-white w-1/3">Login</button>
              </div>
            </form>
            <p>Not a member please <Link className='text-pink-600 font-bold underline' to='/signup'>Sign Up</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default Login;