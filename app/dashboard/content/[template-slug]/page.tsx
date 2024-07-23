"use client"
import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplatesListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'


interface PROPS {
    params: {
        'template-slug':string
    }
    // slug: string
    
}

function CreateNewContent(props: PROPS) {

    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug'])
    
    const GenerateAIContent = (formData:any)=> {
        
    }
    
    return (

        <div className='p-5 bg-slate-100'>
            <Link href={'/dashboard'} >
                <Button><ArrowLeft />Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5 bg-slate-100'>
                {/* FormSection */}
                <FormSection selectedTemplate={selectedTemplate}
                userFormInput={(v:any)=>GenerateAIContent(v)}/>

                {/* EditorSection */}
                <div className='col-span-2'>
                    <OutputSection />
                </div>
            </div>
        </div>
  )
}

export default CreateNewContent