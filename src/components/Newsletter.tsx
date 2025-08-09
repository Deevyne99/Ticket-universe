
import InputComponent from './ReusableComponents/InputComponent'
import ButtonComponent from './ReusableComponents/ButtonComponent'

const Newsletter = () => {
  return (
    <div
      className='flex flex-col md:w-[80%] justify-center items-center mx-auto 
      rounded-2xl p-6 
      shadow-[0_10px_50px_rgba(0,0,0,0.25)]'
    >
      <div className='flex flex-col'>
        <h4 className='font-bold text-center'>NewsLetter</h4>
        <p className='text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          accusantium eum omnis corporis, aliquid quam ab, autem, provident
          fugiat.
        </p>
        <div className='flex justify-center items-center flex-col gap-4 mt-4'>
          <InputComponent label='' name='newsLetter' />
          <ButtonComponent name='subscribe' handleAction={() => {}} />
        </div>
      </div>
    </div>
  )
}

export default Newsletter