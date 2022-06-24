import React from 'react'
import Item_element from './Item_element/Item_element';
import anh1 from '../../images/products1.jpg'
import anh2 from '../../images/products2.jpg'
import anh3 from '../../images/products3.jpg'
import anh4 from '../../images/products4.jpg'
import anh5 from '../../images/products5.jpg'
import anh6 from '../../images/products6.jpg'
import './Item.css'

const data_products = [
  {
      id: 1,
      name: 'Heydi',
      img: anh1,
      price: 30
  }, {
      id: 2,
      name: 'Fuchsia',
      img: anh2,
      price: 35
  }, {
      id: 3,
      name: 'Helen',
      img: anh3,
      price: 37
  }, {
      id: 4,
      name: 'Simone',
      img: anh4,
      price: 43
  }, {
      id: 5,
      name: 'Rocha',
      img: anh5,
      price: 26
  }, {
      id: 6,
      name: 'Fabricant',
      img: anh6,
      price: 39
  }
]

function Item_product() { 
  return (
    <div className='item'>
      {data_products.map(product => 
        <Item_element key={product.id} data={product} />
      )}
    </div>
  )
}


export default Item_product