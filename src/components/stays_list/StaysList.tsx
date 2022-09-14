import { useSelector } from "react-redux";
import { FiltersState } from "../../redux/filters/filters";
import { iStay } from "../../typescript_stuff/interfaces";
import StayCard from "../stay_card/StayCard";

interface StaysListProps {
  staysData: iStay[];
}
function StaysList({ staysData }: StaysListProps) {
  const filters = useSelector(
    (state: { filters: { value: FiltersState } }) => state.filters.value
  );

  const filteredList = staysData.filter((data) => {
    let res;

    const [city, country] = filters.location.split(", ");
    const locationMatch =
      city === "" && country === undefined
        ? true
        : city === data.city && country === data.country;

    if (city === "" && filters.totalGuests === 0) res = data;
    else if (locationMatch && filters.totalGuests <= data.maxGuests) {
      res = data;
    }
    return res;
  });

  const staysCount =
    filteredList.length > 12 ? `12+ stays` : `${filteredList.length} stays`;

  return (
    <div className="font-medium mb-8 md:mb-16">
      <div className="flex justify-between items-center mb-5 md:mb-8">
        <h1 className="text-lg text-darkGray font-bold md:text-2xl">
          Stays in Finland
        </h1>
        <span className="text-mediumGray text-sm">{staysCount}</span>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredList.map((data, i) => (
          <StayCard stay={data} key={i} />
        ))}
      </div>
    </div>
  );
}

export default StaysList;
