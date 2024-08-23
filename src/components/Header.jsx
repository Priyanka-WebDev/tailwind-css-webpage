
const Header = () => {
    return (
        <div className="relative">
           <nav  className="flex justify-around items-center h-16 fixed top-0 left-0 right-0 bg-[#ffffffe8]">
            <div className="text-xl font-extrabold text-black">
                Nature
            </div>
            <ul className="flex gap-4 text-black">
                <li>Home</li>
                <li>OurStaff</li>
                <li>News</li>
                <li>Gallery</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="text-white bg-teal-700 px-5 py-1  rounded-2xl">Enroll Now</div>
           </nav>
        </div>
    )
}

export default Header
