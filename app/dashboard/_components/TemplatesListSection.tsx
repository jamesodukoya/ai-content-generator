// eslint-disable react/jsx-key
import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE{
    name: string,
    desc: string,
    icon: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form?: FORM[]
}

export interface FORM{
    label: string,
    field: string,
    name: string,
    required?: boolean
}

function TemplatesListSection({userSearchInput}: any) {
    
    const [templateList, setTemplateList]=useState(Templates)
    useEffect(() => {
        if (userSearchInput)
        {
            const filterData = Templates.filter(item =>
                item.name.toLowerCase().includes(userSearchInput.toLowerCase())
            );
            setTemplateList(filterData);
        }
        else {
            setTemplateList(Templates)
        }
    },[userSearchInput])
  return (
      <div className='grid grid-cols-2 my-5 lg:grid-cols-4 gap-5 m-2 lg:m-10'>
          {templateList.map((item: TEMPLATE, index: number) => (
              <TemplateCard key={item.name} {...item} />
          ))}
      </div>
  )
}

export default TemplatesListSection