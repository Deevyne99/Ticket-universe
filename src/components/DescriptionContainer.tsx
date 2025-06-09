import { useState, useEffect } from 'react'
import { description } from '../../data'
const DescriptionContainer = () => {
  const [productIndex, setProductIndex] = useState(0)

  // useEffect(() => {
  //   const lastIndex = description.length - 1
  //   if (productIndex < 0) {
  //     setProductIndex(lastIndex)
  //   }
  //   if (productIndex > lastIndex) {
  //     setProductIndex(0)
  //   }
  // }, [productIndex])

  // useEffect(() => {
  //   const slider = setInterval(() => {
  //     setProductIndex(productIndex + 1)
  //   }, 3000)
  //   return () => clearInterval(slider)
  // }, [productIndex])

  const handleSLider = (index: number) => {
    setProductIndex(index)
  }

  useEffect(() => {
    const lastIndex = description.length - 1
    const slider = setInterval(() => {
      setProductIndex((prev) => (prev === lastIndex ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(slider)
  }, [])

  return (
    <div className='h-[600px] flex flex-col container w-full oveflow-hidden my-20'>
      <div className='flex justify-center  gap-6 w-full h-full '>
        <div className=' flex flex-col bg-gray-100 justify-between'>
          {description
            .map((item, index) => {
              return (
                <div
                  onClick={() => handleSLider(index)}
                  key={item.id}
                  className={`${
                    productIndex === index ? 'bg-(--primary-green)' : ''
                  }  md:w-[5px] md:h-[100px] w-[40px] h-[5px] md:mt-0 mt-4 cursor-pointer`}
                ></div>
              )
            })
            .slice(0, 5)}
        </div>
        <div className='flex flex-col justify-between gap-4  items-center'>
          {description
            .map((item) => {
              const { id, title } = item

              return (
                <div
                  className={` w-full md:w-[1/2]  flex  items-center pr-8 md:pr-24 justify-center md:justify-between md:gap-12 gap-4 transition-transform duration-300 mx-auto `}
                  key={id}
                >
                  <div className='flex bg-amber-950  bg- w-full'>
                    <article
                      className={`flex w-[470px] flex-col transition-transform duration-400  bg-[#fafafa] p-2 `}
                    >
                      <div>
                        <h2 className='text-2xl md:text-left text-center text-[#94a3b8] max-w-[550px] font-bold'>
                          {title}
                        </h2>
                        <p className='text-[#94a3b8] w-full  p-2 tracking-wide leading-loose text-center md:text-left text-sm'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque ducimus dolores dignissimos, doloremque
                          voluptatibus voluptatem.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              )
            })
            .slice(0, 4)}
        </div>
        <div className='w-full h-full md:w-[50%] md:flex-row flex-col flex md:gap-4 gap-0 justify-center items-center'>
          <div
            className={`justify-center items-center h-full flex transition-transform duration-400 order-1 md:order-2 w-full $ `}
          >
            <img
              src={description[productIndex].image}
              alt=''
              className='w-full  object-cover h-full rounded-lg shadow-lg'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default DescriptionContainer
