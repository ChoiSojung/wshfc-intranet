export default function Card(){
    return (
        <div className="flex flex-wrap">
            <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
                <div className="flex items-center w-48 h-20 bg-blue-900">
                    <h1 className="fas fa-bezier-curve fa-3x mx-auto text-white">History</h1>
                </div>
                <ul className="p-2 text-sm text-gray-700 items-center">
                    <li className="py-1">Mission, Values, Vision</li>
                    <li className="py-1">Commission Enabling Legislation</li>
                    <li className="py-1">20 year report</li>
                </ul>
                
            </div>
        </div>
    )
}