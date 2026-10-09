import def from "../assets/default.jpg"


function Achievementcard({title, values}) {
  return (
    <div className="flex flex-col bg-gray-100 shadow-lg border-1 border-gray-300 rounded-lg p-5 shadow-lg">
        <div className="grid grid-cols-3 gap-5">
          <div><img src={values.icon} alt="imgae" className="h-30 w-30 rounded-lg"/></div>
            <div className="col-span-2">
                <p className="font-bold text-gray-700">{title}</p>
                <p className="mt-3 col-span-2 font-medium text-gray-700 flex text-sm">{values.Description}</p>
            </div> 
        </div>
        <div className="flex-1"></div>
        <h1 className="mt-6 font-medium text-sm border-b-2 p-2 border-gray-300 flex flex-wrap justify-between">
            {
                (values["Team Name"]) && ( <>
                    <div className="text-gray-500">Team Name</div>
                    <div className="text-gray-700">{values["Team Name"]}</div>
                    </>
                )
            }
            {
                (values["My Handle"]) && ( <>
                    <div className="text-gray-500">My Handle</div>
                    <div className="text-gray-700">{values["My Handle"]}</div>
                    </>
                )
            }
        </h1>
        <div className="mt-3 flex flex-wrap gap-5">
        {
            Object.entries(values).map(([key, val]) => (
                (key !== "My Handle") && (key !== "icon") && (key !== "Team Name") && (key !== "Description") && (
                     <a href={val} className="text-sm text-blue-400 font-medium">
                        {key} ↗
                    </a>
                ) 
            ))
        }
        </div>

    </div>
  )
}
export default Achievementcard