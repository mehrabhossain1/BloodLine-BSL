"use client";

import { Input } from "./ui/input";
import { Search, X } from "lucide-react";
import { useRef } from "react";
import { useSearchQueryStore } from "@/hooks/useSearchQueryStore";

const SearchInput = () => {
  const { setQuery, query } = useSearchQueryStore();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative flex items-center gap-4 rounded-lg p-1 py-[4px] h-11">
      <Input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search by name or blood group"
        className="text-slate-800 placeholder-slate-100 h-10 shadow-none border w-80"
      />

      {query.trim().length > 0 ? (
        <X
          onClick={() => {
            setQuery("");
            inputRef.current?.focus();
          }}
          className="text-slate-400 text-xl absolute top-[10px] right-5 cursor-pointer"
        />
      ) : (
        <Search className="text-slate-400 absolute top-[10px] right-5" />
      )}
    </div>
  );
};

export default SearchInput;
