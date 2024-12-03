"use client"
import { useState } from "react";

const LoginForm1 = () => {

   const [form_show, setform_show] = useState("register");

   const image_url = "/login-forms/gradient-galaxy-background_23-2150810638.jpg"
   return (
      <div className=" container mx-auto py-10 my-10 flex justify-center items-center ">
         <div
            style={{ backgroundImage: "url(" + image_url + ")" }}
            className=" relative w-[25rem] h-[30rem] shadow-[0px_5px_8px_5px_#00000033] rounded-3xl overflow-hidden flex flex-col gap-8  "
         >
            <form onClick={() => {
               setform_show("register")
            }}
               className={`bg-transparent w-full h-full z-20 flex justify-center items-start py-12 ${form_show == "register" ? " " : "cursor-pointer"}`}>
               <div className=" flex flex-col gap-6 w-full px-8 ">
                  <h2 className=" text-xl text-white font-bold text-center mb-8">ثبت نام در سایت</h2>
                  <input
                     type="text"
                     className=" bg-white p-2 rounded-md outline-none"
                     placeholder="نام کاربری"
                  />
                  <input
                     type="text"
                     className=" bg-white p-2 rounded-md outline-none"
                     placeholder="رمز عبور"
                  />
                  <button className=" bg-white p-3 rounded-md font-bold mt-4">ثبت نام</button>
               </div>
            </form>
            <form
               onClick={() => {
                  setform_show("login")
               }}
               className={` absolute ${form_show == "register" ? "top-[80%] cursor-pointer" : "top-[20%]"} transition-all duration-500 bg-white text-black rounded-t-[7rem] w-full h-full z-30 flex justify-center items-start py-12`}>
               <div className=" flex flex-col gap-6 w-full px-8 ">
                  <h2 className=" text-xl  font-bold text-center mb-8">ورود به حساب کاربری</h2>
                  <input
                     type="text"
                     className="  border-2 border-zinc-300 p-2 rounded-md outline-none"
                     placeholder="نام کاربری"
                  />
                  <input
                     type="text"
                     className=" border-2 border-zinc-300 p-2 rounded-md outline-none"
                     placeholder="رمز عبور"
                  />
                  <button className=" bg-zinc-300 p-3 rounded-md font-bold mt-4">ورود</button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default LoginForm1;