import React, { useState } from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import FoodCard from "./FoodCard";

const Home = () => {
  const loadedUser = useLoaderData();
  const [foods, setFoods] = useState(loadedUser);

  return (
    <div>
      <section>
        <Banner />
      </section>
      {/* main section */}
        <h2>Food User: {foods.length}</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 my-20">
        {
            foods.map(food => <FoodCard
            key={food._id}
            food={food}
            foods={foods}
            setFoods={setFoods}
            ></FoodCard>)
        }
      </div>
    </div>
  );
};

export default Home;
