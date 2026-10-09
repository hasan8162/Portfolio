import Projectcard from "../components/Projectcard.jsx"
import { Myprojects } from "../assets/content"

function Projects() {
  return (
    <div id="projects" className="pt-30 pl-10 pr-10">
        <h1 className="lg:text-6xl lg:text-left text-center text-4xl text-gray-800 font-medium">- Projects -</h1>
        <div className="mt-10">
        {
            Object.entries(Myprojects).map(([key, values]) => (
                <Projectcard
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
export default Projects