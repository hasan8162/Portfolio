import Cp from "../components/Cp.jsx"
import { Solving } from "../assets/content.js"

function ProblemSolving() {
  return (
    <div id="problem" className="pt-30 pl-10 pr-10">
       <h1 className="lg:text-6xl lg:text-left text-center text-4xl text-gray-800 font-medium">- Problem Solving -</h1>

       <div className="grid lg:grid-cols-4 grid-cols-1 mt-5 pt-5 gap-2">
        <div className="pl-3 p-3">
          <h1 className="font-bold text-5xl text-gray-700">3000+</h1>
          <p className="mt-3 font-semibold text-gray-700 text-lg">Problems Solved</p>
          <h1 className="font-bold text-4xl text-gray-700 mt-7 ">200+</h1>
          <p className="mt-3 font-semibold text-gray-700 text-lg">Contests participated both online & offline</p>
        </div>
        {
            Object.entries( Solving ).map(([key, values]) => (
              <Cp
                key={key}
                Platform={key}
                values={values}
              />
            ))
        }
       </div>
    </div>
  )
}
export default ProblemSolving