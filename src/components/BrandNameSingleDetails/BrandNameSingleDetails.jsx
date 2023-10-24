import ReactPlayer from 'react-player/youtube'
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Swal from 'sweetalert2';

const BrandNameSingleDetails = () => {

    const [product, setProduct] = useState([]);

    const { name, brandName, photo, rantCost, genre, rating, types, releaseDate, trailer, description } = product || {}

    const params = useParams();

    // data form database
    const loadedProducts = useLoaderData();

    useEffect(() => {
        const findProduct = loadedProducts.find(data => data._id === params.id);
        setProduct(findProduct)
    }, [loadedProducts, params.id]);


    // handle addToCart 
    const handleAddToCart = () => {
        // console.log(e.target);
        fetch('http://localhost:5000/myCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, brandName, photo, rantCost, genre, rating, types, releaseDate, trailer, description })
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Successfully Added',
                        'This Cart Added to be My Cart',
                        'success'
                    )
                }
            })
    }

    return (
        <div>
            <div className="flex items-center justify-center bg-pink-500/10 h-40">
                <div className='text-center'>
                    <h3 className="text-">Video Streaming Services: {brandName}</h3>
                    <h2 className="text-2xl">Details About: {name}</h2>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto my-6">
                {/* trailer */}
                <div>
                    <ReactPlayer width='100%' className="md:h-96" url={trailer} controls={true} />
                </div>
                <div className='md:flex gap-5 bg-slate-100 mt-2 p-10'>
                    <img className='h-full md:h-96 mx-auto' src={photo} alt="" />
                    <div className='mt-5 md:mt-0'>
                        <div>
                            <blockquote className='relative bg-slate-200 mb-5 p-6 pl-10'>
                                <div className='absolute left-0 top-0 h-full w-2 bg-black'></div>
                                <h2 className="text-3xl font-bold">{types}: {name}</h2>
                                <h5 className='py-1 font-medium'>Genre: {genre}</h5>
                                <h5 className='font-medium'>Released Date: {releaseDate}</h5>
                                <h3 className='font-medium'>Rating: {rating}/5</h3>
                                <h3 className='font-medium'>Rant Cost: ${rantCost}</h3>
                            </blockquote>
                        </div>
                        <p>{description}</p>
                        {/* button add to cart */}
                         <button
                            className="flex items-center gap-2 px-4 py-2 mt-4 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                            <AiOutlineShoppingCart className='w-5 h-5' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandNameSingleDetails;