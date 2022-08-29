import { useState } from "react";
import data from "./Data";

let Products = () => {
    let [product, setProduct] = useState(data);
    console.log(product);
    return (
        <div style={{padding:15}}>
            <div className="cen"><button type="button" class="btn btn-warning">Add Product</button></div>
            <div><h1 className="h">List of Products</h1></div>
            <table className="table">
                <tr>
                    <th scope="col" style={{width:"3%"}} className="cen">#ID</th>
    
                    <th scope="col" style={{width:"10%"}} className="cen">Title</th>
                    <th scope="col" style={{width:"35%"}} className="cen">Description</th>
                    <th scope="col" style={{width:"10%"}}  >Price</th>
                    <th scope="col" >Category</th>
                    <th scope="col" >Image</th>
                    <th scope="col" >Action</th>

                </tr>


               {product.map((value,index)=>{

                return(
                    <tr>
                    <td scope="col">{value.id}</td>
                    <td scope="col">{value.title}</td>
                    <td scope="col">{value.description}</td>
                    <td scope="col"><span class="badge bg-primary">{value.price}</span></td>
                    <td scope="col">{value.category}</td>
                    <td scope="col"><img src={value.image} className="A" /></td>
                    <td scope="col"><button type="button" class="btn btn-primary back">Delete</button>
                    <button type="button" class="btn btn-success mad bac">Edit</button>
                    </td>

                </tr>


                )
               })}



                
            </table>



        </div>
    )
}
export default Products;