import React from "react"

const Card = ({item}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://source.unsplash.com/random" alt="Mountain" />
        <div className="px-6 py-4">
            <div className="flex justify-between">
          <div className="font-bold text-xl mb-2">{item.name}</div>
          <div className="font-bold text-lg mb-2">{item.price}</div>
          </div>
          <p className="text-gray-700 text-base">
          {item.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
    </div>
    )
}

export default Card;