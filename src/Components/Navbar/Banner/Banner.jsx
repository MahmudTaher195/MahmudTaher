import banner from '../../../assets/Banner.png'

const Banner = () => {
    return (
        <>
            <div className="flex bg-[#5956E8] pl-pr-[370px] pt-[180px] pb-[180px]" >
                <div className="w-1/2 container mx-auto text-center p-[50px] text-white">
                    <h1 className="text-center text-[60px] ">We Are Digital Product Design Agency</h1>
                    <p className='text-[16px] py-[20px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <div className='pt-[20px]'>
                        <button className='w-[120px] bg-white text-[20px] rounded-[10px] text-blue-500'>Contact Us</button>
                    </div>

                </div>
                <div className=" w-1/2  pl-pr-[370px]">
                    <img className='' src={banner} alt="" />

                </div>

            </div>

        </>
    )
}

export default Banner