import { FaStar } from "react-icons/fa";
import { iStay } from "../../interfaces";

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
          <div key={i} className="">
            <img
              className="rounded-3xl h-60 w-full object-cover mb-3"
              src={data.photo}
              alt=""
            />
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center text-lightGray gap-2">
                {data.superHost && (
                  <div className="text-mediumGray rounded-full border-[1px] border-mediumGray text-[0.625rem] font-bold px-2 py-1">
                    SUPER HOST
                  </div>
                )}
                <p className="text-xs">
                  <span>{data.type}</span>&nbsp;.&nbsp;
                  <span>{data.beds} beds</span>
                </p>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-softRed" />
                <span className="text-mediumGray">{data.rating}</span>
              </div>
            </div>
            <h2 className="text-sm font-bold">{data.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StaysList;
