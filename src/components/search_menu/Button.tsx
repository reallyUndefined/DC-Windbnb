import { FaSearch } from "react-icons/fa";

interface ButtonProps {
  onClick?: VoidFunction;
}
function Button({ onClick }: ButtonProps) {
  return (
    <button
      className="bg-softRed text-white px-6 py-3 flex items-center gap-2 rounded-2xl text-sm font-bold"
      onClick={onClick}
    >
      <FaSearch />
      <span>Search</span>
    </button>
  );
}

export default Button;
