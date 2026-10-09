import { skills } from "../assets/content"
import Skillcard from "../components/SkillCard"

function Skills() {
  return (
    <div id="skills" className="pt-30 pl-10 pr-10">
        <h1 className="lg:text-6xl lg:text-left text-center text-4xl text-gray-800 font-medium">- Skills -</h1>
        <div className="grid lg:grid-cols-4 grid-cols-1 mt-10 gap-2 gap-y-4">
        {
           Object.entries(skills).map(([key, values]) => (
                <Skillcard 
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
export default Skills