import { ReactNode } from "react";

import Typography from "@/components/Typography";
import clsxm from "@/lib/cn";

export default function HelperText({
  children,
  helperTextClassName,
}: {
  children: ReactNode;
  helperTextClassName?: string;
}) {
  return (
    <div className="flex space-x-1">
      <Typography
        as="p"
        font="poppins"
        weight="regular"
        variant="p"
        className={clsxm(
          "text-xs !leading-tight text-gray-900",
          helperTextClassName,
        )}
      >
        {children}
      </Typography>
    </div>
  );
}
