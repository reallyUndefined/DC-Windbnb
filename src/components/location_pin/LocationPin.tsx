import { IoLocationSharp } from "react-icons/io5";

interface LocationPinProps {
  location: string;
  onClick: VoidFunction;
}
function LocationPin({ location, onClick }: LocationPinProps) {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
      <IoLocationSharp />
      <span className="text-sm text-mediumGray">{location}</span>
    </div>
  );
}

export default LocationPin;
