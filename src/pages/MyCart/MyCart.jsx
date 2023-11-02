import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCartDisplay from "./MyCartDisplay";

const MyCart = () => {

    const cartData = useLoaderData();
    // console.log(cartData);
    

    const [myCart, setMyCart] = useState(cartData);

    const loadedMyCart = useLoaderData();

    useEffect(() => {
        setMyCart(loadedMyCart)
    }, [loadedMyCart]);


    return (
        <div className="max-w-screen-xl mx-auto py-24 md:py-32">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SI</th>
                            <th className="flex gap-16">
                                <p>Cover</p>
                                <p>Name</p>
                            </th>
                            <th>Streaming Services</th>
                            <th>Amount</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <>
                        {
                            myCart.map((cart, index) => <MyCartDisplay
                                key={cart._id}
                                cart={cart}
                                index={index}
                                myCart={myCart}
                                setMyCart={setMyCart}></MyCartDisplay>)
                        }
                    </>
                </table>
            </div>

        </div>
    );
};

export default MyCart;