
const Footer = () => {
  return (
   <div className=" mt-14 bg-[#0fb78d] pb-20 text-white">
     <div className=" flex w-[70%] mx-auto p-20">
      
      <div className="w-[30%] flex flex-col gap-6">
        <h1 className="font-bold text-xl">About Nurture.</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <h1>Connect</h1>
      </div>
      <div className="w-[30%] flex flex-col gap-3 ">
        <h1 className="font-bold text-xl">Projects</h1>
        <li className="list-none">Web Design</li>
        <li className="list-none">HTML5</li>
        <li className="list-none">CSS3</li>
        <li className="list-none">jQuery</li>
        <li className="list-none">Bootstrap</li>
      </div>
      <div className="w-[30%] flex flex-col gap-6">
        <h1 className="font-bold text-xl">Gallery</h1>
        <div className="grid grid-cols-3 gap-4"> 
            <img src="https://preview.colorlib.com/theme/nurture/images/gal_1.jpg" height={40} width={40} alt="" />
            <img src="https://preview.colorlib.com/theme/nurture/images/gal_2.jpg" height={40} width={40} alt="" />
            <img src="https://preview.colorlib.com/theme/nurture/images/gal_3.jpg" height={40} width={40} alt="" />
            <img src="https://preview.colorlib.com/theme/nurture/images/gal_4.jpg" height={40} width={40} alt="" />
            <img src="https://preview.colorlib.com/theme/nurture/images/gal_5.jpg" height={40} width={40} alt="" />
            <img src="https://preview.colorlib.com/theme/nurture/images/gal_6.jpg" height={40} width={40} alt="" />
        </div>
      </div>
      <div className="w-[30%] flex flex-col gap-3">
        <h1 className="font-bold text-xl">Contact</h1>
        <p>43 Raymouth Rd. Baltemoer, London 3910</p>
        <li className="list-none">+1(123)-456-7890</li>
        <li className="list-none">+1(123)-456-7890</li>
        <li className="list-none">info@mydomain.com</li>
      </div>
    </div>
    <p className="text-center ">Copyright ©2024 All rights reserved | This template is made  by Priyanka</p>
   </div>
  )
}

export default Footer
