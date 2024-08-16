"use client"
import { pricingOptions } from "@/app/(data)/Templates";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2Icon } from "lucide-react";
import axios from 'axios';
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { NextPage } from "next";
// import { UserSubscription } from "@/utils/schema";
// import { db } from "@/utils/db";


const Billing: NextPage = () => {


    const { user } = useUser();
    const email = user?.primaryEmailAddress?.emailAddress;

    const params = new URLSearchParams();
    params.append('email', email);

    // const [payresult, setPayresult] = useState("");

    const route = useRouter();

    async function CreateSubscription(){
        await axios.post("https://theuntempered.com/paystackAPI.php",params, {
            headers: {
                'X-Requested-With':"XMLHttpRequest"
            }
        }).then(resp => {
            let data = JSON.parse(resp.data);
            console.log(data)
            // setPayresult(data.data.authorization_url);
            route.push(data.data.authorization_url);
            // console.log()
        }).catch(function(error){
  console.log(error)
        });
        
    }

    // const SaveSubscription = async (paymentId: string) => {
    //     const result = await db.insert(UserSubscription).values({
    //         email: email,
    //         name: user?.fullName,
    //         active: true,
            
    //     })
    // }
    

  return (
    <div className="mt-20 bg-slate-100">
          <h2 className="text-primary text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Pricing</h2>
          <div className="justify-center flex flex-wrap">
              {pricingOptions.map((item, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                      <div className="p-10 border rounded-xl bg-white text-primary">
                          <p className="text-4xl mb-8 border-b pb-5 border-neutral-500">
                              {item.title}
                          </p>
                          <p className="mb-8">
                              <span className="text-3xl mt-6">{item.price}</span>
                              <span>/month</span>
                          </p>
                          <ul>
                              {item.features.map((feature, index) => (
                                  <li key={index} className="flex items-center">
                                      <CheckCircle2Icon />
                                      <span className="ml-2 mt-2">{feature}</span>
                                 </li> 
                              ))}
                          </ul>
                          <Button onClick={() => {item.title == "Free" ? "#" : CreateSubscription()}} className={`mt-8 px-8 ${item.title == 'Free' ? 'bg-slate-400' : 'bg-primary'}`}>{item.title == "Free" ? "Currently Active Plan" : "Get Started"}</Button>
                      </div>
                  </div>
              ))}
          </div>
    </div>
  );
}

export default Billing