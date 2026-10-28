
import hero2 from '../assets/computer.jpg';

function Banner2() {
  return (
    <div className=''>

<div className="border-2 border-dotted mt-[25px] w-full h-[700px] bg-contain bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${hero2})` }}>
<div className=" mt-[230px] ml-[35px]   p-[20px]">
    <h1 className='mb-[10px] text-[50px] font-[700]'>2025 AI TVs</h1>
    <p className="text-black text-[23px] font-[400] mb-[10px]">Explore new AI TVs</p>
    <div className="flex gap-[25px] items-center  text-center align-center">
        <p className="text-black text-[14px] font-[500] underline underline-offset-8">Learn More</p>
    <button className="text-[14px] border border-black bg-[#e7f0ef] text-black px-[20px] py-[5px] rounded-full font-[500] hover:bg-black hover:text-white">
      View all
    </button>
    </div>

</div>
</div>
    </div>
  );
}

export default Banner2;