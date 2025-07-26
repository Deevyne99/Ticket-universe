import { imageSlider } from '../../data';

const doubledImages = [...imageSlider, ...imageSlider];

const Hero = () => {
  return (
    <>
      <style>
        {`
          @keyframes scroll-up {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          @keyframes scroll-down {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }

          .scroll-up {
            animation: scroll-up 40s linear infinite;
          }

          .scroll-down {
            animation: scroll-down 40s linear infinite;
          }
        `}
      </style>

      <section className="bg-black flex flex-col w-full relative h-screen overflow-hidden">
        <div className="container mx-auto flex w-full justify-between py-12 gap-12">
          {/* Text */}
          <article className="w-1/2 flex flex-col gap-6 mt-24 tracking-wide">
            <h1 className="capitalize text-5xl text-white font-bold">
              Your gateway to unforgettable events
            </h1>
            <h2 className="text-white text-2xl">Simple, secure and safe</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum
              rerum libero, cupiditate dolorem voluptas. Perferendis nesciunt
              reprehenderit repellat dicta!
            </p>
            <li className="cursor-pointer bg-green-600 text-lg text-white px-4 py-2 rounded-lg hover:bg-green-700 max-w-[200px] list-none">
              Create an account
            </li>
          </article>

          {/* Image Columns */}
          <div className="w-1/2 grid grid-cols-3 gap-4">
            {/* Column 1 - Bottom to Top */}
            <div className="relative h-[600px] overflow-hidden">
              <div className="absolute flex flex-col gap-4 scroll-up">
                {doubledImages.map((item) => (
                  <div key={`col1-${item.id}`} className="h-[190px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-md h-full object-cover w-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 - Top to Bottom */}
            <div className="relative h-[600px] overflow-hidden">
              <div className="absolute flex flex-col gap-4 scroll-down">
                {doubledImages.map((item) => (
                  <div key={`col2-${item.id}`} className="h-[190px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-md h-full object-cover w-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 - Bottom to Top */}
            <div className="relative h-[600px] overflow-hidden">
              <div className="absolute flex flex-col gap-4 scroll-up">
                {doubledImages.map((item) => (
                  <div key={`col3-${item.id}`} className="h-[190px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-md h-full object-cover w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
