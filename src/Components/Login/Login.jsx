import React from 'react'
import { useNavigate } from 'react-router-dom'




function Login() {

  const nav =useNavigate()

  const goSignup =()=>{
    nav("/Signup")
  }

  return (
    <>

<div className='w-full flex p-4 md:flex-row items-center justify-center   flex-col'>




<div className=' w-full justify-end flex  md:w-1/2'>
<img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/page/login-1.png" className='h-96' alt="" />
</div>





<div className=' w-full p-14 md:w-1/2'>

<h1 className='text-3xl font-bold'>Login</h1>
<p className='text-xs mt-2 mb-5 cursor-pointer text-gray-400'>Don't have an account? <span onClick={goSignup}  className='text-green-500'> Create here</span></p>



{/* <!--Email input--> */}
<div className="relative mb-3">
  <input
    type="email"
    className="peer m-0 block h-[58px] w-96 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
    id="floatingPassword"
    placeholder="Password" />
  <label
    for="floatingPassword"
    className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Username or Email*</label>
</div>

{/* <!--Password input--> */}
<div className="relative mb-3">
  <input
    type="password"
    className="peer m-0 block h-[58px] w-96 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
    id="floatingPassword"
    placeholder="Password" />
  <label
    for="floatingPassword"
    className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Password*</label>
</div>


{/* <!--Securityinput--> */}
<div className="relative mb-3">
  <input
    type="password"
    className="peer m-0 block h-[58px] w-96 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
    id="floatingPassword"
    placeholder="Password" />
  <label
    for="floatingPassword"
    className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Security Code*</label>
</div>




{/* Check Box */}

<div class="flex mt-5 items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "/>
    <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
</div>


<button className='mt-10 bg-gray-800 p-3 w-28 text-sm rounded-md text-white hover:bg-black duration-300  hover:ml-2'>Login</button>





    </div>




    </div>

      
    </>
  )
}

export default Login
