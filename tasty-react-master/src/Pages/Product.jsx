import React, { useContext } from 'react'
import {Context} from '../Context/Context'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Bredcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';


const Product = () => { 
  const {all_product} = useContext(Context);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));

  return (
    <div>
      
    <Breadcrum product={product}/>
    <ProductDisplay product= {product}/>
    <DescriptionBox />
    <RelatedProduct />
    </div>
  )
}

export default Product