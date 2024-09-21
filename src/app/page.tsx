import Image from "next/image";
import img1 from "/public/img2.png"
import cover from "/public/cover.jpg"
import Link from "next/link";

interface quoteProps {
  id:string;
  author:string;
  category:string;
  msg:string;
}

async function getData(){
  try{
    const res = await fetch("http://127.0.0.1:8000/api/quotes/");
    if(res.ok){
      const data = await res.json()
      return data

    }else{
      console.log('something went wrong')
    }

  }catch(error){
    console.log('error occur', error)
  }
}

const Home =  async () => {
   const quote:quoteProps[] = await getData();
   return (
     <div>
      <section className="pt-[5rem]" 
      style={{
        width:"100%",
        height:"100vh",
        backgroundImage: `url(${cover})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}>
        <h1 className="text-center font-bold ">Nigerian Love Pick Up Lines</h1>
       <div className="min-w-[50%]">
        <Image src={img1} className="w-full h-full" alt="image"/>
       </div>

      </section>
      <section className="grid grid-cols-1 min-h-[500px] justify-between sm:grid-cols-2 rounded-2xl md:grid-cols-3 lg:grid-cols-4 gap-6 py-16">
        {
          quote.map(quote =>(
            <div className="w-[80%] bg-pink-400 rounded-md min-h-[250px] p-2 flex justify-between flex-col">
          <p className="text-white">{quote.msg}</p>
            <Link href={`quotes/${quote.id}/`} className="bg-pink-200 p-2 rounded-md self-start">View Lines</Link>
        </div>
          ))
        }
      </section>
     </div>
   );
 }

 export default Home;
