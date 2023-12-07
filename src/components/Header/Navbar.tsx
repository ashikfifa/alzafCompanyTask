import logo from "../../img/Alzaf Logo Size 300x300 pixel 1.png";
import searchIcon from "../../img/Search 2.png";
import profile from "../../svgs/profile.svg";
import wishList from "../../svgs/wishList.svg";
import cart from "../../svgs/cart.svg";
const Navbar = () => {
  return (
    <>
      <section className="py-3 ">
        <div className="container px-7 grid grid-cols-8 gap-2">
          <div className="col-span-1 flex item-center pr-4">
            <img src={logo} alt="" />
          </div>

          <div className=" flex item-center search-box flex col-span-4 border-2 border-solid border-gray-300 rounded-lg">
            <input
              type="text"
              placeholder="Search Product"
              className=" px-2 py-2 outline-none"
              style={{ width: "100%" }}
            />
            <div className="bg-orange-500 w-10 cursor-pointer">
              <img className="pl-2 pt-2" src={searchIcon} alt="" />
            </div>
          </div>

          <div className="pl-4 flex item-center col-span-3">
            <div className="grid grid-cols-10 gap-6">
              <div className="bg-orange-500 bg-opacity-10 col-span-2 w-10 rounded-lg cursor-pointer">
                <img className="p-2" src={profile} alt="" />
              </div>
              <div className="bg-orange-500 bg-opacity-10 col-span-2 w-10 rounded-lg cursor-pointer">
                <img className="p-2" src={wishList} alt="" />
              </div>
              <div className="bg-orange-500 bg-opacity-10 col-span-2 w-10 rounded-lg cursor-pointer">
                <img className="p-2" src={cart} alt="" />
              </div>

              <div className="col-span-4 flex item-center pt-2">
                Cloud Service
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
