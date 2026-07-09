import {
  Copy,
  PencilLine,
  RefreshCw,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";

const Message = ({ role, content }: { role: string; content: string }) => {
  return (
    <div className="flex flex-col items-center text-sm w-full max-w-3xl">
      <div
        className={`flex flex-col w-full mb-8 ${role === "user" && "items-end"}`}
      >
        <div
          className={`group relative flex max-w-2xl py-3 rounded-xl ${role === "user" ? "bg-[#414158] px-5" : "gap-3"}`}
        >
          <div
            className={`opacity-0 group-hover:opacity-100 absolute ${role === "user" ? "-left-16 top-2.5" : "left-9 -bottom-6"} transition-all`}
          >
            <div className="flex items-center gap-2 opacity-70">
              {role === "user" ? (
                <>
                  <Copy size={20} />
                  <PencilLine size={20} />
                </>
              ) : (
                <>
                  <Copy size={20} />
                  <RefreshCw size={20} />
                  <ThumbsUp size={20} />
                  <ThumbsDown size={20} />
                </>
              )}
            </div>
          </div>
          {role === "user" ? (
            <span className="text-white/90">{content}</span>
          ) : (
            <>
              <Image
                className="w-9 h-9 rounded-full p-1 border border-white/15"
                src="/intellisearch.ai-logo.svg"
                alt="logo"
                width={30}
                height={30}
              />
              <div className="space-y-4 w-full overflow-scroll">{content}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { Message };
