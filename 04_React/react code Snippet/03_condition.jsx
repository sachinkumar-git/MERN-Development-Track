// import "./Product.css";

// function Product ({title, price, features}){
//     if (price > 30000){
//         return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             <p>Discount of 5%</p>
         
//         </div>
//     );
//     } else {
//         return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
         
//         </div>
//     );
//     }
    
// }


// export default Product;

// second method 
// import "./Product.css";

// function Product ({title, price, features}){
//     let isDiscount = price > 30000 ? "Discount of 5%" : "";
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             <p>{isDiscount}</p>
         
//         </div>
//     )
// }


// export default Product;


// best way 

import "./Product.css";

function Product ({title, price, features}){

    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            { price > 30000 ? <p>"Discount of 5%"</p>  : null}
         
        </div>
    )
}


export default Product;