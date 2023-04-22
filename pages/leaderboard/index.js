import React from "react";

const Leaderboard = () => {
  return (
    <div className="w-screen h-screen bg-white grid">
      <div className="mt-20">
        <div className="absolute left-11 mt-12">
          <div className="border border-black w-80 h-[40rem]">
            <div className="p-3">
              <div className="mb-10">
                <p className="font-bold text-2xl font-mono">Sport</p>
              </div>
              <div className="flow-root">
                <p className="float-left text-lg font-mono">Sepak Bola</p>
                <p className="float-right text-lg font-mono">2</p>
              </div>
              <div className="flow-root">
                <div className="float-left text-lg font-mono">Futsal</div>
                <div className="float-right text-lg font-mono">5</div>
              </div>
              <div className="flow-root">
                <div className="float-left text-lg">Bulu Tangkis</div>
                <div className="float-right text-lg">1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 ml-96">
          <div className="mb-7">
            <p className="text-lg font-bold font-mono">Home/Leaderboard</p>
          </div>
          <div className="text-center text-2xl font-bold font-mono">
            Top 20 Team
          </div>
          <div className="p-4 grid place-items-center">
            <table className="table-fixed border-x border-b">
              <thead>
                <tr>
                  <th className="font-bold p-2 border-b border-l border-yellow-700 text-left bg-yellow-700 text-white w-auto">
                    Team Name
                  </th>
                  <th className="font-bold p-2 border-b border-l border-yellow-700 text-left bg-yellow-700 text-white ">
                    Location
                  </th>
                  <th className="font-bold p-2 border-b border-l border-yellow-700 text-center bg-yellow-700 text-white">
                    Matches
                  </th>
                  <th className="font-bold p-2 border-b border-l border-yellow-700 text-center bg-yellow-700 text-white">
                    Win
                  </th>
                  <th className="font-bold p-2 border-b border-l border-yellow-700 text-center bg-yellow-700 text-white">
                    Lose
                  </th>
                  <th className="font-bold p-2 border-b border-l border-yellow-700 text-center bg-yellow-700 text-white">
                    Draw
                  </th>
                  <th className="font-bold p-2 border-b border-l border-yellow-700 text-center bg-yellow-700 text-white">
                    Points
                  </th>
                  <th className="font-bold p-2 border-b border-l border-yellow-700 text-center bg-yellow-700 text-white">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left text-lg p-2">Elang</td>
                  <td className="text-left text-lg p-2">Madura</td>
                  <td className="text-center text-lg p-2">10</td>
                  <td className="text-center text-lg p-2">7</td>
                  <td className="text-center text-lg p-2">2</td>
                  <td className="text-center text-lg p-2">0</td>
                  <td className="text-center text-lg p-2">19</td>
                  <td>
                    <button type="button" className="text-center text-lg p-2">
                      go
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
