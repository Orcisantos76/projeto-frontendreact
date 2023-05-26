/* eslint-disable react/prop-types */

import { FilterStyle } from './style'

export default function Filter({
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter}) {
        
    function onChangeMinFilter(event){ 
        if(event.target.value < 0){
            alert("Não digite um valor menor que 0")
        }else{
            setMinFilter(event.target.value)}
        }
    function onChangeMaxFilter(event){
        if(event.target.value < 0){
            alert('Não digite um valor menor que 0')
        }else{
            setMaxFilter(event.target.value)
        }
    }
    return (
        <>
            <FilterStyle>
                <h2>Filter</h2>
                <div>
                    <label>Valor minímo</label>
                    <input 
                    type='number'
                    value={minFilter} 
                    onChange={onChangeMinFilter} 
                    />
                </div>
                <div>
                    <label>Valor máximo</label>
                    <input
                    type='number'
                    value={maxFilter}
                    onChange={onChangeMaxFilter}
                    />
                </div>
                <div>
                    <label>Busca por nome:</label>
                    <input
                    type='text'
                    value={searchFilter}
                    onChange={(e)=> setSearchFilter(e.target.value)}
                    />
                </div>
                
            </FilterStyle>
            <></>
        </>
    
    )
}
