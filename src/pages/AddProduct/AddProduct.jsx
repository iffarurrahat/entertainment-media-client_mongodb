// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const photo = form.photo.value;
        const types = form.types.value;
        const rantCost = form.rantCost.value;
        const genre = form.genre.value;
        const rating = form.rating.value;
        const releaseDate = form.releaseDate.value;
        const trailer = form.trailer.value;
        const description = form.description.value;
        const newProduct = { name, brandName, photo, types, rantCost, genre, rating, releaseDate, trailer, description }

        fetch('http://localhost:5000/addProducts', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                    )
                }
                // form reset
                form.reset();
            })
    }

    return (
        <div className="pt-24 md:w-2/3 mx-auto">
            <div className="px-5 md:px-0 text-center">
                <h2 className="text-3xl font-bold">Add New Brand Products</h2>
            </div>
            <form onSubmit={handleAddProduct} className="card-body">
                {/* input filed name and brand_name */}
                <div className="md:flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Type Movie, Anime, Series Title" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <select name="brandName" defaultValue={'DEFAULT'} className="select select-bordered w-full">
                            <option disabled value="DEFAULT">Choose one</option>
                            <option value="Walt Disney">Walt Disney</option>
                            <option value="Netflix">Netflix</option>
                            <option value="Amazon">Amazon</option>
                            <option value="Warner Bros">Warner Bros</option>
                            <option value="Sony Pictures">Sony Pictures</option>
                            <option value="Spotify">Spotify</option>
                        </select>
                    </div>
                </div>
                {/* input filed Photo_URL*/}
                <div className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Give me the Photo URL" className="input input-bordered" required />
                    </div>
                </div>
                {/* input filed Type and Price or rant_Cost */}
                <div className="flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Which Type</span>
                        </label>
                        <select name="types" defaultValue={'DEFAULT'} className="select select-bordered w-full">
                            <option disabled value="DEFAULT">Choose one</option>
                            <option value="Movie">Movie</option>
                            <option value="Anime">Anime</option>
                            <option value="Anime Movie">Anime Movie</option>
                            <option value="Series">Series</option>
                        </select>
                    </div>
                    <div className="form-control w-1/4 md:flex-1">
                        <label className="label">
                            <span className="label-text">Rant Cost</span>
                        </label>
                        <input type="number" min="0" name="rantCost" placeholder="Price" className="input input-bordered" required />
                    </div>
                </div>
                {/* input filed Genre and Rating */}
                <div className="flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Genre</span>
                        </label>
                        <input type="text" name="genre" placeholder="Action, Adventure, Fantasy, Others" className="input input-bordered capitalize w-full" required />
                    </div>
                    <div className="form-control w-1/4 md:flex-1">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" step="any" min="0" max="5" name="rating" placeholder="0 to 5" className="input input-bordered" required />
                    </div>
                </div>
                {/* input filed release_date and trailer */}
                <div className="md:flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Release Date</span>
                        </label>
                        <input type="text" name="releaseDate" placeholder="Release Date" className="input input-bordered capitalize" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Trailer</span>
                        </label>
                        <input type="text" name="trailer" placeholder="Trailer URL" className="input input-bordered" required />
                    </div>
                </div>
                {/* input filed description */}
                <div className="flex gap-5">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="description" className="textarea textarea-bordered" placeholder="Give me details" required></textarea>
                    </div>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add New Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;


