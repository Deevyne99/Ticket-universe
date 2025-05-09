import { imageSlider } from '../../data'
const Hero = () => {
  return (
    <section className='bg-(--primary-black) flec flex-col w-full '>
      <div className='container flex w-full justify-between py-12'>
        <article className='w-1.2 flex flex-col'>
          <h1 className='capitalize text-3xl'>
            Your gateway to unforgettable events
          </h1>
          <p>Simple, secure and safe</p>
        </article>
        <div className='w-1/2 grid grid-cols-3 gap-4'>
          <div className='flex flex-col gap-4'>
            {imageSlider
              .map((item) => {
                return (
                  <div key={item.id} className='h-[190px]'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='rounded-md h-full object-cover w-full'
                    />
                  </div>
                )
              })
              .slice(0, 4)}
          </div>
          <div className='flex flex-col gap-4'>
            {imageSlider
              .map((item) => {
                return (
                  <div key={item.id} className='h-[250px]'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-full h-full object-cover rounded-md'
                    />
                  </div>
                )
              })
              .slice(0, 4)}
          </div>
          <div className='flex flex-col gap-4'>
            {imageSlider
              .map((item) => {
                return (
                  <div key={item.id} className=''>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='rounded-md'
                    />
                  </div>
                )
              })
              .slice(0, 4)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
