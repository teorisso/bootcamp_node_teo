import { IconSearch } from "@/assets/icons";

interface SearchInputProps {
  onChange: (value: string) => void;
}

export default function SearchInput({ onChange }: SearchInputProps) {
  return (
    <form
      action=""
      className="flex items-center w-80 border border-gray-200 rounded-md p-2 gap-2"
    >
      <IconSearch className="w-6 h-6 text-gray-400" />
      <input
        type="text"
        placeholder="Search..."
        className=" rounded-md w-full focus:outline-none"
      />
    </form>
  );
}
