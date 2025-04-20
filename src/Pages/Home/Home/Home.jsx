import React from "react";
import HomeNav from "../../Shared/Navbar/HomeNav";
import Footer from "../../Shared/Footer/Footer";

const topchart = [
  { id: 1, name: "Sir Reno", song: "Joli", rank: 1 },
  { id: 2, name: "Sir Reno 1", song: "Joli-2", rank: 2 },
  { id: 3, name: "Sir Reno 2", song: "Joli-3", rank: 3 },
  { id: 4, name: "Sir Reno", song: "Joli", rank: 1 },
  { id: 5, name: "Sir Reno 1", song: "Joli-2", rank: 2 },
  { id: 6, name: "Sir Reno 2", song: "Joli-3", rank: 3 },
  { id: 7, name: "Sir Reno", song: "Joli", rank: 1 },
  { id: 8, name: "Sir Reno 1", song: "Joli-2", rank: 2 },
  { id: 9, name: "Sir Reno 2", song: "Joli-3", rank: 3 },
  { id: 10, name: "Sir Reno", song: "Joli", rank: 1 },
  { id: 11, name: "Sir Reno 1", song: "Joli-2", rank: 2 },
  { id: 12, name: "Sir Reno 2", song: "Joli-3", rank: 3 },
];

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navbar stays at the top */}
      <div className="absolute w-full z-10">
        <HomeNav />
      </div>

      {/* Background section with content centered */}
      <div
        className="flex-grow flex justify-center items-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/27925200/pexels-photo-27925200.jpeg')",
        }}
      >
        <div className="grid grid-cols-1 mt-30 mb-30 md:grid-cols-3 gap-4 z-0 ">
          {/* Left Box */}
          <div
            className="h-96 w-96 border rounded-xl  "
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full  backdrop-blur-[2px] rounded-xl flex justify-center items-center text-center">
              <p className="text-4xl capitalize">
                Truly Monrovia With Executive Ms Reno Over a Lunch Chat
              </p>
            </div>
          </div>

          {/* Middle Box - Top Charts */}
          <div className="h-96 w-96 duration-500 border p-4 rounded-lg backdrop-blur-lg overflow-y-auto">
            <h2 className="text-2xl text-center font-bold mb-4">Top Charts</h2>
            <div className=" ">
              <div className="grid grid-cols-3 text-xl font-semibold border p-2 mb-2">
                <span>Artist</span>
                <span>Song</span>
                <span>Rank</span>
              </div>
              {topchart.map((rank, index) => (
                <div
                  key={rank.id}
                  className={`grid text-lg grid-cols-3  p-2 border-b ${
                    index % 2 !== 0
                      ? "bg-gray-200 bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-10"
                      : ""
                  }`}
                >
                  <span>{rank.name}</span>
                  <span>{rank.song}</span>
                  <span>{rank.rank}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Box */}
          <div
            className="h-96 w-96 border rounded-xl  "
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full backdrop-blur-[2px] rounded-xl flex justify-center items-center text-center">
              <p className="text-4xl  capitalize">
                Sis Reno recognize for her works within the liberian music
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer at the bottom */}
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
