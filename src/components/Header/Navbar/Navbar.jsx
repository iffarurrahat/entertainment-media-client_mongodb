import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';
import Logo from "../Logo/Logo";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
                alert('logout successfully')
            })
            .catch(error => console.log(error))
    }

    const [open, setOpen] = useState(false);

    const navLink = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/product"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
        >
            Add Product
        </NavLink></li>
        <li><NavLink
            to={`/cart/${user?.email}`}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
        >
            My Cart
        </NavLink></li>

        {
            user ?
                <button><Link onClick={handleSignOut} to="/login">Logout</Link></button> :
                <li><NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }
                >
                    Login
                </NavLink></li>
        }

    </>

    return (
        <nav className=" flex items-center justify-between py-2 max-w-screen-xl mx-auto px-3 md:px-6 lg:px-1">
            <h1 className="text-3xl font-3xl">
                <Logo></Logo>
            </h1>
            <div>
                <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                    {
                        open ? <RiCloseLine /> : <RiMenu2Line />
                    }
                </div>
                <ul className={`z-50 md:flex  absolute gap-6 md:static bg-slate-200 md:bg-transparent mr-4 md:mr-0 right-0 px-6 md:px-0 py-4 rounded-lg ${open ? 'top-16' : '-top-60'}`}>
                    <div className=" md:flex items-center gap-6">
                        {navLink}
                    </div>
                    <div>
                        <div className="drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-4" className="drawer-button">
                                    {
                                        user ?
                                            <img  className="h-10 w-10 rounded-full" src={user.photoURL} /> :
                                            <img className="h-10 w-10 rounded-full" src="https://i.ibb.co/8mKdBFC/user-blank-image.png" alt="" />
                                    }
                                </label>
                            </div>
                            <div className="drawer-side z-50">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-[#1A2430] text-base-content">
                                    {/* Sidebar content here */}
                                    <div className="flex justify-between items-start bg-[#1D2D3A] p-4">
                                        <div className="space-y-3 text-white">
                                            {
                                                user ?
                                                    <img className="h-10 w-10 rounded-full" src={user.photoURL} /> :
                                                    <img className="h-12 w-12 rounded-full" src="https://i.ibb.co/8mKdBFC/user-blank-image.png" alt="" />
                                            }
                                            <p>{user?.displayName}</p>
                                            <p>Number</p>
                                        </div>
                                        {/* darkMode or lightMode */}
                                        <label className="swap swap-rotate mt-2">

                                            {/* this hidden checkbox controls the state */}
                                            <input type="checkbox" />

                                            {/* sun icon */}
                                            <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                            {/* moon icon */}
                                            <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                        </label>
                                    </div>
                                    <div className="text-white">
                                        <li><a>Add Account</a></li>
                                        <li><a>Telegram Features</a></li>
                                        <li><a>Setting</a></li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;