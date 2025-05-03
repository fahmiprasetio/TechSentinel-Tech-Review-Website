import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Riview = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:5000/Laptop");
        // console.log(response);
        const data = await response.json();
        // console.log(data.data);
        setData(data);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 place-item-center gap-y-5 mt-6 ">
        {Data.map((data, index) => {
          return (
            <ProductCard
              key={index}
              title={data.name}
              description={data.description}
              image={data.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Riview;
