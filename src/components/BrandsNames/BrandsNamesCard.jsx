import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const BrandsNamesCard = ({ brand }) => {
    const { brand_image, brand_name } = brand || {}

    return (
        <div>
            <Link to={`/brand/${brand_name}`}>
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border cursor-pointer">
                    <img src={brand_image} className="w-32 h-36 pt-4 mx-auto grayscale hover:grayscale-0" />
                    <div className="p-6 pt-0">
                        <button
                            className=" w-36 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            {brand_name}
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrandsNamesCard;


BrandsNamesCard.propTypes = {
    brand: PropTypes.object,
};