import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./Wrapper"





export const ProductCreate =() =>{
const [name, setName]= useState('');
const [price, setPrice]= useState('');
const [quantity, setQuantity]= useState('');
const navigate = useNavigate();

const submit =async e =>{

    e.preventDefault();
    await fetch('http://127.0.0.1:8000/products/',{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            name,
            price,
            quantity 
        })
    })
        await navigate(-1);
}

return <Wrapper>
    <form className="mt-3" onSubmit={submit}>
        <div className="form-floating pb-3">
        <input className="from-control" placeholder="Name" onChange={e=> setName(e.target.value)}/>
        {/* <label>Name</label> */}
        
        </div>

        <div className="form-floating pb-3">
        <input type= "number"className="from-control" placeholder="Price" onChange={e=> setPrice(e.target.value)}/>
        {/* <label  >Price</label> */}

        </div>

        <div className="form-floating pb-3">
        <input className="from-control" placeholder="Quantity" onChange={e=> setQuantity(e.target.value)}/>
        {/* <label>Quantity</label> */}
        
        </div>
        <button className="w-30 btn btn-m btn-primary" type="submit">Submit</button>
    </form>
</Wrapper>
}