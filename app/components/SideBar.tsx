import { CircleUserRound, Menu, MessageSquare, PanelRight } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type SideBarProps = {
  expand: boolean;
  setExpand: Dispatch<SetStateAction<boolean>>;
};

const SideBar = ({ expand, setExpand }: SideBarProps) => {
  return (
    <div
      className={`bg-[#212327]  flex flex-col justify-between transition-all pt-7 z-50 max-md:absolute max-md:h-screen ${expand ? "p-4 w-64" : "md:w-20 w-0 max-md:overflow-hidden"}`}
    >
      <div>
        <div
          className={`flex ${expand ? "flex-row gap-10" : "flex-col items-center gap-8"}`}
        >
          <Image
            className={`${expand ? "w-36" : "w-10"}`}
            src={
              expand
                ? "/intellisearch.ai-logo-text.svg"
                : "/intellisearch.ai-logo.svg"
            }
            alt="log"
            width={40}
            height={40}
          />
          <div
            onClick={() => setExpand((prev) => !prev)}
            className="group flex relative items-center justify-center transition-all duration-300 h-9 w-9 hover:bg-gray-500/20 aspect-auto rounded-lg cursor-pointer"
          >
            <Menu size={20} className="md:hidden" />
            {expand ? (
              <PanelRight className="text-white hidden md:block" size={20} />
            ) : (
              <PanelRight className="text-white hidden md:block" size={20} />
            )}
            <div
              className={`absolute w-max ${expand ? "left-1/2 -translate-x-1/2 top-12" : "-top-12 left-0"} opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none`}
            >
              {expand ? "Close sidebar" : "Open sidebar"}
              <div
                className={`w-3 h-3 absolute bg-black rotate-45 ${expand ? "left-1/2 -top-1.5 -translate-x-1/2" : "left-4 -bottom-1.5"}`}
              ></div>
            </div>
          </div>
        </div>
        <button
          className={`mt-8 flex items-center justify-center cursor-pointer ${expand ? "hover:opacity-90 rounded-2xl gap-2 p-2.5 w-max" : "group relative mx-auto h-9 w-9 hover:bg-gray-500/30 rounded-lg"}`}
        >
          {expand ? (
            <MessageSquare
              className={`text-white ${expand ? "w-6" : "w-7"}`}
              size={20}
            />
          ) : (
            <MessageSquare
              className={`text-white ${expand ? "w-6" : "w-7"}`}
              size={20}
            />
          )}
          <div className="absolute w-max bg-black text-white -top-12 -right-12 opacity-0 group-hover:opacity-100 transition text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none">
            New chat
            <div className="w-3 h-3 absolute bg-black rotate-45 left-4 -bottom-1.5"></div>
          </div>
          {expand && <p className="text-white font-medium">New chat</p>}
        </button>
        <div
          className={`mt-8 text-white/25 text-sm ${expand ? "block" : "hidden"}`}
        >
          <p className="my-1">Recent</p>
        </div>
      </div>
      <div>
        {/* <div
          className={`flex items-center cursor-pointer group relative ${expand ? "gap-1 text-white/80 text-sm p-2.5 border rounded-lg cursor-pointer hover:bg-white/10" : "h-10 w-10 mx-auto hover:bg-gray-500/30 rounded-lg"}`}
        >
          <UserRoundPen
            className={`text-white ${expand ? "w-5" : "w-6.5 mx-auto"}`}
            size={20}
          />
          <div
            className={`absolute -top-6 pb-8 ${!expand && "-right-40"} opacity-0 group-hover:opacity-100 hidden group-hover:block transition`}
          >
            <div className="relative w-max bg-black text-white text-sm p-3 rounded-lg shadow-lg">
              <ScanQrCode className="text-white w-44" size={50} />
              <p>Scan to get Intellisearch.ai</p>
              <div
                className={`w-3 h-3 absolute bg-black rotate-45 ${expand ? "right-1/2" : "left-4"} -bottom-1.5`}
              ></div>
            </div>
          </div>
          {expand && (
            <>
              <span className="text-white">Get App</span>
            </>
          )}
        </div> */}
        <div
          className={`flex items-center ${expand ? "hover:bg-white/10 rounded-lg" : "justify-center w-full"} gap-3 text-white/60 text-sm p-2 mt-2 cursor-pointer`}
        >
          <CircleUserRound className="text-white" size={20} />
          {expand && <span>My Profile</span>}
        </div>
      </div>
    </div>
  );
};

export { SideBar };
