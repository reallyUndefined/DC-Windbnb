import { FaMinus, FaPlus } from "react-icons/fa";

interface CounterProps {
  title: string;
  subtitle: string;
}
function Counter({ title, subtitle }: CounterProps) {
  return (
    <div className="text-sm">
      <div className="mb-2">
        <span className="font-bold text-darkGray">{title}</span>
        <br />
        <span className="text-lightGray">{subtitle}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="border-[1px] text-lightGray p-1 rounded">
          <FaMinus />
        </div>
        <div className="font-bold">0</div>
        <div className="border-[1px] text-lightGray p-1 rounded">
          <FaPlus />
        </div>
      </div>
    </div>
  );
}

export default Counter;
