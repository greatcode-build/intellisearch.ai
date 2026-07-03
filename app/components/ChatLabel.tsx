import { EllipsisVertical, PencilLine, Trash2 } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type ChatProps = {
  openMenu: { open: boolean };
  setOpenMenu: Dispatch<SetStateAction<{ id: number; open: boolean }>>;
};

const ChatLabel = ({ openMenu, setOpenMenu }: ChatProps) => {
  return (
    <div className="flex items-center justify-between p-2 text-white/80 hover:bg-white/10 rounded-lg text-sm group cursur-poiinter">
      <p className="group-hover max-w-5/6">Chat Name Here</p>
      <div className="group relative flex items-center justify-center h-6 w-6 aspect-square hover:bg-black/20 rounded-lg">
        <EllipsisVertical
          size={20}
          className={`${openMenu.open ? "" : "hidden"} group-hover:block`}
        />
        <div
          className={`absolute -right-36 top-6 bg-gray-700 rounded-xl w-max p-2 ${openMenu.open ? "block" : "hidden"} `}
        >
          <div className="flex items-center gap-3 hover:bg-white/10 rounded-lg px-3 py-2">
            <PencilLine size={20} />
            <p>Rename</p>
          </div>
          <div className="flex items-center gap-3 hover:bg-white/10 rounded-lg px-3 py-2">
            <Trash2 size={20} />
            <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ChatLabel };
