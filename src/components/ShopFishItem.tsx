import React from "react";

function ShopFishItem({ }) {
  return (
    <li className="flex flex-col items-center gap-4 text-center justify-between border-2  pb-4 border-gray-400 rounded-lg">
      <div className="flex justify-center items-center h-40 w-full bg-slate-500">
        Image
      </div>
      <h1>Title</h1>
      <button className="bg-slate-700 w-1/2">1 Coins</button>
    </li>
  );
}

export default ShopFishItem;