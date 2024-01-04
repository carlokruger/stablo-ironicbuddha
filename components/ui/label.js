import { cx } from "@/utils/all";

export default function Label(props) {
  const color = {
    green: "text-emerald-700",
    grey: "text-gray-600",
    blue: "text-blue-600",
    orange: "text-orange-700",
    purple: "text-purple-600",
    pink: "text-pink-600"
  };
  const bgcolor = {
    green: "bg-emerald-50",
    grey: "bg-gray-50",
    blue: "bg-blue-50",
    orange: "bg-orange-50",
    purple: "bg-purple-50",
    pink: "bg-pink-50"
  };
  const margin = props.nomargin;

  if (props.pill) {
    return (
      <div
        className={
          "inline-flex h-6 shrink-0 items-center justify-center rounded-full bg-blue-50 px-2 text-sm font-bold text-blue-500 dark:bg-gray-800 dark:text-gray-300"
        }>
        {props.children}
      </div>
    );
  }

  return (
    <span
      className={cx(
        "inline-block text-xs font-medium tracking-wider lowercase ",
        !margin && " mt-5",
        color[props.color] || color['grey']
      )}>
      {props.children}
    </span>
  );
}
