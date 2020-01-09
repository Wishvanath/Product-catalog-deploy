import React, { Component } from 'react'
import ProductCard from './component/Product-list/product-list';
import './component/Product-list/product-list.style.scss';
export default class App extends Component {
  // constructor def
  constructor(){
    super();
    this.state={
      //state variable
      general_product :[],
      rest_product : [],
      all_product :[]
    }
  }

  // login to categories the general product and other product
  productCategoryMothod(product_data){
    var modified_data = [];
    // console.log(product_data);
    for(let [key, value] of Object.entries(product_data)){
      modified_data.push(value);
      // console.log(modified_data);
    }
    var filter_product = this.findProduct(modified_data, { hub : 'general'});
    this.setState({general_product: filter_product.general});
    this.setState({rest_product: filter_product.others});
  }

  findProduct(data, criteria){
    var general = [];
    var others = [];
    data.filter(function(obj){
      Object.keys(criteria).every(function(c){
        if(obj[c] === criteria[c]){
          general.push(obj);
        }else{
          others.push(obj)
        }
        return null
      })
      return null
    })
    return ({general:general,others:others})
  }



// component did mount block
async componentDidMount(){
  await fetch('https://gist.githubusercontent.com/bharadwajturlapati/4e81154dbcc7d6928921b96057fc5b4a/raw/d31da32d6e5c1dd2a11968d7e94d3c60dfd50fcb/products.json')
    .then(response => response.json())
    .then(data => this.setState({all_product: data}))


    // function call
    this.productCategoryMothod(this.state.all_product)

}









// render main component
  render() {
    return (
      <div>
       
       <div className="container">
          <div className="row justify-content-center ">
              <h1 className="mt-5 mb-5 product_title">Product Catalog</h1>
          </div>
        </div>

        {/* <!-- Nav pills --> */}
        <ul class="nav nav-pills justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="pill" href="#general">General Product</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href="#other">Other Product</a>
            </li>
        </ul>

        {/* <!-- Tab panes --> */}
        <div class="tab-content">
          <div class="tab-pane container active" id="general">
              <ProductCard product = {this.state.general_product} product_title ={"General Product"}/>
          </div>
          <div class="tab-pane container fade" id="other">
              <ProductCard product = {this.state.rest_product} product_title = {"Other Product"}/>
          </div>
        </div>

        
      </div>
    )
  }
}
