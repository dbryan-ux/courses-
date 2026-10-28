
import grid1 from '../assets/108.jpg';
import grid2 from '../assets/109.jpg';
import grid3 from '../assets/110.jpg';
import grid4 from '../assets/111.jpg';

function Grid3() {
  return (
    <div className='mt-[25px] overflow-hidden'>
<div className="grid grid-cols-4 gap-6 items-center justify-center text-center align-center ">
<div className=" w-full h-[300px] bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${grid1})` }}>
<p className="text-[black] font-[700] text-center p-3 text-[23px]" >

Bespoke AI Refrigerator</p>

</div>

<div className=" w-full h-[300px] bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${grid2})` }}>
<p className="text-[black] font-[700] text-center p-3 text-[23px]" >
Bespoke AI Laundry
</p>

</div>

<div className=" w-full h-[300px] bg-contain bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${grid3})` }}>
<p className="text-[black] font-[700] text-center p-3 text-[23px]" >
VS9000 Stick Vacuum
</p>

</div>

<div className="  w-full h-[300px] bg-contain bg-center bg-no-repeat overflow-hidden " style={{ backgroundImage: `url(${grid4})` }}>
<p className="text-[black] font-[700] text-center p-3 text-[23px]" >
AR9500T Wall-mount AC with Wind-Free™</p>

</div>

</div>

    </div>
  );
}

export default Grid3;