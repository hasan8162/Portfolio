import typing from "../assets/typing.gif"

function About() {
  return (
    <div id="about" className="pt-30 pl-10 pr-10">
        <h1 className="lg:text-6xl lg:text-left text-4xl text-gray-800 font-medium text-center">- Who Am I -</h1>
        <div className="grid lg:grid-cols-2 mt-5 gap-5 grid-cols-1">
            <div className="text-lg text-gray-700">
                <p className="pt-2">I'm a Computer Science and Engineering graduate with interests in <span className="font-bold"> software development, problem-solving, </span> and building practical applications. </p>
                <p className="pt-2">My primary focus is modern web development, working with  <span className="font-bold"> JavaScript, React, Node.js, Express.js, </span> and <span className="font-bold"> MongoDB </span>. </p>
                <p className="pt-2">I'm passionate about competitive programming and also participated in various online and offine competitions. This has helped me develop mathimatical and logical skills in finding efficient solutions. </p>
                <p className="pt-2"> I'm currently looking for internship and junior software development opportunities, either remote or onsite, where I can contribute to real-world projects, learn from experienced developers, and grow as a software engineer. </p>
            </div>
            <div className="lg:flex justify-center hidden">
              <img src={typing} alt="animation" className="opacity-70 h-100"></img>
            </div>
        </div>
    </div>
  )
}
export default About