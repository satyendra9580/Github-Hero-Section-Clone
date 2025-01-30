import React from "react";
import contributions from "../contribution";

const ContributionGraph = () => {
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]; // First letter of each month
  const days = ["Mon", "Wed", "Fri"];

  return (
    <div className="bg-gray-900 text-white p-2 rounded-md">
      <h2 className="text-md font-bold mb-2">80 contributions in the last year</h2>
      <div className="flex flex-col gap-1">
        {/* Months Row */}
        <div className="flex justify-between">
          {months.map((month, index) => (
            <div key={index} className="text-xs text-gray-400 w-4 text-center">
              {month}
            </div>
          ))}
        </div>

        {/* Contributions Grid */}
        <div className="flex gap-0.5">
          {contributions.map((week, weekIndex) => (
            <div
              key={weekIndex}
              className={`flex flex-col gap-0.5 ${weekIndex % 7 === 0 && weekIndex !== 0 ? 'ml-1' : ''}`}
            >
              {week.map((level, dayIndex) => (
                <div
                  key={dayIndex}
                  className={
                    `w-3 h-3 rounded-sm ` +
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

      {/* Legend (Optional: Hide or Simplify) */}
      <div className="flex justify-between mt-2 text-xs text-gray-400">
        <span>Less</span>
        <div className="flex gap-0.5">
          <div className="w-3 h-3 bg-gray-700"></div>
          <div className="w-3 h-3 bg-green-500"></div>
          <div className="w-3 h-3 bg-green-600"></div>
          <div className="w-3 h-3 bg-green-700"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

export default ContributionGraph;