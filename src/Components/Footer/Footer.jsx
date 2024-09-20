import logo from '../../../src/assets/Logo.png'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
    return (
        <>
            <div className='pt-[20px]'>
                <div className=' flex container mx-auto bg-[#c78fec55] '>
                    <div className='w-[20%]'>
                        <img className='pl-[50px] pt-[20px]' src={logo} alt="" />
                        <p className='text-left pl-[50px]'>There are many variations of passages of Lorem Ipsum , but
                            the majority have suffered alteration in some form.</p>
                        <div className='flex pl-[50px] gap-[20px] pt-[20px]'>
                            <FaFacebook />
                            <FaTwitter />
                        </div>

                    </div>
                    <div className='flex gap-[50px] px-[200px] items-center'>
                        <div>
                            <h2 className='text-[25px] font-semibold'>Company</h2>
                            <ul>
                                <li>About Us</li>
                            </ul>
                            <ul>
                                <li>Work</li>
                            </ul>
                            <ul>
                                <li>Latest News</li>
                            </ul>
                            <ul>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className=''>
                            <h2 className='text-[25px] font-semibold'>Product</h2>
                            <ul>
                                <li>About Us</li>
                            </ul>
                            <ul>
                                <li>Work</li>
                            </ul>
                            <ul>
                                <li>Latest News</li>
                            </ul>
                            <ul>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className='justify-center gap-[20px]'>
                            <h2 className='text-[25px] font-semibold'>Support</h2>
                            <ul>
                                <li>About Us</li>
                            </ul>
                            <ul>
                                <li>Work</li>
                            </ul>
                            <ul>
                                <li>Latest News</li>
                            </ul>
                            <ul>
                                <li>Careers</li>
                            </ul>
                        </div>
                     
                     <div className='pb-[50px]'>
                     <div>
                            <h2 className='text-[25px] font-semibold'>Contact</h2>
                            <ul>
                                <li>524 Broadway , NYC</li>
                            </ul>
                            <ul>
                                <li>+1 777 - 978 - 5570</li>
                            </ul>
                        </div>
                     </div>
                    </div>
                </div>
              
                
            </div>




        </>
    )
}

export default Footer