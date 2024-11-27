import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AddFood = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const cuisine = form.cuisine.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const allcollection = {
      name,
      chef,
      cuisine,
      taste,
      category,
      details,
      photo,
    };

    console.log(allcollection);

    fetch("http://localhost:5000/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allcollection),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId)
          Swal.fire({
            title: "Success!",
            text: "User information send Successfully...",
            icon: "success",
            confirmButtonText: "Cool",
          });
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto p-5">
      {/* Header Section */}
      <div className="text-center p-10 animate-fade-in">
        <h1 className="text-4xl font-bold text-green-700 animate-bounce">
          Add Your Favorite Food!
        </h1>
        <p className="py-6 text-gray-800">
          Add delicious dishes to your food collection. Fill out the form below
          and make your taste buds happy!
        </p>
      </div>

      {/* Form Card */}
      <div className="card bg-gray-50 w-full shadow-xl p-8 rounded-lg animate-slide-in">
        <form onSubmit={handleSubmit} className="card-body">
          {/* Form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-gray-700">Food Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter food name"
                className="input input-bordered border-gray-300 focus:ring-2 focus:ring-green-500 text-gray-900 transform transition-transform duration-300 hover:scale-105"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-gray-700">Chef Name</span>
              </label>
              <input
                type="text"
                name="chef"
                placeholder="Enter chef name"
                className="input input-bordered border-gray-300 focus:ring-2 focus:ring-green-500 text-gray-900 transform transition-transform duration-300 hover:scale-105"
                required
              />
            </div>
          </div>

          {/* Form second row */}
          <div className="flex flex-col lg:flex-row gap-5 mt-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-gray-700">Cuisine</span>
              </label>
              <input
                type="text"
                name="cuisine"
                placeholder="Enter cuisine type"
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
                placeholder="Enter taste description"
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
                placeholder="Enter food category"
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
                placeholder="Enter food details"
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
              placeholder="Enter photo URL"
              className="input input-bordered border-gray-300 focus:ring-2 focus:ring-green-500 text-gray-900 transform transition-transform duration-300 hover:scale-105"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn bg-green-600 text-white hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
              Add Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
