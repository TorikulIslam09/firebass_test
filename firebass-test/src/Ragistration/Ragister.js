import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../userhooksContext/Contex_hooks';
// import authContext from '../userhooksContext/Contex-hooks'

const Ragister = () => {
    const {Ragister_funtion, datapaici} = useContext(authContext)
    // const [userEmail, setUseremail] = useState('')

    const Ragister_now = e => {
        e.preventDefault();
        const form = e.target;
        console.log(form)
        const email = form.email.value;
        const password = form.password.value;

        Ragister_funtion(email,password)
        .then(result => {
            const user = result.user;
            // const useremail = user.email;
            // setUseremail(useremail)
            // console.log(user)
        })
        .catch(error => {
            // setUseremail('')
            console.log(error)
        })
        // setUseremail('')
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            {/* {userEmail?.email && <h1 className="text-5xl font-bold"> {userEmail.email} </h1>} */}
            
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={Ragister_now}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary"> Ragister Now </button>
                <p>You have all ready register <Link to='/login'> Login Now </Link> </p> 
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Ragister;