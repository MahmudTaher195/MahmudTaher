import picer1 from '../../../src/assets/picer1.png'
import pic2 from '../../../src/assets/Portfolio2.png'
import picer3 from '../../../src/assets/Rectangle3.png'
import picer4 from '../../../src/assets/Rectangle4.png'
import picer5 from '../../../src/assets/Rectangle5.png'
import picer6 from '../../../src/assets/Rectangle6.png'


const OurProducts = () => {
  return (
    <>
    <div className='text-center pt-[50px]' >
  <h3 className='text-[40px]' >OurProdects</h3>
<p className='text-[16px] font-regular px-[390px]' >There are many variations of passages of Lorem Ipsum available, but the
   majority have suffered alteration in some form.</p>
   </div>


<div className='flex container mx-auto justify-center gap-[15px] pt-[20px]' >
<div>
    <img src={picer1} alt="" />
   </div>
   <div>
    <img src={pic2} alt="" />
   </div>
   <div>
    <img src={picer3} alt="" />
   </div>
   <div>
    <img src={picer4} alt="" />
   </div>
</div>

<div className='flex container mx-auto justify-center gap-[15px] pt-[20px]' >
<div>
    <img src={picer5} alt="" />
   </div>
   <div>
    <img src={picer6} alt="" />
   </div>
   <div>
    <img src={picer1} alt="" />
   </div>
   <div>
    <img src={pic2} alt="" />
   </div>
</div>





    </>
  )
}

export default OurProducts