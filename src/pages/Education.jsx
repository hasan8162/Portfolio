import { education } from "../assets/content"
import Educationcard from "../components/Educationcard.jsx"

function Education() {
  return (
    <div id="education" className="pt-30 pl-10 pr-10">
        <h1 className="lg:text-6xl lg:text-left text-center text-4xl text-gray-800 font-medium">- Education -</h1>
        <div className="mt-10">
        {
            Object.entries(education).map(([key, values]) => (
                <Educationcard
                    key={key}
                    values={values}
                />
            ))
        }
        </div>
    </div>
  )
}
export default Education