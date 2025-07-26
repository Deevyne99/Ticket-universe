
interface EventCardProps {
  sector: string;
  description: string;
  bg: string; // background image or color
}

const EventCategoriesCard = ({ sector, description, bg }: EventCardProps) => {

  return (
    <div className='group flex flex-col w-[250px]  md:max-w-[400px] h-[350px]  md:h-[400px]  relative overflow-hidden'>
      <div
        className="bg-cover bg-center h-full w-full flex flex-col items-center justify-center rounded-lg"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className='absolute left-1/2 -translate-x-1/2 bottom-4 w-[90%] h-[30%] bg-white/80 backdrop-blur-md rounded-lg flex items-baseline justify-center p-4 transition-all duration-500 group-hover:h-[80%] z-10'
        >
          <div className="w-full flex flex-col">
            <h4 className="font-bold">{sector}</h4>
            <p className="block group-hover:hidden transition-all duration-300 text-sm text-gray-600">
              {description.length > 60 ? description.slice(0, 60) + '...' : description}
            </p>
            <p className="hidden group-hover:block transition-all duration-300 text-sm text-gray-600">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventCategoriesCard;

