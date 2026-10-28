
import heroimage from '../assets/middle pic.jpg';

function Secound() {
  return (
    <div className=''>

<div className="mt-[25px] w-full h-[700px] bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${heroimage})` }}>
<div className=" mt-[400px] ml-[35px] flex gap-[25px] items-center  text-center align-center p-[20px]">
        <p className="text-black text-[14px] font-[500] underline underline-offset-8">Learn More</p>
    <button className="text-[14px] border border-black bg-[#e7f0ef] text-black px-[20px] py-[5px] rounded-full font-[500] hover:bg-black hover:text-white">
      Buy
    </button>
</div>
</div>
    </div>
  );
}

export default Secound;