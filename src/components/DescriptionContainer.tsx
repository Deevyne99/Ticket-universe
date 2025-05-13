const DescriptionContainer = () => {
  return (
    <div className='flex flex-col my-16 container '>
      <div>
        <h1 className='text-center text-4xl'>
          The complete financial stack for your business
        </h1>
        <p className='text-center max-w-xl mx-auto mt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          praesentium sequi suscipit sed cum ipsum rerum amet? Deleniti, ullam
          voluptate velit{' '}
        </p>
      </div>
      <div className='grid bg-amber-400 grid-cols-3 justify-center w-full items-center gap-6 mt-12'>
        <div className='flex max-w-sm  gap-2 '>
          <div className='h-16 w-24 bg-(--light-zinc) rounded-md'></div>
          <div className='flex flex-col max-w-sm'>
            <h4>Simple</h4>
            <p className='text-sm'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              alias vel dicta.
            </p>
          </div>
        </div>
        <div className='flex max-w-sm gap-2'>
          <div className='h-16 w-24 bg-(--light-zinc) rounded-md'></div>
          <div className='flex flex-col max-w-sm'>
            <h4>Simple</h4>
            <p className='text-sm'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              alias vel dicta.
            </p>
          </div>
        </div>
        <div className='flex max-w-sm gap-2'>
          <div className='h-16 w-24 bg-(--light-zinc) rounded-md'></div>
          <div className='flex flex-col max-w-sm'>
            <h4>Simple</h4>
            <p className='text-sm'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              alias vel dicta.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DescriptionContainer
