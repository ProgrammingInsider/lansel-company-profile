
"use client";
import React, { useState } from "react";
import Products from "./Products";

const products = [
  { title: 'office stationery suppliers', image: '/images/common/stationery_one.jpg', type: 'stationery' },
  { title: 'laboratory grade chemicals', image: '/images/products/laboratory_grade_chemicals.jpg', type: 'chemicals' },
  { title: 'food additives chemicals', image: '/images/products/food_additives_chemicals.jpg', type: 'chemicals' },
  { title: 'plant growth chemicals', image: '/images/products/plant_growth_chemicals.jpg', type: 'chemicals' },
  { title: 'office supplies wholesale', image: '/images/products/office_supplies_wholesale.jpg', type: 'stationery' },
  { title: 'Soil Conditioners Suppliers', image: '/images/products/agriculture_soil_treatment.jpg', type: 'chemicals' },
  { title: 'textile treatment chemicals', image: '/images/products/textile_treatment_chemicals.jpg', type: 'chemicals' },
  { title: 'rubber chemicals suppliers', image: '/images/products/rubber_chemicals_suppliers.jpg', type: 'chemicals' },
  { title: 'janitorial products wholesale', image: '/images/products/janitorial_products_wholesale.jpg', type: 'stationery' },
  { title: 'auto parts suppliers', image: '/images/products/auto_parts_suppliers.jpg', type: 'stationery' },
  { title: 'IT equipment wholesale', image: '/images/products/IT_equipment_wholesale.jpg', type: 'stationery' },
  { title: 'automotive parts suppliers', image: '/images/products/automotive_parts_suppliers.jpg', type: 'stationery' },
];

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Chemicals", value: "chemicals" },
  { label: "Office Materials", value: "stationery" },
];

const OurServices = () => {
  const [filter, setFilter] = useState("all");

  const filteredProducts = filter === "all"
    ? products
    : products.filter((product) => product.type === filter);

  return (
    <div className="sectionBg w-full">   
      <div className="text-center w-11/12 mx-auto max-w-6xl py-20">

        <h1 className="sectionName w-36 mx-auto">Our Services</h1>
        <h1 className="sectionHeader mb-5">Reliable Solutions for Your Business</h1>
        <p className="mb-10 max-w-5xl mx-auto text-sm sm:text-base">At Lansel Trading, we specialize in Chemical Distribution and Office Material & Equipment Distribution, ensuring businesses across Ethiopia have access to high-quality products.</p>

        {/* Filter Buttons */}
        <ul className="flex justify-center items-center gap-3 md:gap-5 mx-auto font-semibold capitalize list-none sm:text-base md:text-xl mb-10 spartan-family">
          {filterOptions.map(({ label, value }) => (
            <li
              key={value}
              onClick={() => setFilter(value)}
              className={`cursor-pointer ${filter === value ? 'primaryBg text-white px-5 py-2 rounded-xl' : ''}`}
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Filtered Product Display */}
        <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 order-0 md:order-1'>
          {filteredProducts.map((item, index) => (
            <Products key={index} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
