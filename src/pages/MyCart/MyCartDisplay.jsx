import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';

const MyCartDisplay = ({ cart, index, myCart, setMyCart }) => {

    const { _id, name, brandName, photo, rantCost } = cart || {}

    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/myCart/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const remaining = myCart.filter(data => data._id !== _id)
                        setMyCart(remaining)
                    })
            }
        })

    }

    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <th>{index+1}</th>
                <td>
                    <div className="flex gap-10 items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span className="badge badge-ghost badge-sm">{brandName}</span>
                </td>
                <td className=''>${rantCost}</td>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost"><AiFillDelete className='text-xl text-red-600' /></button>
                </th>
            </tr>
        </tbody>
    );
};

export default MyCartDisplay;



MyCartDisplay.propTypes = {
    cart: PropTypes.object,
    index: PropTypes.number,
    myCart: PropTypes.array,
    setMyCart: PropTypes.func,
  };