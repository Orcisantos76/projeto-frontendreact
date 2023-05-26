/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


export default function Items({nome, valor, quantidade, imagem, id, removeItem}) {
    return (
        <div>
            <p>Nome: {nome}</p>
            <p>Quantidade: {quantidade}</p>
            <button onClick={()=>removeItem(id)}>Remover</button>
            <p>Valor R$ {valor.toFixed(2).replace(".",",")}</p>    
            {/* <img src={imagem} alt="" /> */}
            
        </div>
    )
}
