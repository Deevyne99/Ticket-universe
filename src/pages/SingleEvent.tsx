import event from '../assets/event-1.jpg'
import ButtonComponent from '../components/ReusableComponents/ButtonComponent'

const SingleEvent = () => {
  return (
    <section className='flex flex-col container'>
      <div className='grid grid-cols-2 gap-6 justify-between mt-12'>
        <div>
          <img src={event} alt='event' className='rounded-md' />
        </div>
        <article>
          <div className="flex flex-col gap-2">
            <div className='flex flex-col gap-1'>
            <h4 className="font-bold">Name of event</h4>
            <p>Agriculture Food Security</p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-bold">Description</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nisi earum sed accusantium consequuntur maiores voluptate aliquam
              temporibus nulla praesentium?
            </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-bold">Date and time</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              
            </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-bold">Location</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-bold">Number of Slot</h4>
            <p>
              10 out of 20
            </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-bold">Price</h4>
            <p>
              $10
            </p>
            </div>
            <ButtonComponent name='buy ticket'/>
          </div>
        </article>
      </div>
    </section>
  )
}

export default SingleEvent
