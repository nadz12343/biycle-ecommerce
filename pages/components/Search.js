
import { use, useState } from "react"
import { useRouter } from "next/router"
export default function Search({dirLevel}){

    const router = useRouter()
    async function trySearch(){

        fetch(`/api/searchProduct/${currentSearch}`, {
            method: "GET",

        }).then(res => res.json()).then(data => {
            const ids = data.map(p => p._id)
            router.push({pathname: "/components/SearchedProducts", query: {
               ids: ids
            }})
        })
    }

    console.log(dirLevel)
    const [currentSearch, setCurrentSearch] = useState("")

    return (
        <div className="flex items-center w-full border-2 border-gray-400 rounded-md h-fit "  >
            <input className="w-full p-2 h-fit" 
            type="text" placeholder="search by brand, category or type" name = "currentSearch"
            value={currentSearch} onChange = {(event) => setCurrentSearch(event.target.value)}>
            </input>
            <button className="py-8 ml-auto" onClick={trySearch}>
                <img className = 'w-8 h-8 mx-16 md:w-32 md:h-32' src={`${dirLevel ? dirLevel : "."}/assets/icons/search.png`} alt=""/>
            </button>
        </div>
    )
}