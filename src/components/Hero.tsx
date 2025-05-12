import { useState, useEffect } from 'react'
import { imageSlider } from '../../data'

const Hero = () => {
  const itemHeight = 190
  const containerHeight = 600
  const maxIndex = imageSlider.length - Math.floor(containerHeight / itemHeight)

  const [firstIndex, setFirstIndex] = useState(0)
  const [secondIndex, setSecondIndex] = useState(0)
  const [thirdIndex, setThirdIndex] = useState(0)

  const [firstDir, setFirstDir] = useState(1)
  const [secondDir, setSecondDir] = useState(-1)
  const [thirdDir, setThirdDir] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      // Grid 1
      setFirstIndex((prev) => {
        const next = prev + firstDir
        if (next >= maxIndex || next <= 0) {
          setFirstDir((d) => -d)
          return prev - firstDir
        }
        return next
      })

      // Grid 2 (opposite direction)
      setSecondIndex((prev) => {
        const next = prev + secondDir
        if (next >= maxIndex || next <= 0) {
          setSecondDir((d) => -d)
          return prev - secondDir
        }
        return next
      })

      // Grid 3
      setThirdIndex((prev) => {
        const next = prev + thirdDir
        if (next >= maxIndex || next <= 0) {
          setThirdDir((d) => -d)
          return prev - thirdDir
        }
        return next
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [firstDir, secondDir, thirdDir, maxIndex])

  return (
    <section className='bg-black flex flex-col w-full relative h-screen overflow-hidden'>
      <div className='container flex w-full justify-between py-12 gap-12'>
        {/* Text */}
        <article className='w-1/2 flex flex-col gap-6 mt-24 tracking-wide'>
          <h1 className='capitalize text-5xl text-white font-bold'>
            Your gateway to unforgettable events
          </h1>
          <h2 className='text-white text-2xl'>Simple, secure and safe</h2>
          <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum
            rerum libero, cupiditate dolorem voluptas. Perferendis nesciunt
            reprehenderit repellat dicta!
          </p>
        </article>

        {/* Grids */}
        <div className='w-1/2 grid grid-cols-3 gap-4'>
          {/* Grid 1 */}
          <div className='relative h-[600px] overflow-hidden'>
            <div
              className='absolute flex flex-col gap-4 transition-transform duration-1000 ease-in-out'
              style={{
                transform: `translateY(-${firstIndex * itemHeight}px)`,
              }}
            >
              {imageSlider.map((item) => (
                <div key={`g1-${item.id}`} className='h-[190px]'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='rounded-md h-full object-cover w-full'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Grid 2 (reverse direction) */}
          <div className='relative h-[600px] overflow-hidden'>
            <div
              className='absolute flex flex-col gap-4 transition-transform duration-1000 ease-in-out'
              style={{
                transform: `translateY(-${secondIndex * itemHeight}px)`,
              }}
            >
              {imageSlider.map((item) => (
                <div key={`g2-${item.id}`} className='h-[190px]'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='rounded-md h-full object-cover w-full'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Grid 3 */}
          <div className='relative h-[600px] overflow-hidden'>
            <div
              className='absolute flex flex-col gap-4 transition-transform duration-1000 ease-in-out'
              style={{
                transform: `translateY(-${thirdIndex * itemHeight}px)`,
              }}
            >
              {imageSlider.map((item) => (
                <div key={`g3-${item.id}`} className='h-[190px]'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='rounded-md h-full object-cover w-full'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
