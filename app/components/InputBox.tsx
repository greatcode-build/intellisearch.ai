"use client";

import { ArrowUp, Globe, Paperclip } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

type InputProps = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const InputBox = ({ isLoading, setIsLoading }: InputProps) => {
  const [input, setInput] = useState("");

  return (
    <form
      className={`w-full ${false ? "max-w-3xl" : "max-w-2xl"} bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}
    >
      <textarea
        className="outline-none w-full resize-none overflow-hidden wrap-break-word bg-transparent"
        rows={2}
        placeholder="Message intellisearch.ai"
        required
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition">
            <Image
              src="/intellisearch.ai-logo.svg"
              width={20}
              height={20}
              alt="logo"
            />
            Intellisearch.ai
          </p>
          <p className="flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition">
            <Globe size={20} />
            Search
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            className="invert"
            src="/pin.png"
            width={20}
            height={20}
            alt="pin"
          />
          <button
            type="submit"
            className={`${
              input ? "bg-[#FF0A0B]" : "bg-[#71717a]"
            } flex h-9 w-9 items-center justify-center rounded-full cursor-pointer transition hover:opacity-90`}
          >
            <ArrowUp size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </form>
  );
};

export { InputBox };
