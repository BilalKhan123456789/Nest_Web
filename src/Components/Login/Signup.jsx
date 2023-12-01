import React from 'react'
import { useNavigate } from 'react-router-dom';




function Signup() {

const nav  =useNavigate()


const goLogin=()=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });
  nav("/Login")
}




  return (
    <>
      
<div className='w-full flex p-4 md:flex-row items-center justify-center   flex-col'>

<div className=' w-full p-14 md:w-1/2'>

<h1 className='text-3xl font-bold'>Create an Account</h1>
<p className='text-xs mt-2 cursor-pointer text-gray-400'>Already have an account? <span onClick={goLogin} className='text-green-500'>Login</span></p>


<div className="relative mt-5 mb-3">

    {/* <!--Username input--> */}

  <input
    type="text"
    className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
    id="floatingInput"
    placeholder="name@example.com" />
  <label
    for="floatingInput"
    className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Username</label>
</div>

{/* <!--Email input--> */}
<div className="relative mb-3">
  <input
    type="email"
    className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
    id="floatingPassword"
    placeholder="Password" />
  <label
    for="floatingPassword"
    className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Email address</label>
</div>

{/* <!--Password input--> */}
<div className="relative mb-3">
  <input
    type="email"
    className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
    id="floatingPassword"
    placeholder="Password" />
  <label
    for="floatingPassword"
    className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Password</label>
</div>


{/* <!--Confirm Password input--> */}
<div className="relative mb-3">
  <input
    type="email"
    className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
    id="floatingPassword"
    placeholder="Password" />
  <label
    for="floatingPassword"
    className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Confirm Password</label>
</div>



{/* <!--Security input--> */}
<div className="relative mb-3">
  <input
    type="email"
    className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
    id="floatingPassword"
    placeholder="Password" />
  <label
    for="floatingPassword"
    className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Security Code*</label>
</div>



{/* Radio Button */}

<div className="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4  outline-none "/>
    <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I am a customer</label>
</div>
<div className="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4  outline-none  "/>
    <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I am a vendor</label>
</div>




{/* Check Box */}

<div class="flex mt-5 items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "/>
    <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-green-600 hover:underline">terms and conditions</a>.</label>
</div>


<button className='mt-10 bg-green-600 p-3 text-sm rounded-md text-white hover:bg-green-700 duration-300  hover:ml-2'>Subscribe & Register</button>



<p className='text-xs  text-gray-500 mt-6'>Note:Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>


    </div>


    <div className='] w-full h-1/2 border p-10 md:w-[35%]'>



<button className='flex text-white bg-blue-600 p-3 my-5 hover:ml-2 rounded-md hover:bg-blue-700 duration-300 items-center gap-3 text-xl'>
    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/logo-facebook.svg" alt="" />
    Continue with Facebook</button>



    <button className='flex text-gray-500  p-3 my-5  rounded-md hover:ml-2 duration-300   items-center gap-3 text-xl'>
    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/logo-google.svg" alt="" />
    Continue with Google</button>



    <button className='flex text-white bg-black p-3 my-5  rounded-md hover:ml-2  duration-300  items-center gap-3 text-xl'>
    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/logo-apple.svg" alt="" />
    Continue with Facebook</button>




    </div>


</div>




    </>
  )
}

export default Signup
