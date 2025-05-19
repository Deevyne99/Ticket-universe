const InputComponent = ({ label, name }: { label: string; name: string }) => {
  return (
    <div className='flex flex-col gap-2 max-w-[350px] w-full'>
      <label className='capitalize' htmlFor=''>
        {label}
      </label>
      <input
        name={name}
        type='text'
        className='p-2 border outline-none rounded-sm border-(--light-gray) focus:border-(--primary-green)'
      />
    </div>
  )
}
export default InputComponent
