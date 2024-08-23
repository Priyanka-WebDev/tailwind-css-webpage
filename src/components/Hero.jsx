import Play from "./Play"
import { RiCheckLine } from "react-icons/ri";
const Hero = () => {
  return (
    <>
        <div className="text-center">
      <div ><h1 className="text-6xl text-teal-700">What <span className="underline underline-offset-8 "> we</span> offer</h1>
      <p className="text-gray-500 m-6">Far far away, behind the word mountains, far from the countries Vokalia and <br></br> Consonantia, there live the blind texts.</p>
      </div>
      
    </div>
    <div className="grid grid-cols-3 border bg-slate-100 gap-10 w-[70%] mx-auto m-10 mb-20 text-black">
    <Play img="https://tse2.mm.bing.net/th?id=OIP.9ikNH5Ow2CdKuaPnD96AJAHaHa&pid=Api&P=0&h=180" head="
Music Class" desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
    <Play img="https://tse3.mm.bing.net/th?id=OIP.cWF3GL52VfWjjHxAvUjA8AAAAA&pid=Api&P=0&h=180" 
    head="Math Class" desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
    <Play img="https://tse3.mm.bing.net/th?id=OIP.zVyetCtz1KDrbJwbKKgrgwHaEI&pid=Api&P=0&h=180" 
    head="English Class" desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
    <Play img="https://tse1.mm.bing.net/th?id=OIP.EgfKaKEmMUB9rS5T02AemwHaF7&pid=Api&P=0&h=180" head="
Reading for Kids" desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
    <Play img="https://tse3.mm.bing.net/th?id=OIP.RVatD6DhWLfk83iEUc-EGQHaHa&pid=Api&P=0&h=180" head="History Class" desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
    <Play img="https://tse1.mm.bing.net/th?id=OIP.yohzLz_31cvIJKk63XZ8DAHaDt&pid=Api&P=0&h=180" head="
Active Class" desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
    </div>

    <div className="flex justify-around w-[90%]  mx-auto">
        <div className="w-[40%]"><h1 className="text-5xl font-semibold"><span className="underline underline-offset-8 ">Ab</span>out Us</h1>
        <p className="leading-6 mt-7 text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        
        
        <div className="mt-5 mb-5 leading-8">
        <p ><RiCheckLine className="inline text-teal-600 text-3xl"/>Separated  they live
            </p>
            <p> <RiCheckLine className="inline text-teal-600 text-3xl"/>Bookmarksgrove right at the coast</p>
            <p><RiCheckLine className="inline text-teal-600 text-3xl"/>large language ocean</p>
        </div>

        <button className="text-white bg-teal-700 px-5 py-2  rounded-full">ADDMISSION</button>
        <button  className="text-black border px-5 py-2  rounded-full hover:bg-teal-700 hover:text-white">LEARN MORE</button>
        </div>
        <div className="w-[40%]"><img className="rounded-full" src="https://preview.colorlib.com/theme/nurture/images/about_1.jpg" alt="" /></div>
    </div>

    </>
  )
}

export default Hero
