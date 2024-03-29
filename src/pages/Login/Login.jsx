import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from 'react-icons/fc';
import { TbBrandGithubFilled } from 'react-icons/tb';

const Login = () => {

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    // console.log('location  from login page:', location);
    const [loginError, setLoginError] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);

        // reset error 
        setLoginError('')

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                new Swal("Good job!", "You are successfully login", "success");
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                // console.error(error);
                if (error.code === 'auth/invalid-login-credentials') {
                    setLoginError('Your Email or Password was Wrong!!!!')
                    return;
                }
                else if (error.code === 'auth/too-many-requests') {
                    setLoginError('Please try again in a few minutes later!!')
                    return;
                }
            })
    }

    // SignIn With Google
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    // SignIn With Github
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="login__bg flex items-center justify-center h-[600px] md:h-screen">
            <div className="bg-[#171717c9] rounded shadow__bg">
                <div className="flex items-center w-96">
                    <form onSubmit={handleLogin} className="card-body z-50">
                        <h2 className="mb-1 text-2xl font-bold text-indigo-500">Please Login</h2>
                        <p className="mb-5 text-white">If you do not have an account ? <Link to="/register" className="font-semibold text-blue-600">Register</Link></p>
                        {/* input filed email and password */}
                        <div className="font-medium">
                            <div className="form-control flex-1 login__input">
                                <label className="label">
                                    <span className="label-text text-indigo-500 font-medium">Your Email</span>
                                </label>
                                <input type="text" name="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control flex-1 login__input">
                                <label className="label">
                                    <span className="label-text text-indigo-500 font-medium">Your Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your Password" className="input input-bordered " required />
                            </div>
                        </div>
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                        <div className="mt-8">
                            <button className="btn btn-block bg-indigo-500 text-white border-none">Login</button>
                        </div>
                    </form>
                </div>
                <div className="text-center py-3">
                    <div onClick={handleGoogleSignIn} className="border-2 border-red-600 rounded-full p-1 inline-block mr-3 cursor-pointer">
                        <FcGoogle className="text-2xl"></FcGoogle>
                    </div>
                    <div onClick={handleGithubSignIn} className="border-2 rounded-full p-1 inline-block cursor-pointer">
                        <TbBrandGithubFilled className="text-2xl text-white"></TbBrandGithubFilled>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;