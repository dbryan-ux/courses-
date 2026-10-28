
import searchIcon from '../assets/search (2).png';
import userAvatar from '../assets/user-avatar.png';
import menuIcon from '../assets/menu.png';
import heroimage from '../assets/hero.jpg';

function Nav() {
  return (
    <div className=' overflow-hidden'>
      <nav className="flex justify-end gap-5 p-[10px] border-b border-gray-200 items-center">
        <h1 className="text-[13px]">Choose your location and language.</h1>
<select className="w-[280px] h-[39px] border border-2 border-gray-500   hover:border-2 hover:border-dotted hover:border-[black] rounded-full px-[20px] text-[13px]  ">
    <option>Africa</option>
    <option>Afrique / Français</option>
    <option>Africa / Portugues</option>
    <option>Other Countries</option>
</select>
        <button className="w-[100px] h-[39px] bg-black text-white text-[13px] rounded-full">
          Continue
        </button>
        <p className="text-[14px] mb-[20px]">X</p>
      </nav>

      <nav className=" bg-transparent flex justify-between mt-[10px] items-center text-center align-center p-[10px] sticky top-0  z-50 sticky top-0">
        <h1 className="font-sans font-[700] uppercase text-[20px]">
          SAMSUNG
        </h1>

        <div className="flex items-center gap-4 justify-center text-center align-center">
          <img src={searchIcon} alt="search" className="w-[25px]" />
          <img src={userAvatar} alt="user" className="w-[25px]" />
          <img src={menuIcon} alt="menu" className="w-[25px]" />
        </div>
      </nav>

<div className="  mt-[-20px] w-full h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden transition-transform duration-500 ease-in-out hover:scale-110" style={{ backgroundImage: `url(${heroimage})` }}>
<div className="ml-[250px] mt-[300px] flex gap-[25px] items-center justify-center text-center align-center p-[20px]">
        <p className="text-black text-[14px] font-[500] underline underline-offset-8">Learn More</p>
    <button className="text-[14px] border border-black bg-white text-black px-[20px] py-[5px] rounded-full font-[500] hover:bg-black hover:text-white">
      Buy
    </button>
</div>
</div>
    </div>
  );
}

export default Nav;