import React from 'react'


const arrList = ["Home", "Reactjs", "Javascript", "redux", "webpack", "Live", "Pavan", "Cinema", "Telugu", "Movies", "VijayDevarakonda", "Editing", "jilla", "tamil", "sai", "model"];
function SuggestionList() { 
    return (
        <div className="w-[1250px]">
            <ul className="flex overflow-y-hidden w-10/12">{
                arrList.map((x)=> {
                    return <li key={x} className="px-3 py-1 m-2 bg-slate-200 rounded-lg">{x}</li>
                })
            }
            </ul>
        </div>
    )
}

export default SuggestionList
