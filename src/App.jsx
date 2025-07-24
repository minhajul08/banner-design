import './App.css';
import './index.css';
import banner from './assets/banner.jpg';
function App() {

   const image = banner;

  return (
         <div
      className="relative min-h-screen flex items-center justify-center bg-gray-200"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center max-w-6xl w-full px-6 py-10">
        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-green-800 text-3xl md:text-4xl font-bold leading-tight mb-4">
            FLORIDA AND TEXAS <br /> HARD MONEY LENDERS
          </h2>
          <p className="text-gray-800 text-lg mb-6">
            Fast Closing Fix and Flip and Rental Loans <br />
            For Your Investment Properties.
          </p>
          <button className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg shadow-md w-fit">
            GET APPROVED ONLINE
          </button>
        </div>

        {/* Slanted Image Slices */}
        {/* <div className="flex space-x-4 justify-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-28 md:w-40 h-64 md:h-80 relative overflow-hidden shadow-xl"
            >
              <img
                src={image}
                alt={`slice-${i}`}
                className="w-full h-full object-cover"
                style={{
                  clipPath:
                    i === 0
                      ? "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)"
                      : i === 1
                      ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                      : "polygon(0% 0%, 90% 0%, 80% 100%, 0% 100%)",
                }}
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>

  );
}

export default App;
