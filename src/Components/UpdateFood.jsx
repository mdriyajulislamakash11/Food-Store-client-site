import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
      const food = useLoaderData();
  const { _id, name, chef, cuisine, taste, category, details, photo } = food;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const cuisine = form.cuisine.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const allCollection = {
      name,
      chef,
      cuisine,
      taste,
      category,
      details,
      photo,
    };

    console.log(allCollection);

   fetch(`http://localhost:5000/foods/${_id}`,{
      method: "PUT",
      headers: {
            "content-type": "application/json"
      },
      body: JSON.stringify(allCollection)
   })
   .then(res => res.json())
   .then(data => {
      console.log(data)
   })
  };

  return (
    <div className="lg:w-3/4 mx-auto p-5">
      {/* Header Section */}
      <div className="text-center p-10 animate-fade-in">
        <h1 className="text-4xl font-bold text-green-700 animate-bounce">
          Update Coffee!
        </h1>
        <p className="py-6 text-gray-800">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>

      {/* Single Card for Form */}
      <div className="card bg-gray-50 w-full shadow-xl p-8 rounded-lg animate-slide-in">
        <form onSubmit={handleUpdate} className="card-body">
          {/* Form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-gray-700">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Coffee name"
                className="input input-bordered border-gray-300 focus:ring-2 focus:ring-green-500 text-gray-900 transform transition-transform duration-300 hover:scale-105"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-gray-700">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                placeholder="Chef name"
                className="input input-bordered border-gray-300 focus:ring-2 focus:ring-green-500 text-gray-900 transform transition-transform duration-300 hover:scale-105"
                required
              />
            </div>
          </div>

          {/* Form second row */}
          <div className="flex flex-col lg:flex-row gap-5 mt-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-gray-700">Supplier</span>
              </label>
              <input
                type="text"
                name="cuisine"
                defaultValue={cuisine}
                placeholder="Coffee supplier"
                className="input input-bordered border-gray-300 focus:ring-2 focus:ring-green-500 text-gray-900 transform transition-transform duration-300 hover:scale-105"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-gray-700">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Taste name"
                className="input input-bordered border-gray-300 focus:ring-2 focus:ring-green-500 text-gray-900 transform transition-transform duration-300 hover:scale-105"
                required
              />
            </div>
          </div>

          {/* Form third row */}
          <div className="flex flex-col lg:flex-row gap-5 mt-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-gray-700">Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Coffee Category"
                className="input input-bordered border-gray-300 focus:ring-2 focus:ring-green-500 text-gray-900 transform transition-transform duration-300 hover:scale-105"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-gray-700">Details</span>
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Coffee Details"
                className="input input-bordered border-gray-300 focus:ring-2 focus:ring-green-500 text-gray-900 transform transition-transform duration-300 hover:scale-105"
                required
              />
            </div>
          </div>

          {/* Photo URL */}
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text text-gray-700">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo URL"
              className="input input-bordered border-gray-300 focus:ring-2 focus:ring-green-500 text-gray-900 transform transition-transform duration-300 hover:scale-105"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn bg-green-600 text-white hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
