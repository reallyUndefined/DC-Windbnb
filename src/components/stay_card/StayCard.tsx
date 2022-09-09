import { FaStar } from "react-icons/fa";
import { iStay } from "../../interfaces";

interface StayCardProps {
  stay: iStay;
}
function StayCard({ stay }: StayCardProps) {
  const mbStyle = stay.superHost ? "mb-2 md:mb-3" : "mb-3 md:mb-4";
  return (
    <div>
      <img
        className={`rounded-3xl h-60 w-full object-cover ${mbStyle} cursor-pointer`}
        src={stay.photo}
        alt=""
      />
      <div className={`flex items-center justify-between ${mbStyle}`}>
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
      <h2 className="text-sm font-bold text-ellipsis whitespace-nowrap overflow-hidden cursor-pointer md:text-base">
        {stay.title}
      </h2>
    </div>
  );
}

export default StayCard;
