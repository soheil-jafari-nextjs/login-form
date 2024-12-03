"use client"
import { useState } from "react";
import 'animate.css';

const LoginForm2 = () => {


   const [form_show, setform_show] = useState("register");


   return (
      <div className=" container mx-auto py-10 my-10 flex justify-center items-center ">
         <div
            className=" relative w-[50rem] h-[30rem] shadow-[0px_5px_8px_5px_#00000033] rounded-3xl overflow-hidden flex  gap-8 justify-between items-center "
         >
            <form
               className={`bg-white text-black rounded-t-[7rem] w-full h-full z-30 flex justify-center items-start py-12`}>
               <div className=" flex flex-col gap-6 w-full px-8 ">
                  <h2 className=" text-xl  font-bold text-center mb-8">ایجاد حساب کاربری</h2>
                  <input
                     type="text"
                     className="  border-2 border-zinc-300 p-2 rounded-md outline-none"
                     placeholder="نام کاربری"
                  />
                  <input
                     type="text"
                     className="  border-2 border-zinc-300 p-2 rounded-md outline-none"
                     placeholder="شماره تماس"
                  />
                  <input
                     type="text"
                     className=" border-2 border-zinc-300 p-2 rounded-md outline-none"
                     placeholder="رمز عبور"
                  />
                  <button className=" bg-zinc-300 p-3 rounded-md font-bold mt-4">ثبت نام</button>
               </div>
            </form>
            <form
               className={`bg-white text-black rounded-t-[7rem] w-full h-full z-30 flex justify-center items-start py-12`}>
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
            <div className={` transition-all duration-700  z-40 absolute top-0 bottom-0 w-[25rem] bg-gradient-to-l from-[#5358BF] to-[#5673d4]
               ${form_show == "register" ? "rounded-r-[8rem] left-0" : "rounded-l-[8rem] left-[25rem] "}`}>
               <div className=" flex justify-center items-center h-full p-12 text-white">
                  <div className=" flex flex-col gap-12 items-center text-center ">
                     <div
                        className={`text-sm transition-all duration-500`}
                     >
                        {
                           form_show=="register"
                           ?<span>اگر قبلا در سایت ثبت نام کرده‌اید، لطفا کلیک کنید.</span>
                           :<span>در صورتی که هنوز حساب کاربری ندارید، کلیک کنید ....</span>
                        }
                     </div>
                     <button
                        onClick={() => setform_show(form_show=="register"?"login":"register")}
                        className=" bg-white text-[#5358BF] px-4 py-2 rounded-md"
                     >
                        {form_show=="register"?"ورود به حساب کاربری":"ثبت نام"}
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default LoginForm2;
