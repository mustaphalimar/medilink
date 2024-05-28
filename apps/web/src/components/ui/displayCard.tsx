import classNames from "classnames";
import { ReactNode } from "react";

interface displayCardProps {
  styling: string;
  title: string;
  count: string;
  Icon: ReactNode;
}

const DisplayCard = ({ styling, title, count, Icon }: displayCardProps) => {
  return (
    <div
      className={classNames(
        "py-6 flex space-x-4 itmes-center justify-center rounded-md text-white max-w-[300px] w-full",
        styling,
      )}
    >
      <div className={`text-white rounded-full p-4 bg-white/10 text-sm `}>
        {Icon}
      </div>
      <div>
        <h2 className="font-bold text-2xl">{count}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};
export default DisplayCard;
