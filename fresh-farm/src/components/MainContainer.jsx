import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
<<<<<<< HEAD
import Carrot from "../img/c2.png";
=======
import Carrot from '../img/carrot.png'
>>>>>>> 87a6ac9866ca526a837634312485ba4f4c0bad20

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  const data= [
    {
      imageURL: Carrot,
      title: 'Carrot',
      calories: '20 callories',
<<<<<<< HEAD
      category: 'fruits'
=======
      category: 'fruits',
      price: '100',
      qty: 1
>>>>>>> 87a6ac9866ca526a837634312485ba4f4c0bad20
    },
    {
      imageURL: Carrot,
      title: 'Tomato',
      calories: '20 callories',
<<<<<<< HEAD
      category: 'fruits'
=======
      category: 'fruits',
      price: '200',
      qty: 1

>>>>>>> 87a6ac9866ca526a837634312485ba4f4c0bad20
    },
    {
      imageURL: Carrot,
      title: 'Potato',
      calories: '20 callories',
<<<<<<< HEAD
      category: 'fruits'
=======
      category: 'fruits',
      price: '300',
      qty: 1


>>>>>>> 87a6ac9866ca526a837634312485ba4f4c0bad20
    },
    {
      imageURL: Carrot,
      title: 'Onion',
      calories: '20 callories',
<<<<<<< HEAD
      category: 'fruits'
=======
      category: 'fruits',
      price: '400',
      qty: 1


>>>>>>> 87a6ac9866ca526a837634312485ba4f4c0bad20
    },
    {
      imageURL: Carrot,
      title: 'Cauliflower',
      calories: '20 callories',
<<<<<<< HEAD
      category: 'fruits'
=======
      category: 'fruits',
      price: '500'

>>>>>>> 87a6ac9866ca526a837634312485ba4f4c0bad20
    },
    {
      imageURL: Carrot,
      title: 'Beetroot',
      calories: '20 callories',
<<<<<<< HEAD
      category: 'fruits'
=======
      category: 'fruits',
      price: '600',
      qty: 1


>>>>>>> 87a6ac9866ca526a837634312485ba4f4c0bad20
    },
    {
      imageURL: Carrot,
      title: 'Cucumber',
      calories: '20 callories',
<<<<<<< HEAD
      category: 'fruits'
=======
      category: 'fruits',
      price: '700',
      qty: 1

>>>>>>> 87a6ac9866ca526a837634312485ba4f4c0bad20
    }
  ]

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy vegetables
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={data?.filter((n) => n.category === "fruits")}
        />
      </section>

       <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={data?.filter((n) => n.category === "fruits")}
        />
      </section>

      <MenuContainer />

      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
