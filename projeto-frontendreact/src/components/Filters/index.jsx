/* eslint-disable react/prop-types */

import { FilterStyle } from './style'








export default function Filter({minFilter,setMinFilter,maxFilter,setMaxFilter,searchFilter,setSearchFilter}) {
    
    console.log(minFilter,maxFilter,searchFilter)
    return (
        <>
            <FilterStyle>
                <h2>Filter</h2>
                <div>
                    <label>Valor minímo</label>
                    <input 
                    value={minFilter} 
                    onChange={(event)=> setMinFilter(event.target.value)}
                    // onChange={console.log("mudei")}
                    />
                </div>
                <div>
                    <label>Valor máximo</label>
                    <input
                    value={maxFilter}
                    onChange={(event)=> setMaxFilter(event.target.value)}
                    />
                </div>
                <div>
                    <label>Busca por nome:</label>
                    <input
                    value={searchFilter}
                    onChange={(e)=> setSearchFilter(e.target.value)}
                    />
                </div>
                
            </FilterStyle>
            <></>
        </>
    
    )
}
