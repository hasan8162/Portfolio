import MyImage from "../assets/Me.jpeg"

function Home() {
  return (
    <div id="home" className="pt-30 pl-10 pr-10 pb-20">
        <div className="grid lg:grid-cols-2 pt-15 grid-cols-1">
            <div>
                <div>
                    <h1 className="lg:text-6xl lg:text-left text-gray-800 font-medium text-center text-3xl">Hello, I'm Mahamudul Hasan</h1>
                </div>
                <div className="pt-7 font-medium text-gray-600 lg:text-xl lg:text-left text-center">
                    <p>A Competitive Programmer  |  A Problem Solver  |  A Web Developer  |  An Active Learner</p>
                </div>
                <div className="mt-15 mb-5 grid grid-cols-2 gap-5">
                    <a href="#contact" className="border-2 h-10 border-gray-800 hover:border-gray-500 text-gray-700 text-center content-center">Get In Touch</a>
                    <a href="https://drive.google.com/file/d/1G5TL9IkNoev1NIwjEhaarefl-3Cp4Uc7/view?usp=sharing" target="_blank" className="h-10 bg-gray-700 text-gray-200 hover:bg-gray-600 text-center content-center">Download CV</a>
                </div>
                
            </div>
            <div className="flex lg:justify-end justify-center">
                <img src={MyImage} alt="profile-Image" className="rounded-full lg:h-90 h-80"/>
            </div>
        </div>
    </div>
  )
}
export default Home
