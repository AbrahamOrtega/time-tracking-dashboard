import Image from "next/image";
import ActivityModel from "@/models/ActivityModel";

interface ActivityCardProps {
  activity: ActivityModel;
  timeframe: "daily" | "weekly" | "monthly";
  key: string;
}

export default function ActivityCard({
  activity,
  timeframe,
  key,
}: ActivityCardProps) {
  const getActivityProps = (title: string) => {
    switch (title) {
      case "Work":
        return { icon: "/images/icon-work.svg", color: "#ff8c66" };
      case "Play":
        return { icon: "/images/icon-play.svg", color: "#56c2e6" };
      case "Study":
        return { icon: "/images/icon-study.svg", color: "#ff5c7c" };
      case "Exercise":
        return { icon: "/images/icon-exercise.svg", color: "#4acf81" };
      case "Social":
        return { icon: "/images/icon-social.svg", color: "#7536d3" };
      case "Self Care":
        return { icon: "/images/icon-self-care.svg", color: "#f1c65b" };
    }
  };

  const getTimeFrame = (timeframe: string) => {
    switch (timeframe) {
      case "daily":
        return "Yesterday";
      case "weekly":
        return "Last Week";
      case "monthly":
        return "Last Month";
    }
  };

  return (
    <div
      className="flex flex-col w-full pt-8 rounded-t-xl rounded-b-3xl relative cursor-pointer"
      style={{
        backgroundColor: getActivityProps(activity.title)?.color || "#ff8c66",
      }}
      key={key}
    >
      <div className="absolute flex w-full h-full z-0 top-0 right-0 justify-end overflow-hidden">
        <div className="relative -top-2 right-4">
          <Image
            src={
              getActivityProps(activity.title)?.icon || "/images/icon-work.svg"
            }
            alt="work"
            width={64}
            height={64}
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-full justify-center bg-darkBlue hover:brightness-125 p-4 gap-4 z-10 rounded-xl">
        <div className="flex w-full justify-between">
          <p className="text-white text-[18px] font-[400]">{activity.title}</p>
          <button>
            <Image
              src={"/images/icon-ellipsis.svg"}
              alt="ellipsis"
              width={16}
              height={4}
            />
          </button>
        </div>
        <div className="flex justify-between items-center lg:flex-col lg:items-start lg:justify-start">
          <h1 className="text-[36px] font-[300] text-white">
            {activity.timeframes[timeframe].current}hrs
          </h1>
          <p className="text-[14px] font-[300] text-paleBlue">
            <span>{getTimeFrame(timeframe)} - </span>
            <span>{activity.timeframes[timeframe].previous}hrs</span>
          </p>
        </div>
      </div>
    </div>
  );
}
