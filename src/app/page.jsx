import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
   <div>
      <Navbar />
      {/* Div with background image */}
      <div  
    
        className=" h-screen bg-cover bg-center bg-[url(/home-background.jpg)]"
       
      >
        {/* Content inside the div */}
        <div className="text-white p-8 ">
          <h1 className="text-4xl font-bold mt-40">Welcome to Supraja Technologies</h1>
          <p className="mt-4">We provide tech solutions for your business needs.</p>
        </div>
      </div>
    </div>
  );
}
