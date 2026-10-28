
import hero3 from '../assets/107.jpg';

function Banner3() {
  return (
    <div className=''>

<div className=" mt-[25px] w-full h-[700px] bg-contain bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${hero3})` }}>
<div className=" mt-[320px] ml-[35px]   p-[20px]">

    <p className="text-black text-[23px] font-[400] mb-[18px]">Enabling Better Living</p>
    <div className="flex gap-[25px] items-center  text-center align-center">
        <p className="text-black text-[14px] font-[500] underline underline-offset-8">Learn More</p>
    <button className="text-[14px] border border-black bg-[#b1d6f0] text-black px-[20px] py-[5px] rounded-full font-[500] hover:bg-black hover:text-white">
      View all
    </button>
    </div>

</div>
</div>
    </div>
  );
}

export default Banner3;