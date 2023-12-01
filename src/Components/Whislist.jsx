
import React from 'react'

function Whislist() {
  return (
    <>
      
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-5xl text-3xl text-left font-bold title-font mb-2 text-gray-900">Your Wishlist</h1>
      <p class="lg:w-2/3  text-left leading-relaxed text-base">There are 5 products in this list</p>
    </div>
    <div class="sm:w-[90%] w-full mx-auto overflow-auto">








        
      <table class="  w-full text-left ">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">	Product</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Stock Status	</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Action</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Remove</th>


                      </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3"><img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" className='h-24 w-24' alt="" /></td>

            <td class="px-4 py-3 text-green-600 font-bold  text-4xl">$2.51</td>
            <td class="px-4 py-3  text-green-600 font-bold ">In Stock</td>
            <td class="px-4 py-3  text-green-600 font-bold ">Add to Cart</td>
            <td class="w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
          <tr>
            <td class="px-4 py-3"><img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg" className='h-24 w-24' alt="" /></td>
            <td class="px-4 py-3 text-green-600 font-bold  text-4xl">	$3.2</td>
            <td class="px-4 py-3  text-green-600 font-bold ">In Stock</td>
            <td class="px-4 py-3  text-green-600 font-bold ">Add to Cart</td>
            <td class="w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
          <tr>
            <td class="px-4 py-3"><img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg" className='h-24 w-24' alt="" /></td>
            <td class="px-4 py-3 text-green-600 font-bold  text-4xl">	$2.43</td>
            <td class="px-4 py-3  text-green-600 font-bold ">In Stock</td>
            <td class="px-4 py-3  text-green-600 font-bold ">Add to Cart</td>
            <td class="w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
          <tr>
            <td class="px-4 py-3"><img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg" className='h-24 w-24' alt="" /></td>
            <td class="px-4 py-3 text-green-600 font-bold  text-4xl">	$3.21</td>
            <td class="px-4 py-3  text-green-600 font-bold ">In Stock</td>
            <td class="px-4 py-3  text-green-600 font-bold ">Add to Cart</td>
            <td class="w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
        </tbody>
      </table>



    </div>
    
  </div>
</section>

    </>
  )
}

export default Whislist
