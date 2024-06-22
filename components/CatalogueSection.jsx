import Image from 'next/image'
import React from 'react'
import { TbArrowNarrowRight } from 'react-icons/tb' 

const CatalogueSection = () => {
  const items = [
    {
        id: "01",
        category: "BEDROOM SETUP",
        title: "Cossy Bedroom Setup",
        image: "/image/badroom.jpg",
        description: "family drowing room with a clean and comfortable design for your family.",
        
    },
    {
        id: "02",
        category: "KITCHEN SETUP",
        title: "Neat & Clean Kitchen",
        image: "/image/kitchen1.jpg",
        description: "family drowing room with a clean and comfortable design for your family.",
        
    },
    {
        id: "03",
        category: "DROWING SETUP",
        title: "Family Drowing Room",
        image: "/image/drowing.jpg",
        description: "family drowing room with a clean and comfortable design for your family.",
        
    },
    {
        id: "04",
        category: "LIVING SETUP",
        title: "Clean Family Room",
        image: "/image/living.jpg",
        description: "family drowing room with a clean and comfortable design for your family.",
        
    },
  ]

  return (
    <div className='grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x'>
        {
            items.map((item) =>(
                <div key={item.id}
                className='relative overflow-hidden group'
                >
                    <div>
                        <Image 
                        src={item.image}
                        width={380}
                        height={100}
                        alt=''
                        className='w-full'
                        />
                    </div>
                    <div className='absolute top-0 p-8'>
                        <div>
                            <p>
                                {item.category}
                            </p>
                            <span>{item.id}</span>
                        </div>
                        <a href=''>{item.title}</a>
                        <p>{item.description}</p>
                        <a href=''>See Details <TbArrowNarrowRight /></a>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CatalogueSection