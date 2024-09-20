import logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <>
<div className="container mx-auto flex  ">
    <div className="w-[20%] pl-[30px]">
        <img className='justify-center item-center' src={logo} alt="" />
    </div>
    <div className="w-[80%] p-[10px]">
   <div className='flex list-none pt-[30px] justify-center gap-[50px] cursor-pointer '>
   <ul>
        <li className='text-blue-500 '>Home</li>
      </ul>
      <li>About</li>
      <li>Service</li>
      <li>Blog</li>
      <li>Contact</li>
      
  <div className='pl-[100px]'>
  <button className='bg-blue-500 w-[120px] text-white text-[20px] rounded-[10px] '>Contact Us</button>
  </div>
   </div>
    </div>
</div>
    </>
  )
}

export default Navbar