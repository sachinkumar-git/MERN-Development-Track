import Product from "./Product";

function ProductTab() {
    let options = ["hi-tecch", "durable", "fast" ];
    return (
        <>
            <Product title = "phone" price = {30000} features={options} />
            <Product title = "laptop" price = {40000} />
            <Product title = "pen" price = {1}/>
        </>
    );
}


export default ProductTab;