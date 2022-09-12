import { FaStar } from "react-icons/fa";
import { iStay } from "../../typescript_stuff/interfaces";

interface StayCardProps {
  stay: iStay;
}
function StayCard({ stay }: StayCardProps) {
  const gapStyle = stay.superHost ? "gap-2 md:gap-3" : "gap-3 md:gap-4";
  return (
    <div className={`grid ${gapStyle}`}>
      <img
        className={`rounded-3xl h-60 w-full object-cover cursor-pointer`}
        src={stay.photo}
        alt=""
      />
      <div className={`flex items-center justify-between`}>
        <div className="flex items-center text-lightGray gap-2">
          {stay.superHost && (
            <div className="text-mediumGray rounded-full border-[1px] border-mediumGray text-[0.625rem] font-bold px-2 py-1 cursor-pointer md:text-xs">
              SUPER HOST
            </div>
          )}
          <p className="text-xs md:text-sm">
            <span>{stay.type}</span>
            {stay.beds && <span>&nbsp;.&nbsp;{stay.beds} beds</span>}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <FaStar className="text-softRed" />
          <span className="text-mediumGray text-xs md:text-sm">
            {stay.rating}
          </span>
        </div>
      </div>
      <h2 className="w-11/12 min-w-0 text-sm font-bold text-ellipsis overflow-hidden whitespace-nowrap cursor-pointer md:text-base">
        {stay.title}
      </h2>
    </div>
  );
}

export default StayCard;
