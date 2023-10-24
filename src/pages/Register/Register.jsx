import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 py-20 h-full px-3 md:px-0">
            <div className="bg-white md:w-1/2 mx-auto rounded">
                <form className="card-body">
                    <h2 className="mb-1 text-2xl font-bold text-indigo-500">Create New Account</h2>
                    <p className="mb-5">If you have an already account ? <Link to="/login" className="font-semibold text-blue-600">Login</Link></p>
                    {/* input filed name */}
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-indigo-500 font-medium">Name Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Full Name" className="input input-bordered" required />
                    </div>
                    {/* input filed photo_url and contact_number */}
                    <div className="md:flex gap-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-indigo-500 font-medium">Your Photo URL</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-indigo-500 font-medium">Contact</span>
                            </label>
                            <input type="text" name="contact" placeholder="Your Contact Number" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* input filed email and password */}
                    <div className="md:flex gap-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-indigo-500 font-medium">Your Email</span>
                            </label>
                            <input type="text" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-indigo-500 font-medium">Your Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* input filed radio */}
                    <div className="form-control mt-4">
                        <label className="flex gap-5">
                            <span className="label-text text-indigo-500 font-medium">Your Gender</span>
                            <div className="flex items-center">
                                <input type="radio" name="gender" value="Male" className="radio mr-2 checked:bg-indigo-500" checked />Male
                                <input type="radio" name="gender" value="Female" className="radio checked:bg-indigo-500 ml-4 mr-2" />Female
                            </div>
                        </label>
                    </div>
                    <div className="mt-8">
                        <button className="btn btn-wide bg-indigo-500 text-white">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;