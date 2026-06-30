"use client";

import { Menu, MessageSquare } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SideBar } from "./components/SideBar";

export default function Home() {
  const [expand, setExpand] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div>
      <div className="flex h-screen">
        <SideBar expand={expand} setExpand={setExpand} />
        <div className="flex-1 flex flex-col justify-center items-center px-4 pb-8 text-white bg-[#292a2d] relative">
          <div className="md:hidden items-center justify-between top-6 flex w-full absolute">
            <Menu onClick={() => setExpand((prev) => !prev)} size={30} />
            <MessageSquare size={30} />
          </div>
          {messages.length === 0 ? (
            <>
              <div className="flex items-center gap-3">
                <Image
                  src="/intellisearch.ai-logo.svg"
                  alt="logo"
                  width={50}
                  height={50}
                />
                <p className="font-medium text-2xl">
                  Hi I&apos;m Intellisearch.ai
                </p>
              </div>
              <p className="text-sm mt-2">How can I assist you today?</p>
            </>
          ) : (
            <div></div>
          )}
          {/* prompt box */}
          <p className="text-xs absolute bottom-1 text-gray-500">
            AI generated, for reference only
          </p>
        </div>
      </div>
    </div>
  );
}
