import member from '../../../src/assets/TeamMember1.png'
import member2 from '../../../src/assets/TeamMember2.png'
import member3 from '../../../src/assets/TeamMember3.png'
const OurMember = () => {
    return (
        <>
            <div className='text-center pt-[50px]' >
                <h3 className='text-[40px]' >OurMembers</h3>
                <p className='text-[16px] font-regular px-[390px]' >There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form.</p>
            </div>
            <div className='flex container mx-auto justify-center gap-[15px] pt-[20px]' >
                <div>
                    <img src={member} alt="" />   
                    </div>
                <div>
                    <img src={member2} alt="" />
                </div>
                <div>
                    <img src={member3} alt="" />
                </div>
            </div>

        </>
    )
}

export default OurMember