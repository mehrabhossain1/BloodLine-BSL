import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const PaginationSelection = () => {
  return (
    <div className="flex items-center gap-2 poppins">
      <span className="text-sm text-gray-500">Rows Per Page</span>

      <Select>
        <SelectTrigger className="w-[90px]">
          <SelectValue placeholder="4" />
        </SelectTrigger>

        <SelectContent>
          {[4, 6, 8, 10, 15, 20, 30].map((size) => (
            <SelectItem key={size} value={size.toString()}>
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default PaginationSelection;
