import { iStay } from "../../interfaces";
import StayCard from "../stay_card/StayCard";

interface StaysListProps {
  staysData: iStay[];
}
function StaysList({ staysData }: StaysListProps) {
  return (
    <div className="font-medium mb-8 md:mb-16">
      <div className="flex justify-between items-center mb-5 md:mb-8">
        <h1 className="text-lg text-darkGray font-bold md:text-2xl">
          Stays in Finland
        </h1>
        <span className="text-mediumGray text-sm">12+ stays</span>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {staysData.map((data, i) => (
          <StayCard stay={data} key={i} />
        ))}
      </div>
    </div>
  );
}

export default StaysList;
