import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
    return (
        <div className="login__bg flex items-center justify-center h-[600px] md:h-screen">
            <div className="flex items-center w-96 bg-[#171717c9] rounded shadow__bg ">
                <form className="card-body z-50">
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
                    <div className="mt-8">
                        <button className="btn btn-block bg-indigo-500 text-white border-none">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;