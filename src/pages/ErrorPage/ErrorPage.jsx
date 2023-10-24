import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <img className="h-96" src="../../../public/404-error.svg" alt="" />
                <Link to="/">
                    <button
                        className="select-none rounded-lg bg-green-400 py-3 px-6  align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;