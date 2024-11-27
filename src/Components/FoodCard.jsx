import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const FoodCard = ({ food, foods, setFoods }) => {
  const { _id, name, chef, cuisine, taste, category, details, photo } = food;

  const handleDelete = () => {
    console.log("deleted id: ", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/foods/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
      const remaining = foods.filter((fod) => fod._id !== _id);
      setFoods(remaining);
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Coffee" />
      </figure>
      <div className="flex items-center justify-between w-full px-4">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{chef}</p>
          <p>{cuisine}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-3">
            <Link to="/fooddetails">
              <button className="btn join-item btn-neutral text-white">
                View
              </button>
            </Link>
            <Link to={`/updatefood/${_id}`}>
              <button className="btn join-item btn-neutral text-white">
                Edite
              </button>
            </Link>
            <button
              onClick={handleDelete}
              className="btn join-item btn-neutral text-white bg-red-400"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
