import PropTypes from 'prop-types';
import "./BrandsNames.css";
import BrandsNamesCard from "./BrandsNamesCard";

const BrandsNames = ({ loadedBrand }) => {

    return (
        <div className="max-w-screen-xl mx-auto mt-10 bottom-4 px-4 md:px-3 lg:px-2">
            <div className="text-center py-6">
                <h2 className="text-4xl font-bold mb-3">Streaming <span className="text-[#d926a9]">Services</span></h2>
                <p className="mb-6">Streaming services offer on-demand access to a vast library of movies, <br /> TV shows, music, and more, revolutionizing entertainment consumption worldwide.</p>
            </div>
            <div className="brand__name">
                {
                    loadedBrand?.map(brand => <BrandsNamesCard
                        key={brand.id}
                        brand={brand}></BrandsNamesCard>)
                }
            </div>
        </div>
    );
};

export default BrandsNames;

BrandsNames.propTypes = {
    loadedBrand: PropTypes.array,
};