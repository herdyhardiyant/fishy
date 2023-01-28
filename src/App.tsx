import ShopFishItem from "./components/ShopFishItem"


function App() {



  return (
    <div className="text-white w-full">
      {/* Navbar */}

      <div className="p-6 border-b-2 border-gray-400 flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Fishy</h1>
        <h1>Fish Collection</h1>
        <h1>Shop</h1>
        <div className="flex align-middle gap-4" >
          <h1 className="text-2xl hover:cursor-pointer">1 Coins</h1>
          <h1 className="text-2xl font-bold hover:cursor-pointer">Account</h1>
        </div>

      </div>

      {/* Navbar end */}

      {/* Shop List */}

      <ul className="grid grid-cols-8 pl-4 gap-8">

       <ShopFishItem     />
       <ShopFishItem     />
       <ShopFishItem     />

      </ul>

      {/* Shop List Ends */}




    </div>

  )
}

export default App
