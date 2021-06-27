import React from 'react'

export default function Products() {
    return (
        <div className="container mx-auto pb-24">
          <h1 className="text-lg font-bold my-8">Products</h1>
          <div  className="grid grid-cols-4 my-8 gap-24 mx-8 " >
              <div >
                  <img style={{height:160 }} src="/images/i2.png" alt="ice" />
                 < div className="text-center">
                     <h2 className="text-lg font-bold py-2">Chocolate</h2>
                  <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Small</span>
                  </div>
                  <div className="flex justify-between items-center   mt-4 ">
                     <span className="text-lg">₹50</span>
                      <button className="py-1 px-4 rounded-full font-bold bg-pink-300">ADD</button>
                  </div>
              </div>

              <div >
                  <img style={{height:160,width:100,marginLeft:70 }} src="/images/i5.png" alt="ice" />
                 < div className="text-center">
                     <h2 className="text-lg font-bold py-2">Triple Scoop</h2>
                  <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Medium</span>
                  </div>
                  <div className="flex justify-between items-center   mt-4 ">
                     <span className="text-lg">₹140</span>
                      <button className="py-1 px-4 rounded-full font-bold bg-pink-300">ADD</button>
                  </div>
              </div>
              <div>
                  <img style={{height:160,marginLeft:50 }} src="/images/i1.png" alt="ice" />
                 < div className="text-center">
                     <h2 className="text-lg font-bold py-2">Brownie Cup</h2>
                  <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Medium</span>
                  </div>
                  <div className="flex justify-between items-center   mt-4 ">
                     <span className="text-lg">₹120</span>
                      <button className="py-1 px-4 rounded-full font-bold bg-pink-300">ADD</button>
                  </div>
              </div>

              <div>
                  <img style={{height:160 ,marginLeft:30}} src="/images/i4.png" alt="ice" />
                 < div className="text-center">
                     <h2 className="text-lg font-bold py-2">Choco Cup</h2>
                  <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Small</span>
                  </div>
                  <div className="flex justify-between items-center   mt-4 ">
                     <span className="text-lg">₹150</span>
                      <button className="py-1 px-4 rounded-full font-bold bg-pink-300">ADD</button>
                  </div>
              </div>

          </div>
        </div>
    )
}

