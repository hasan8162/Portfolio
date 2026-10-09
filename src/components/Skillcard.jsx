function Skillcard({title, values}) {
  return (
    <div className="bg-gray-100 shadow-lg border-1 border-gray-300 rounded-lg p-5">
       <h1 className="font-semibold text-gray-500 text-sm">{title}</h1>
       <div className="mt-5 flex flex-wrap gap-3">
        {
            values.map((skill) => (
                <div className="font-medium text-gray-400 shadow-sm p-1 pl-3 pr-3 text-xs border-gray-300 rounded-md bg-gray-50">{skill}</div>
            ))
        }
       </div>
    </div>
  )
}
export default Skillcard