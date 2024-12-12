import React from "react";
import contributions from "../contribution";

const ContributionGraph = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Mon", "Wed", "Fri"];

  return (
    <div className="bg-gray-900 text-white p-3 rounded-md">
      <h2 className="text-lg font-bold mb-4">80 contributions in the last year</h2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          {months.map((month, index) => (
            <div key={index} className="text-sm text-gray-400 w-8 text-center">
              {month}
            </div>
          ))}
        </div>

        <div className="flex gap-1"> 
          {contributions.map((week, weekIndex) => (
            <div key={weekIndex} className={`flex flex-col gap-1 ${weekIndex % 7 === 0 && weekIndex !== 0 ? 'ml-4' : ''}`}>
              {week.map((level, dayIndex) => (
                <div
                  key={dayIndex}
                  className={
                    `w-4 h-4 rounded-sm ` +
                    (level === 0
                      ? "bg-gray-700"
                      : level === 1
                      ? "bg-green-500"
                      : level === 2
                      ? "bg-green-600"
                      : "bg-green-700")
                  }
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4 text-sm text-gray-400">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-4 h-4 bg-gray-700"></div>
          <div className="w-4 h-4 bg-green-500"></div>
          <div className="w-4 h-4 bg-green-600"></div>
          <div className="w-4 h-4 bg-green-700"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

export default ContributionGraph;
