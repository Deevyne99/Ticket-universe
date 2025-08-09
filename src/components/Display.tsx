
interface EventProps{
  id:string|number
  name:string 
  description:string
  image:string
}

import { useRef } from 'react';

const DisplayCard = ({name,description,img,events,active,handleChange}:{name:string,description:string,img:string,events:EventProps[],active:number,handleChange:(index:number)=>void}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const articleRef = useRef<HTMLElement>(null);

  return (
    <div className='flex flex-col h-[680px] md:h-[600px]  '>
        <div className="flex flex-col md:flex-row w-full justify-center items-center  h-full">
            <article ref={articleRef} className='w-full flex flex-col items-center order-2 md:order-1   md:w-1/2 md:px-12 px-4  h-full my-auto justify-center '>
            <h4>{name}</h4>
                <p className='text-left text-sm md:text-center mt-4 md:px-6 px-0 text-[#fff]'>{description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ab et cupiditate doloremque corrupti maxime facere voluptas natus ea rerum optio id minus veniam architecto accusamus, dolores neque odio quam! Ad blanditiis perspiciatis suscipit voluptas consequuntur omnis, corporis non nihil tempore, iusto aliquid alias quibusdam soluta eius rem odio rerum?</p>
                <div className='flex gap-4 mt-8 '>
                  {events.map((event,index)=>{
                    return <div key={event.id} className={`h-[20px] p-1 text-[#fff] w-[20px]  flex justify-center items-center rounded-full ${active === index? 'bg-[var(--primary-green)]':"bg-[#fff]"} cursor-pointer`} onClick={()=>handleChange(index)}></div>
                  })}
                </div>
            </article>
            <div className='flex order-1 md:order-2 w-full md:w-1/2 h-full'>
              <img ref={imgRef} src={img} alt="" className='w-full h-full object-cover object-center '/>
            </div>
        </div>
    </div>
  )
}

export default DisplayCard