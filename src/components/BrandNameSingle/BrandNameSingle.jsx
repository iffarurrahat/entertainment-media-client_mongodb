import { Link, useLoaderData, useParams, } from "react-router-dom";
import { AiOutlineDoubleRight } from 'react-icons/ai';
import BrandNameSingleCard from "./BrandNameSingleCard";
import { useState } from "react";

const BrandNameSingle = () => {

    const params = useParams();

    // database data
    const loadedProducts = useLoaderData();
    
    const filter = loadedProducts.filter(data => data.brandName == params.id);
    const [products, setProducts] = useState(filter)

    return (
        <div>
            <div className="shadow-md py-5 pl-10">
                <ul className="flex items-center gap-3">
                    <Link to='/'>Home</Link>
                    <AiOutlineDoubleRight className="text-xs"></AiOutlineDoubleRight>
                    <li className="text-[#d926a9]">Brand Product</li>
                </ul>
            </div>
            <div className="max-w-screen-xl mx-auto py-10">
                <div className="grid md:grid-cols-2 gap-6 px-4 md:px-3 lg:px-2">
                    {
                        products.map(product => <BrandNameSingleCard
                            key={product._id}
                            product={product}
                            products={products}
                            setProducts={setProducts}></BrandNameSingleCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandNameSingle;