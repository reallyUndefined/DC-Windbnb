import { FaStar } from "react-icons/fa";
import { iStay } from "../../interfaces";

interface StayCardProps {
  stay: iStay;
}
function StayCard({ stay }: StayCardProps) {
  return (
    <div>
      <img
        className="rounded-3xl h-60 w-full object-cover mb-3"
        src={stay.photo}
        alt=""
      />
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center text-lightGray gap-2">
          {stay.superHost && (
            <div className="text-mediumGray rounded-full border-[1px] border-mediumGray text-[0.625rem] font-bold px-2 py-1">
              SUPER HOST
            </div>
          )}
          <p className="text-xs">
            <span>{stay.type}</span>&nbsp;.&nbsp;
            <span>{stay.beds} beds</span>
          </p>
        </div>
        <div className="flex items-center gap-1">
          <FaStar className="text-softRed" />
          <span className="text-mediumGray">{stay.rating}</span>
        </div>
      </div>
      <h2 className="text-sm font-bold">{stay.title}</h2>
    </div>
  );
}

export default StayCard;
