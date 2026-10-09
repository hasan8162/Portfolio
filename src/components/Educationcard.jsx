import def from "../assets/default.jpg"

function Educationcard({values}) {
  return (
    <div className="bg-gray-100 shadow-lg border-1 border-gray-300 rounded-lg p-2">
        <div className="lg:flex">
            
            <div className="pl-5 pt-5 pr-5 border-gray-400 pb-4">
                <img src={values.icon} className="h-30 w-30 rounded-lg"/>
            </div>

            <div className="lg:pl-10 pl-5 font-medium text-gray-700 text-wrap col-span-3 pt-5 pb-4">
                <h1 className="font-semibold lg:text-2xl text-xl">{values.institiution}</h1>
                <h2 className="font-medium mt-2 lg:text-base text-sm">{values.degree}</h2>
                {
                    (values.CGPA) && (<h3 className="mt-3">CGPA: {values.CGPA}</h3>)
                }
                {
                    (values.Result) && (<h3 className="mt-3">Result: {values.Result}</h3>)
                }
                <div className="mt-2 text-xs text-gray-500 flex flex-wrap gap-5">
                    <p>{values.start} - {values.end}</p>
                    <p>🌐︎ {values.Location}</p>
                </div>
            </div>
        </div>


    </div>
  )
}
export default Educationcard