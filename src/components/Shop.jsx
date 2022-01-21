import React from 'react'

export default function Shop(props) {
    const {cartItems, onAdd} = props;
    console.log(cartItems, onAdd)
    return (
        <aside>
            {cartItems.length === 0 && <div>Carrinho está vazio</div>}
            {cartItems.map((item, index)=>(
                <div key={index}>
                    <h1>{item.name}</h1>
                    <h1>{item.fat}</h1>
                    <h1>{item.protein}</h1>
                    {/* <p>{onAdd}</p> */}
                    {console.log(item.id)}

                </div>
            ))}
        </aside>
    )
}
