export function SkeletonCard() {
    return (
      <div className="border-2 border-black rounded-2xl mb-3 p-[20px] w-[100%] max-w-[420px] sm:w-[49%] lg:w-[32%] xl:w-[24%] animate-pulse">
        <div className="rounded-[100%] w-[240px] h-[240px] mx-auto bg-gray-300"></div>
        <div className="h-[30px] mt-2 bg-gray-300 rounded w-3/4 mx-auto"></div>
        <div className="h-[18px] mt-2 bg-gray-300 rounded w-full"></div>
        <div className="h-[18px] mt-1 bg-gray-300 rounded w-5/6 mx-auto"></div>
        <div className="h-[18px] mt-1 bg-gray-300 rounded w-3/4 mx-auto"></div>
        <div className="flex justify-between mt-6">
          <div className="h-[30px] bg-gray-300 rounded w-1/4"></div>
          <div className="h-[30px] bg-gray-300 rounded w-1/3"></div>
        </div>
      </div>
    );
  }
  
  
