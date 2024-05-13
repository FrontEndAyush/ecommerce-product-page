import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Card = ({
  cartShow,
  cartItemShow,
  setCartItemShow,
  counter,
  setCounter,
  setCartShow,
}) => {
  let [img, setImg] = useState("1");
  let [showBigImg, setShowBigImg] = useState(false);
  let arrOfImages = [
    "/cardImages/2.jpg",
    "/cardImages/3.jpg",
    "/cardImages/4.jpg",
    "/cardImages/1.jpg",
  ];

  function changeImage(img) {
    setImg(img);
  }

  function changeImageOnArrowClickNext() {
    if (img == 4) {
      setImg(1);
    } else {
      setImg(Number(img) + 1);
    }
  }
  function changeImageOnArrowClickPrevious() {
    if (img == 0 || img == 1) {
      setImg(4);
    } else {
      setImg(Number(img) - 1);
    }
    console.log(img);
  }

  function incrementCounter() {
    setCartItemShow(true);
    setCounter((previousValue) => previousValue + 1);
  }
  function decrementCounter() {
    if (counter === 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  }

  function isCartItemShow() {
    setCounter(counter++);
    setCartItemShow(true);
  }
  function notShowCartItem() {
    setCounter(0);
    setCartItemShow(false);
  }

  function isShowBigImg() {
    if (window.innerWidth < 1024) {
      return;
    }
    setShowBigImg(!showBigImg);
    setCartShow(false);
  }
  return (
    <div className="lg:w-[68vw] py-[70px] mx-auto flex justify-between flex-wrap lg:flex-nowrap gap-0">
      {/* first  */}
      <div>
        <img
          src="/images/icon-previous.svg"
          className="absolute top-[250px] left-0"
          alt=""
          onClick={changeImageOnArrowClickPrevious}
        />
        <img
          src={`/cardImages/${img}.jpg`}
          className="lg:w-11/12  w-screen cursor-none lg:cursor-pointer -mt-10 lg:-mt-0 lg:rounded-lg"
          alt=""
          onClick={isShowBigImg}
        />
        <img
          src="/images/icon-next.svg"
          className="absolute top-[250px] cursor-pointer right-0"
          alt=""
          onClick={changeImageOnArrowClickNext}
        />
        <div className="flex  gap-4 mt-3 ">
          <img
            src="/cardImages/1th.jpg"
            className={`w-[92px] hidden lg:block cursor-pointer  hover:opacity-70 duration-300 rounded-lg h-[92px] ${
              img == 1 && "border-2 opacity-70 border-orange-500"
            }`}
            alt=""
            onClick={() => changeImage("1")}
          />
          <img
            src="/cardImages/2th.jpg"
            className={`w-[92px] hidden lg:block cursor-pointer  hover:opacity-70  duration-300 rounded-lg h-[92px] ${
              img == 2 && "border-2 opacity-70 border-orange-500"
            }`}
            alt=""
            onClick={() => changeImage("2")}
          />
          <img
            src="/cardImages/3th.jpg"
            className={`w-[92px]  hidden lg:block  cursor-pointer  hover:opacity-70  duration-300 rounded-lg h-[92px] ${
              img == 3 && "border-2 opacity-70  border-orange-500"
            }`}
            alt=""
            onClick={() => changeImage("3")}
          />
          <img
            src="/cardImages/4th.jpg"
            className={`w-[92px] hidden lg:block cursor-pointer  hover:opacity-70  duration-300 rounded-lg h-[92px] ${
              img == 4 && "border-2 opacity-70  border-orange-500"
            }`}
            alt=""
            onClick={() => changeImage("4")}
          />
        </div>
      </div>
      <div
        className={`absolute ${
          showBigImg == true ? "block" : "hidden"
        }  bg-black overflow-auto  bg-opacity-40 flex flex-col  justify-center items-center right-0 bg-gray- top-0 h-full left-0 pl-[0px]`}
      >
        <img
          src="/images/icon-previous.svg"
          className="absolute top-[300px] left-[470px]"
          alt=""
          onClick={changeImageOnArrowClickPrevious}
        />
        <img
          src={`/cardImages/${img}.jpg`}
          className="w-4/12 cursor-pointer rounded-lg"
          alt=""
        />
        <img
          src="/images/icon-next.svg"
          className="absolute top-[300px] cursor-pointer right-[470px]"
          alt=""
          onClick={changeImageOnArrowClickNext}
        />
        <img
          src="/images/icon-close.svg "
          onClick={isShowBigImg}
          className="absolute top-[30px] lg:cursor-pointer w-[20px]  cursor-pointer right-[500px]"
          alt=""
        />
        <div className="flex   gap-4  mt-2  ">
          <img
            src="/cardImages/1th.jpg"
            className={`w-[110px] lg:cursor-pointer  hover:opacity-70 duration-300 rounded-lg h-[110px] ${
              img == 1 && "border-2 opacity-70 border-orange-500"
            }`}
            alt=""
            onClick={() => changeImage("1")}
          />
          <img
            src="/cardImages/2th.jpg"
            className={`w-[110px]  cursor-pointer  hover:opacity-70  duration-300 rounded-lg h-[110px]  ${
              img == 2 && "border-2 opacity-90 border-orange-500"
            }`}
            alt=""
            onClick={() => changeImage("2")}
          />
          <img
            src="/cardImages/3th.jpg"
            className={`w-[110px]  cursor-pointer  hover:opacity-70  duration-300 rounded-lg h-[110px] ${
              img == 3 && "border-2 opacity-70  border-orange-500"
            }`}
            alt=""
            onClick={() => changeImage("3")}
          />
          <img
            src="/cardImages/4th.jpg"
            className={`w-[110px]  cursor-pointer  hover:opacity-70  duration-300 rounded-lg h-[110px]  ${
              img == 4 && "border-2 opacity-70  border-orange-500"
            }`}
            alt=""
            onClick={() => changeImage("4")}
          />
        </div>
      </div>

      {/* second   */}
      <div className="lg:py-10  lg:ml-5  px-4">
        <h1 className="font-semibold text-[#F5873E] mb-3  sm:text-[16px]">
          SNEAKER COMPANY
        </h1>
        <h1 className="lg:text-4xl text-[25px] font-bold  mb-5 ">
          Fall Limited Addition Sneakers
        </h1>
        <p className="text-[#97989E]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durabble rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex mt-4">
          <p className="font-bold mr-4 text-2xl">$124.00</p>{" "}
          <span className="font-bold py-1 rounded px-1  text-[#ED7E26] bg-[#FFF1E3]">
            50%
          </span>
        </div>
        <p className="line-through mb-5">$250.00</p>
        <div className="flex items-center">
          <div className="flex gap-3 items-center bg-[#F7F8FD] px-3 py-2 cursor-pointer">
            <FiMinus className="text-[#FF7D1B]" onClick={decrementCounter} />
            <p>{counter}</p>
            <FaPlus className="text-[#FF7D1B]" onClick={incrementCounter} />
          </div>
          <div>
            <button
              onClick={isCartItemShow}
              className=" border-2 hover:bg-[#FFAC6A] py-2 px-[12vw] duration-300 font-bold lg:px-14 lg:py-2 rounded-lg ml-5 bg-[#FF7D1B] text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
        {cartShow && (
          <>
            <div className="w-[300px] h-[220px] border  absolute lg:top-[80px] rounded-lg bg-white top-[85px]  right-[20px] lg:right-[210px]">
              {cartItemShow === true ? (
                <>
                  <h1 className=" p-5 font-semibold">Cart</h1>
                  <hr />
                  <div className="flex gap-5 px-2 py-2 items-center">
                    <img
                      src="/cardImages/1th.jpg"
                      className="w-[60px] rounded-xl"
                      alt=""
                    />
                    <div>
                      <p>Fall Limited Edition Sneakers</p>
                      <p>
                        $125.00 x {counter} <b>${125 * counter}.00</b>
                      </p>
                    </div>
                    <MdDelete
                      onClick={notShowCartItem}
                      className="text-4xl cursor-pointer"
                    />
                  </div>
                  <button className=" border-2 hover:bg-[#FFAC6A] duration-300 font-bold px-24  py-2 rounded-lg ml-5 bg-[#FF7D1B] text-white">
                    Checkout
                  </button>
                </>
              ) : (
                <>
                  <h1 className="text-center text-[#808187] mt-[100px] font-semibold">
                    Your cart is empty.
                  </h1>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
