import { useState } from "react";
import "../css/cart.css"

function Cart(){
    const [price, setPrice] = useState({paper:10, metal:20, plastic:15})

    const [quantity, setQuantity] = useState({paper:15, metal:10, plastic:5})
    console.log(quantity)
    
    const paperPrice   = price.paper*quantity.paper;
    const plasticPrice = price.plastic*quantity.plastic;
    const metalPrice   = price.metal*quantity.metal;
    const sum = paperPrice + plasticPrice + metalPrice;
   
    const onChangeHandler = (e, material) => {
        if (e.target.value >= 0){
            setQuantity({...quantity, [material]:Number(e.target.value)})
        }
    }


    return(
        <section id="cart">
            <form>
            <input className="form-control" />
            </form>
            
            <div className="container py-5 table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Material</th>
                            <th scope="col">Quntity</th>
                            <th scope="col">Price Per KG</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                        <tr>
                            <td>Paper</td>
                            <td>
                                <div className="input-group ">
                                    <button 
                                        className="btn btn-outline-secondary" 
                                        type="button" 
                                        id="button-addon1"
                                        onClick={()=> quantity.paper > 0 && setQuantity({...quantity, paper:quantity.paper-1})}
                                    >
                                        -
                                    </button>
                                    <input 
                                        type="number" 
                                        value={quantity.paper}
                                        onChange={(e)=>onChangeHandler(e, "paper")}
                                        className="border px-2 text-center"  
                                        placeholder="" 
                                        aria-label="Example text with button addon" 
                                        aria-describedby="button-addon1" 
                                    />
                                    <button 
                                        className="btn btn-outline-secondary" 
                                        type="button" 
                                        id="button-addon2"
                                        onClick={()=> setQuantity({...quantity, paper:quantity.paper+1})}
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td>
                                <input 
                                        className="mx-2" 
                                        value={price.paper}
                                        disabled
                                />
                                <span>LE</span>    
                            </td>
                            <td>
                                <input 
                                        className="mx-2" 
                                        value={paperPrice}
                                        disabled
                                />
                                <span>LE</span>    
                            </td>
                        </tr>
                        <tr>
                            <td>Metal</td>
                            <td>
                            <div className="input-group ">
                                    <button 
                                        className="btn btn-outline-secondary" 
                                        type="button" 
                                        id="button-addon1"
                                        onClick={()=> quantity.paper > 0 && setQuantity({...quantity, metal:quantity.metal-1})}
                                    >
                                        -
                                    </button>
                                    <input 
                                        type="number" 
                                        value={quantity.metal}
                                        onChange={(e)=>onChangeHandler(e, "metal")}
                                        className="border px-2 text-center"  
                                        placeholder="" 
                                        aria-label="Example text with button addon" 
                                        aria-describedby="button-addon1" 
                                    />
                                    <button 
                                        className="btn btn-outline-secondary" 
                                        type="button" 
                                        id="button-addon2"
                                        onClick={()=> setQuantity({...quantity, metal:quantity.metal+1})}
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td>
                                <input 
                                            className="mx-2" 
                                            value={price.metal}
                                            disabled
                                    />
                                <span>LE</span>    
                            </td>
                            <td>
                                <input 
                                            className="mx-2" 
                                            value={metalPrice}
                                            disabled
                                    />
                                <span>LE</span>    
                            </td>
                        </tr>
                        <tr>
                            <td>Plastic</td>
                            <td>
                                <div className="input-group ">
                                    <button 
                                        className="btn btn-outline-secondary" 
                                        type="button" 
                                        id="button-addon1"
                                        onClick={()=> quantity.paper > 0 && setQuantity({...quantity, plastic:quantity.plastic-1})}
                                    >
                                        -
                                    </button>
                                    <input 
                                        type="number" 
                                        value={quantity.plastic}
                                        onChange={(e)=>onChangeHandler(e, "plastic")}
                                        className="border px-2 text-center"  
                                        placeholder="" 
                                        aria-label="Example text with button addon" 
                                        aria-describedby="button-addon1" 
                                    />
                                    <button 
                                        className="btn btn-outline-secondary" 
                                        type="button" 
                                        id="button-addon2"
                                        onClick={()=> setQuantity({...quantity, plastic:quantity.plastic+1})}
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td>
                                <input 
                                    className="mx-2" 
                                    value={price.plastic}
                                    disabled
                                />
                                <span>LE</span>    
                            </td>
                            <td>
                                <input 
                                    className="mx-2" 
                                    value={plasticPrice}
                                    disabled
                                />
                                <span>LE</span>    
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>
                                Total
                            </td>
                            <td>
                                <input 
                                    className="mx-2" 
                                    value={sum}
                                    disabled
                                />
                                <span>LE</span>    
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    )
}

export default Cart;