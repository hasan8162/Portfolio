import Achievementcard from "../components/Achievementcard"
import { Myachivements } from "../assets/content"

function Achievements() {
  return (
    <div id="achievements" className="pt-30 pl-10 pr-10">
        <h1 className="lg:text-6xl lg:text-left text-center text-3xl text-gray-800 font-medium">- Achievements -</h1>
        <div className="grid lg:grid-cols-3 mt-10 gap-5 grid-cols-1">
        {
            Object.entries(Myachivements).map(([key, values]) => (
                <Achievementcard
                    key={key}
                    title={key}
                    values={values}
                />
            ))
        }
        </div>
    </div>
  )
}
export default Achievements