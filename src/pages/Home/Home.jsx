import { useLoaderData } from "react-router-dom";
import BrandsNames from "../../components/BrandsNames/BrandsNames";
import FAQ from "../../components/FAQ/FAQ";
import PriceSection from "../../components/PriceSection/PriceSection";

const Home = () => {

    const loadedBrand = useLoaderData();

    return (
        <div>
            <h2 className="bg-gray-400 h-[600px]">Banner</h2>
            <BrandsNames loadedBrand={loadedBrand}></BrandsNames>
            <PriceSection></PriceSection>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;