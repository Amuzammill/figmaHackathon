import Image from "next/image"


const Ceremics = () => {
    return (
         
      <div className="p-10">
        {/* Heading */}
        <div>
          <h1 className="text-start py-10 mt-14 text-3xl p-10">New Ceramics</h1>
        </div>
  
        {/* Images */}
        <div className="flex gap-8 p-10">
          <Image
            src="/images/parent.png"
            alt="not found"
            width={305}
            height={462} />
          
          <Image
            src="/images/parent1.png"
            alt="not found"
            width={305}
            height={462}
          />
          <Image
            src="/images/parent2.png"
            alt="not found"
            width={305}
            height={462}
          />
          <Image
            src="/images/parent3.png"
            alt="not found"
            width={305}
            height={462}
          />
        </div>

    


 {/* Button */}
        <div className="flex justify-center mt-4">
          <button className="bg-[#F9F9F9] px-6 py-3 text-lg rounded hover:bg-gray-200">
            View Collection
          </button>
        </div>

       

        <div className="flex gap-8 p-10">
            <Image src="/images/parent4.png" alt="not found" 
            width={630} height={462}/>
            <Image src="/images/parent5.png" alt="not found" 
            width={305} height={462}/>
            <Image src="/images/parent6.png" alt="not found" 
            width={305} height={462}/>
        </div>

     {/* Button */}
    <div className="flex justify-center mt-4">
    <button className="bg-[#F9F9F9] px-6 py-3 text-lg rounded hover:bg-gray-200">
        View Collection
     </button>
      </div>
    
    <div>
    
    </div>



</div>
    );
  };
  
  export default Ceremics;
