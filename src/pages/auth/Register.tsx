import ButtonComponent from '../../components/ReusableComponents/ButtonComponent'
import InputComponent from '../../components/ReusableComponents/navbar/InputComponent'
import { TbUniverse } from 'react-icons/tb'
const Register = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen '>
      <div>
        <TbUniverse className='text-6xl text-(--primary-green)' />
      </div>
      <h1 className='text-lg'>Ticket Universe</h1>
      <div className='flex mt-4 flex-col justify-center gap-6 items-center w-full'>
        <div className='flex flex-col w-full items-center justify-center '>
          <InputComponent label='name' name='name' />
        </div>
        <div className='flex flex-col w-full items-center justify-center '>
          <InputComponent label='Email' name='email' />
        </div>
        <div className='flex flex-col w-full items-center justify-center '>
          <InputComponent name='password' label='password' />
        </div>
        <div className='flex flex-col w-full items-center justify-center '>
          <ButtonComponent name='Register' handleAction={() => {}} />
        </div>
      </div>
    </div>
  )
}
export default Register
