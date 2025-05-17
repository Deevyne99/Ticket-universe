import ButtonComponent from '../../components/ReusableComponents/ButtonComponent'
import InputComponent from '../../components/ReusableComponents/navbar/InputComponent'
import { TbUniverse } from 'react-icons/tb'
const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen '>
      <div>
        <TbUniverse className='text-6xl text-(--primary-green)' />
      </div>
      <div className='flex flex-col justify-center gap-6 items-center w-full'>
        <div className='flex flex-col w-full items-center justify-center '>
          <InputComponent label='Email' name='email' />
        </div>
        <div className='flex flex-col w-full items-center justify-center '>
          <InputComponent name='password' label='password' />
        </div>
        <div className='flex flex-col w-full items-center justify-center '>
          <ButtonComponent name='Login' handleAction={() => {}} />
        </div>
      </div>
    </div>
  )
}
export default Login
