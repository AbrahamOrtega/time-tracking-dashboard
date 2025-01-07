import ActivityCard from "@/components/ActivityCard";
import Image from "next/image";
import ActivityModel from "@/models/ActivityModel";
import { useState, useEffect } from "react";
import { getTimeData } from "@/services/getTimeData";

export default function Home() {
  const [data, setData] = useState<ActivityModel[]>([]);
  const [timeframe, setTimeframe] = useState<"daily" | "weekly" | "monthly">(
    "daily"
  );

  useEffect(() => {
    setData(getTimeData() as ActivityModel[]);
  }, []);

  return (
    <div className="flex w-full min-h-screen justify-center lg:items-center px-6 py-12 bg-veryDarkBlue">
      <div className="flex flex-col lg:flex-row w-full lg:w-[900px] lg:h-[420px] gap-4">
        <div className="flex flex-col w-full lg:w-1/4 bg-darkBlue rounded-xl">
          <div className="flex lg:flex-col items-center lg:items-start bg-blue rounded-xl p-6 gap-8">
            <div className="flex w-16 h-16 justify-between items-center border-2 border-white rounded-full">
              <Image
                src={"/images/image-jeremy.png"}
                alt="user"
                width={64}
                height={64}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[14px] font-[300] text-paleBlue">Report for</p>
              <h1 className="text-[18px] lg:text-[36px] font-[300] text-white">
                Jeremy Robson
              </h1>
            </div>
          </div>

          <div className="flex lg:flex-col items-start justify-between lg:justify-center p-6 text-paleBlue text-[14px] gap-y-4">
            <button
              className={`${
                timeframe === "daily" ? "text-white opacity-100" : "opacity-70"
              } hover:opacity-100 hover:text-white`}
              onClick={() => setTimeframe("daily")}
            >
              Daily
            </button>
            <button
              className={`${
                timeframe === "weekly" ? "text-white opacity-100" : "opacity-70"
              } hover:opacity-100 hover:text-white`}
              onClick={() => setTimeframe("weekly")}
            >
              Weekly
            </button>
            <button
              className={`${
                timeframe === "monthly"
                  ? "text-white opacity-100"
                  : "opacity-70"
              } hover:opacity-100 hover:text-white`}
              onClick={() => setTimeframe("monthly")}
            >
              Monthly
            </button>
          </div>
        </div>
        <div className="grid lg:grid-rows-2 lg:grid-cols-3 grid-flow-row gap-4 lg:w-3/4 h-full">
          {data.map((activity) => (
            <ActivityCard
              key={activity.title}
              activity={activity}
              timeframe={timeframe}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
