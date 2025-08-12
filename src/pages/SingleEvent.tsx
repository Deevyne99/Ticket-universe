import event from '../assets/event-1.jpg'
import ButtonComponent from '../components/ReusableComponents/ButtonComponent'

const SingleEvent = () => {
  return (
    <section className="flex flex-col mt-12 w-full">
      {/* Banner Image */}
      <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
        {/* Sharp center image */}
        <img
          src={event}
          alt="event"
          className="w-full h-full object-cover object-center"
        />

        {/* Blurred overlays */}
        <div className="absolute left-0 top-0 h-full w-1/8 md:w-1/4 overflow-hidden">
          <img
            src={event}
            alt=""
            className="w-full h-full object-cover blur-lg scale-105"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black/10 to-transparent"></div>
        </div>

        <div className="absolute right-0 top-0 h-full w-1/8 md:w-1/4 overflow-hidden">
          <img
            src={event}
            alt=""
            className="w-full h-full object-cover blur-lg scale-105"
          />
          <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-l from-black/10 to-transparent"></div>
        </div>
      </div>

      {/* Event Details */}
      <article className="mt-6 flex flex-col gap-4 px-4 md:px-8">
        <div>
          <h4 className="font-bold">Name of event</h4>
          <p>Agriculture Food Security</p>
        </div>

        <div>
          <h4 className="font-bold">Description</h4>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            nisi earum sed accusantium consequuntur maiores voluptate aliquam
            temporibus nulla praesentium?
          </p>
        </div>

        <div>
          <h4 className="font-bold">Date and time</h4>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          </p>
        </div>

        <div>
          <h4 className="font-bold">Location</h4>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div>
          <h4 className="font-bold">Number of Slot</h4>
          <p className="text-sm text-gray-600">10 out of 20</p>
        </div>

        <div>
          <h4 className="font-bold">Price</h4>
          <p>$10</p>
        </div>

        <ButtonComponent handleAction={() => {}} name="buy ticket" />
      </article>
    </section>
  )
}

export default SingleEvent
