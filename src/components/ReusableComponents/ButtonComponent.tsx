const ButtonComponent = ({
  name,
  handleAction,
}: {
  name: string
  handleAction: () => void
}) => {
  return (
    <button
      onClick={() => handleAction()}
      className='bg-(--primary-green) text-(--white) w-full max-w-[350px] p-2 rounded-sm capitalize'
    >
      {name}
    </button>
  )
}
export default ButtonComponent
