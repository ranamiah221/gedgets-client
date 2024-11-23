import { Link } from "react-router-dom";
import signUpImg from '../../assets/b9-crud-10/signup.jpg'
import { FaGoogle } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const SignUp = () => {
  const {createUser}=useContext(AuthContext)
    const handleSignUp=(event)=>{
        event.preventDefault();
        const form =event.target;
        const email=form.email.value;
        const password=form.password.value;
        createUser(email, password)
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.log(error.message);
        })
    }
    return (
        <div className="">
        <div className="hero-content h-[700px] flex-col lg:flex-row gap-0 border p-0">
          <div className="w-1/2 h-full">
             <img className='h-full w-full' src={signUpImg} alt="" />
          </div>
          <div className="card bg-base-100 w-1/2 h-full py-10 px-10 space-y-5">
                <h1 className='text-3xl font-bold'>Sign up in to GigaGedgets </h1>
                <p className='font-medium'>Enter your details below</p>
                <p className='flex flex-inline gap-2 font-bold items-center py-2 bg-gray-200 w-2/5 px-2 rounded-md'><FaGoogle className='text-red-600'></FaGoogle> <span>Sign in with google</span></p>
            <form onSubmit={handleSignUp} className="space-y-3">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
              </div>
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
                <button type='submit' className="btn bg-pink-600 text-white w-1/3">Sign Up</button>
              </div>
            </form>
            <p>Already have account please <Link className='text-pink-600 font-bold underline' to='/login'>Login</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;