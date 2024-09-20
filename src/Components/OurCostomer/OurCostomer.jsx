import men from '../../../src/assets/men.png'
import star from '../../../src/assets/Vector.png'
import koma1 from '../../../src/assets/koma1.png'

const OurCostomer = () => {
    return (
        <>
            <div className="container mx-auto pt-[30px]">
                <div className="text-left px-[70px]">
                <div>
                <h3 className='text-[40px] pr-[480px]' >We Care About Our Customer Experience Too</h3>
                    <p className='text-[16px] font-regular pr-[620px] py-[20px]' >There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form.</p>
                </div>

               <div className='flex justify-center gap-[20px]' >
               <div className=' justify-center gap-[15px] p-[40px] pt-[20px] border-[2px] rounded-[10px] border-[#b1aaaa]' >
                        <div>
                            <img src={men} alt="" />
                            <div className='flex py-[10px] gap-[10px]' >
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                            <p className='texr-left pr-[80px] '>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                            <h4 className='text-[20px] font-semibold py-[10px]' >
                                Mahid Ahmed</h4>
                            <span>UX Designer</span>
                            <div>
                        <img className='pl-[220px]' src={koma1} alt="" />
                    </div>

                        </div>
          
                    </div>
                <div className=' justify-center gap-[15px] p-[40px] pt-[20px] border-[2px]  rounded-[10px] border-[#b4b1b1]' >
                        <div>
                            <img src={men} alt="" />
                            <div className='flex py-[10px] gap-[10px]' >
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                            <p className='texr-left pr-[80px] '>
                                There are many variations of passages of Lorem Ipsum available, but
                                 the majority have suffered alteration in some form.</p>
                            <h4 className='text-[20px] font-semibold py-[10px]' >
                                Mahid Ahmed</h4>
                            <span>UX Designer</span>
                            <div>
                        <img className='pl-[220px]' src={koma1} alt="" />
                    </div>

                        </div>
                    </div>
                 <div className='justify-center gap-[15px] p-[40px] pt-[20px] border-[2px]  rounded-[10px] border-[#c2bfbf]' >
                        <div>
                            <img src={men} alt="" />
                            <div className='flex py-[10px] gap-[10px]' >
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                            <p className='texr-left pr-[80px] '>
                                There are many variations of passages of Lorem Ipsum available, but the
                                 majority have suffered alteration in some form.</p>
                            <h4 className='text-[20px] font-semibold py-[10px]' >
                                Mahid Ahmed</h4>
                            <span>UX Designer</span>
                        </div>

        
                    <div>
                        <img className='pl-[220px]' src={koma1} alt="" />
                    </div>

                    </div>
               </div>
                </div>
            </div>

        </>
    )
}

export default OurCostomer