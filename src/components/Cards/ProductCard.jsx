

export default function ProductCard({item}) {
  return (
    <div className=" mx-auto cursor-pointer">
  <div className="bg-gray-100  rounded-md  ">
    <img
      src={item?.image}
      alt="ASICS Superblast 2"
      className="w-full h-auto object-contain hover:scale-105 duration-400 
      transition-transform"
    />
    
  </div>
  <div className="mt-4">
      <h3 className="text-sm font-semibold text-gray-900">{item?.name}</h3>
      <p className="text-sm text-gray-600">৳ {item?.price}</p>
    </div>
</div>

  )
}
