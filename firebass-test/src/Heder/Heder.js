import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../userhooksContext/Contex_hooks';
import { GoogleAuthProvider} from "firebase/auth";

const Heder = () => {
    const {user, logout, google_popu_login} = useContext(authContext);
    const provider = new GoogleAuthProvider();

    const googlesignin = () => {
        google_popu_login(provider)
        .then((result) => {
            const user = result.user;
            console.log(user)
          })
          .catch((error) => {
            console.log('error paici', error)
          });
    }

    const logout_email = () => {
        
        logout()
        .then(() => {
            alert('Are you sure for logout')
        })
        .catch((error) => {
            console.log('error khayce', error)
          });
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl"> daisyUI </Link>
               <Link to='/login' className='mx-12'> Login </Link>
               <Link to='/ragister'> Ragister </Link>
               {
                user?.email && <p className='text-danger mx-5'> wellcome _ {user.email} </p>
               }
               {
                user?.email? <button className="btn btn-outline btn-secondary mx-5" onClick={logout_email}>LogOut</button>
                :<button className="btn btn-outline btn-secondary mx-5" onClick={googlesignin}>Google</button>
               }
            </div>
        </div>
    );
};

export default Heder;