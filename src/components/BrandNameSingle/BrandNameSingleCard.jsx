import PropTypes from 'prop-types';
import { HiArrowLongRight } from 'react-icons/hi2';
import { MdBrowserUpdated } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BrandNameSingleCard = ({ product }) => {
    const { _id, name, brandName, photo, rantCost, genre, rating, types, description } = product || {}


    return (
        <div>
            <div className="relative md:flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img className='h-full w-96' src={photo} />
                </div>
                <div className="p-6">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                        {brandName}
                    </h6>
                    <h4 className="block mb-1 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {name.slice(0, 25)}...
                    </h4>
                    <p className="text-xs font-semibold mb-3">Genre: {genre}</p>
                    <p className="block mb-3 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">{description.slice(0, 180)}...</p>
                    <div className="flex gap-10 text-sm font-medium">
                        <p>Rant Cost: ${rantCost}</p>
                        <p>Category: {types}</p>
                    </div>
                    <p className='text-sm font-medium mt-1'>Rating: {rating}/5</p>
                    <div className='flex justify-between mt-5'>
                        <Link to={`/updatedProduct/${_id}`}>
                            <button
                                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-dark="true"
                            >
                                Update
                                <MdBrowserUpdated className='w-5 h-5' />
                            </button>
                        </Link>
                        <Link to={`/details/${_id}`}>
                            <button
                                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-dark="true"
                            >
                                View Details
                                <HiArrowLongRight className='w-5 h-5' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandNameSingleCard;


BrandNameSingleCard.propTypes = {
    product: PropTypes.object,
};

