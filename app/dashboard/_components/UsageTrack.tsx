"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import Link from 'next/link'
import React, { useEffect } from 'react'

async function UsageTrack() {

    const { user } = useUser();


    // useEffect(() => {
    //     result&&GetTotalUsage();
    // }, [result && user])
    
    const GetData=async()=>{

        const result = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
    
    }

    
    // const GetTotalUsage = () => {
    //     let total:number = 0;
    //     result.forEach(element => {
    //         total=total+Number(element.aiResponse?.length)
    //     })

    //     console.log(total);
    // }

  return (
      <div className='m-5'>
          <div className='bg-primary text-white rounded-lg p-3'>
              <h2 className='font-medium'>Credits</h2>
              <div className='h-2 bg-[#bbb1e5] w-full rounded-full mt-3'>
                  <div className='h-2 bg-[#e83232] rounded-full'
                  style={{
                    width:'35%'
                  }}
                  >
                      
                  </div>
              </div>
              <h2 className='text-sm mt-1'>350/10,000 credits used</h2>
          </div>
          <Link href='./dashboard/billing'><Button variant={'secondary'} className='w-full my-3 text-primary hover:bg-primary hover:text-white'>Upgrade</Button></Link>
      </div>
  )
}

export default UsageTrack