import def from "../assets/default.jpg"
import { icon } from "../assets/content"

function Projectcard({title, values}) {
  return (
    <div className="bg-gray-100 shadow-lg border-1 border-gray-300 rounded-lg p-5">
        <div className="grid lg:grid-cols-4">
            
            <div className="pl-5 pt-5 pr-5 lg:border-r-2 lg:border-gray-400">
                <div className="pb-4 flex justify-center">
                    <img src={icon[title]} className="h-40 w-50 rounded-lg"/>
                </div>
                <h1 className="font-semibold text-gray-700 text-3xl mt-5">{title}</h1>
            </div>

            <div className="pl-10 font-medium text-gray-700 text-wrap lg:col-span-3 pt-5">
                {values.description}
            </div>
        </div>

        <div className="flex flex-wrap mt-5 gap-10 text-blue-500 justify-end">
            <a href={values["Github Link"]} target="_blank">Github Link ↗</a>
            {
                (values["Live Link"]) && (<a href={values["Live Link"]} target="_blank">Live Link ↗</a>)
            }
        </div>

    </div>
  )
}
export default Projectcard