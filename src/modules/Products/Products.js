import { useState } from "react";
import data from "./Data";

let Products = () => {
    let [product, setProduct] = useState(data);
    console.log(product);
    return (
        <div style={{padding:15}}>
{/* //Model */}
{/* <!-- Button trigger modal --> */}
<div className="cen"><button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Product</button></div>



{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>




{/* End model */}
            
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
                console.log(value)

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