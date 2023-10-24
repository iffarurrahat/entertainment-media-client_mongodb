import { useLoaderData } from "react-router-dom";
import BrandsNames from "../../components/BrandsNames/BrandsNames";
import FAQ from "../../components/FAQ/FAQ";

const Home = () => {

    const loadedBrand = useLoaderData();

    return (
        <div>
            <h2 className="bg-gray-400 h-[600px]">Banner</h2>
            <BrandsNames loadedBrand={loadedBrand}></BrandsNames>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;