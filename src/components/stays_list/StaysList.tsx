import { iStay } from "../../interfaces";
import StayCard from "../stay_card/StayCard";

interface StaysListProps {
  staysData: iStay[];
}
function StaysList({ staysData }: StaysListProps) {
  return (
    <div className="font-medium">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg text-darkGray font-bold">Stays in Finland</h1>
        <span className="text-mediumGray text-sm">12+ stays</span>
      </div>
      <div className="grid gap-8">
        {staysData.map((data, i) => (
          <StayCard stay={data} key={i} />
        ))}
      </div>
    </div>
  );
}

export default StaysList;
