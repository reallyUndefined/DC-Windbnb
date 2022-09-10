import { IoLocationSharp } from "react-icons/io5";

interface LocationPinProps {
  location: string;
}
function LocationPin({ location }: LocationPinProps) {
  return (
    <div className="flex items-center gap-2">
      <IoLocationSharp />
      <span className="text-sm text-mediumGray">{location}</span>
    </div>
  );
}

export default LocationPin;
