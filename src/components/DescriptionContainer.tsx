import { useState } from 'react'
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

  return (
    <div className='flex flex-col w-full oveflow-hidden '>
      <div className=''>
        <div className=''>
          {description
            .map((item, index) => {
              return (
                <div
                  onClick={() => handleSLider(index)}
                  key={item.id}
                  className={`${
                    productIndex === index ? 'bg-[#60a5fa]' : 'bg-gray-100'
                  }  md:w-[5px] md:h-[10px] w-[40px] h-[5px] md:mt-0 mt-4 `}
                ></div>
              )
            })
            .slice(0, 3)}
        </div>
        {description
          .map((item) => {
            const { id, image, title } = item

            return (
              <div
                className={`  w-full flex  md:flex-row items-center pr-8 md:pr-24 justify-center md:justify-between md:gap-12 gap-4 transition-transform duration-300 mx-auto `}
                key={id}
              >
                <div className='flex '>
                  <article
                    className={`w-full md:w-[50%] flex max-w-[600px] flex-col transition-transform duration-400  `}
                  >
                    <div>
                      <h2 className='text-2xl md:text-left text-center text-[#94a3b8] max-w-[500px] font-bold'>
                        {title}
                      </h2>
                      <p className='text-[#94a3b8] w-full  p-2 tracking-wide leading-loose text-center md:text-left'>
                        {item.title}
                      </p>
                    </div>
                  </article>
                  <div className='w-full  md:w-[50%] md:flex-row flex-col flex md:gap-4 gap-0 justify-center items-center'>
                    <div
                      className={`justify-center items-center flex transition-transform duration-400 order-1 md:order-2 w-full $ `}
                    >
                      <img
                        src={image[productIndex]}
                        alt=''
                        className='w-full  '
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })
          .slice(0, 3)}
      </div>
    </div>
  )
}
export default DescriptionContainer
