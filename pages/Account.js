
import Header from './components/Header'

export default function Account({id}) {

    
    return (

        <>
        <Header/>
        <div className="flex flex-col items-center justify-center h-full" >
        
            <h1 className = "mt-64 text-h1s sm:text-h1 text-text-black ">Welcome back, {id}</h1>
            <button className= "px-32 py-16 mx-auto mt-64 font-bold placeholder-white rounded-full w-fit bg-gradient-to-r from-primary to-secondary text-text-white text-h6" onClick={() => tryLogin(loginData)}>
            Edit Details
        </button>
        <button className= "px-32 py-16 mx-auto mt-64 font-bold placeholder-white rounded-full w-fit bg-gradient-to-r from-primary to-secondary text-text-white text-h6" onClick={() => tryLogin(loginData)}>
            View Basket
        </button>
        </div >
        </>
    )
}

export async function getServerSideProps(context) {

    console.log(context.params)

    return {
      props: {
        id: context.params.id,
        email: context.params.email,
        firstname:context.params.firstname,
        surname: context.params.surname,      }
    }

    let res = await fetch("http://localhost:3000/api/fetchProducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
   let products = await res.json();
//    console.log(products)
    return {
      props: { products },
    };
  }