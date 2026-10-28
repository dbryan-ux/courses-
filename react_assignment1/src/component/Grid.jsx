
import grid1 from '../assets/96.jpg';
import grid2 from '../assets/97.jpg';
import grid3 from '../assets/98.jpg';
import grid4 from '../assets/99.jpg';

function Grid() {
  return (
    <div className='mt-[25px] overflow-hidden'>
<div className="grid grid-cols-4 gap-6 items-center justify-center text-center align-center ">
<div className=" w-full h-[300px] bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${grid1})` }}>
<p className="text-[black] font-[700] text-center p-3 text-[23px]" >
Galaxy Z Fold8</p>
<button className="bg-[black] hover:bg-[white] hover:border hover:border-[black] hover:text-[black] text-white font-[500] py-2 px-4 rounded-full mt-[200px] " >
Learn More
</button>
</div>

<div className=" w-full h-[300px] bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${grid2})` }}>
<p className="text-[black] font-[700] text-center p-3 text-[23px]" >
Galaxy Z Flip8</p>
<button className="bg-[black] hover:bg-[white] hover:border hover:border-[black] hover:text-[black] text-white font-[500] py-2 px-4 rounded-full mt-[200px] " >
Learn More
</button>
</div>

<div className=" w-full h-[300px] bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${grid3})` }}>
<p className="text-[black] font-[700] text-center p-3 text-[23px]" >
Galaxy Watch Ultra2</p>
<button className="bg-[black] hover:bg-[white] hover:border hover:border-[black] hover:text-[black] text-white font-[500] py-2 px-4 rounded-full mt-[200px] " >
Learn More
</button>
</div>

<div className="  w-full h-[300px] bg-cover bg-center bg-no-repeat overflow-hidden " style={{ backgroundImage: `url(${grid4})` }}>
<p className="text-[black] font-[700] text-center p-3 text-[23px]" >
Galaxy S26 FE</p>
<button className="bg-[black] hover:bg-[white] hover:border hover:border-[black] hover:text-[black] text-white font-[500] py-2 px-4 rounded-full mt-[200px] " >
Learn More
</button>
</div>

</div>

    </div>
  );
}

export default Grid;