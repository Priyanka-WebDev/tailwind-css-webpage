import Header from "./components/Header"
import Hero from "./components/Hero"
import Main from "./components/Main"
import Text from "./components/Text"
import Footer from './components/Footer'
function App() {

  return (
    <>
      <div className="opacity-1 sticky" style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/nurture/images/hero_bg.jpg.webp")' }}>
        <Header />
        <Main />
      </div>

      <div className="flex justify-between gap-10 w-[70%] mx-auto m-10 mb-20">
        <div className="bg-[#5cb100]  ">
          <Text color="#5cb100" img="https://tse4.mm.bing.net/th?id=OIP.PXnOcLeJ3KmtStuC_LarPwHaG3&pid=Api&P=0&h=180" head="Learn" desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />
        </div>

        <div className="bg-[#ec661f]">
          <Text img="https://tse2.mm.bing.net/th?id=OIP.bQTIYCnQiqSv92zDRp7JzgAAAA&pid=Api&P=0&h=180" head="Play" desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />
        </div>
        <div className="bg-[#4fb0dc]">
          <Text img="https://tse2.mm.bing.net/th?id=OIP.qQGOX9Qv9oyHqJkTzo8x8AHaGR&pid=Api&P=0&h=180" head="Meal" desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />
        </div>
      </div>
      <Hero/>
      <Footer/>
    </>
  )
}

export default App
