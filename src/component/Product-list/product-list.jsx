import React from 'react';
import './product-list.style.scss';

const ProductCard = (props) => {

    console.log(props.data)

    const product = props.product;
    const product_title = props.product_title;

    //return main component
    return(
           <div className="container-fluid">
                <h3 className="mb-3 mt-3 hub_title">{product_title}</h3>
                <div className="row product_wrapper">
                   
                    {product.map((data, index) =>(

                   
                   
                    <div className="col-sm-6 col-md-4 col-lg-3 mt-5 mb-3">
                        <div className="card text-center product_card">
                            <div className="product_image">
                                <img src= {data.image} class="card-img-top" alt="Product Imag" />
                            </div>
                            
                            <div class="card-body product_body">
                                <h5 class="card-title">{data.name}</h5>
                                <h6 className="text-left"><b>Auther : </b>{data.author}</h6>
                                <p class="card-text text-left"><b>Description: </b> {data.description.substr(0, 50)}</p>
                                <p class="text-left"><b>Key: </b> {data.key}</p>
                                {/* <a href="#/" class="btn btn-primary">{data.key}</a> */}
                            </div>
                            <div className="card-footer text-center">
                                <p>HUB : {data.hub}</p>
                            </div>

                        </div>
                    </div>
                  


                  ))} 

                </div>
            </div>
    )
}

export default ProductCard;