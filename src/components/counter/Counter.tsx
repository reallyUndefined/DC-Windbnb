import { FaMinus, FaPlus } from "react-icons/fa";

interface CounterProps {
  title: string;
  subtitle: string;
  value: string | number;
  onMinusClick: VoidFunction;
  onPlusClick: VoidFunction;
}
function Counter({
  title,
  subtitle,
  value,
  onMinusClick,
  onPlusClick,
}: CounterProps) {
  return (
    <div className="text-sm">
      <div className="mb-2">
        <span className="font-bold text-darkGray">{title}</span>
        <br />
        <span className="text-lightGray">{subtitle}</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="border-[1px] text-lightGray p-1 rounded cursor-pointer"
          onClick={onMinusClick}
          aria-label="minus"
        >
          <FaMinus />
        </button>
        <div className="font-bold">{value}</div>
        <button
          className="border-[1px] text-lightGray p-1 rounded cursor-pointer"
          onClick={onPlusClick}
          aria-label="plus"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default Counter;
