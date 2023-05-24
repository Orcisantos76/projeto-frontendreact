/* eslint-disable react/prop-types */

import { FilterStyle } from './style'








export default function Filter({minFilter,setMinFilter,maxFilter,setMaxFilter,searchFilter,setSearchFilter}) {
    console.log("entrei no Filter",minFilter)
    console.log(minFilter)
    return (
        <>
            <FilterStyle>
                <h2>Filter</h2>
                <div>
                    <label>Valor minímo</label>
                    <input></input>
                </div>
                <div>
                    <label>Valor máximo</label>
                    <input></input>
                </div>
                <div>
                    <label>Busca por nome:</label>
                    <input></input>
                </div>
                
            </FilterStyle>
            <></>
        </>
    
    )
}
