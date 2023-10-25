import { Link } from "react-router-dom";

const PriceSection = () => {
    return (
        <section className="py-6 my-20 dark:bg-gray-800 dark:text-gray-50">
            <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
                <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 dark:bg-gray-900">
                    <span className="text-sm">Basic</span>
                    <p className="text-5xl font-bold text-center">$21</p>
                    <p className="font-semibold text-center">Video streaming services offer a wide range of content, from movies to TV shows, for a monthly fee. Prices typically vary, with basic plans starting at around $21 per month.</p>
                    <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 dark:border-gray-700"><Link to='/login'>Sign up</Link></button>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 dark:bg-violet-400 dark:text-gray-900">
                    <span className="text-sm font-semibold">Advanced</span>
                    <p className="text-5xl font-bold">$35</p>
                    <p className="font-semibold">Unlock a world of entertainment with our advanced video streaming service. Experience stunning 4K quality, ad-free viewing, multi-device support, and exclusive content, all at a competitive price</p>
                    <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 dark:bg-gray-800 dark:text-gray-50"><Link to='/login'>Sign up</Link></button>
                </div>
            </div>
        </section>
    );
};

export default PriceSection;