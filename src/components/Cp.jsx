import def from "../assets/default.jpg"
import { icon } from "../assets/content"

function Cp({Platform, values}) {
  return (
    <div className="bg-gray-100 shadow-lg border-1 border-gray-300 rounded-lg p-5 shadow-lg">
        <div className="flex flex-wrap gap-10">
          <div><img src={icon[Platform]} alt="imgae" className="h-10 rounded-lg"/></div> 
          <div className="font-bold text-gray-700 flex items-center">{Platform}</div>
        </div>
        <h1 className="mt-6 text-gray-700 font-semibold">
            {values.ratingType}
        </h1>
        <div className="mt-5">
          {
              Object.entries(values).map(([key, values]) => (
                (key !== "ratingType") && (key !== "profileLink") && (<div className="flex flex-wrap place-content-between pb-2 pt-2 border-b-1 border-gray-400 text-xs font-medium text-gray-500">
                  <p>{key}</p>
                  <p className="text-gray-900 font-semibold">{values}</p>
                </div>)
              ))
          }
        </div>
        <div className="mt-3">
          <a href={values.profileLink} className="text-sm text-blue-400 font-medium">
            Visit Profile ↗
          </a>
        </div>

    </div>
  )
}
export default Cp