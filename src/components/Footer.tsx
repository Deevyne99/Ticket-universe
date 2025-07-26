import { Link } from 'react-router-dom';
import { categories } from '../../data';
import { TbUniverse } from 'react-icons/tb'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
       
          <div>
            <TbUniverse className='text-6xl text-(--primary-green)' />
          </div>
        {/* Navigation */}
        <div className="max-w-[250px]">
          <h4 className="font-bold mb-4 text-lg">Navigation</h4>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/events" className="hover:underline">Events</Link></li>
                <li><Link to="/favourite-events" className="hover:underline">Favourite Events</Link></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li><Link to="/profile" className="hover:underline">Profile</Link></li>
                <li><Link to="/login" className="hover:underline">Login</Link></li>
                <li><Link to="/register" className="hover:underline">Register</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Categories - Three Columns */}
        <div className="max-w-[450px]">
          <h4 className="font-bold mb-4 text-lg">Categories</h4>
          <div className="grid grid-cols-3 gap-4">
            {categories.map((cat) => (
              <div key={cat.name}>
                <Link to={`/single-event/${cat.name}`} className="hover:underline block max-w-[280px]">
                  {cat.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* About & Contact stacked in one column */}
        <div className="flex flex-col gap-6 max-w-[300px]">
          <div>
            <h4 className="font-bold mb-4 text-lg">About</h4>
            <p className="text-sm">Ticket Universe is your one-stop platform for discovering and booking events. Explore categories, save favourites, and enjoy seamless ticketing.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: support@ticketuniverse.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Location: Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Ticket Universe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
