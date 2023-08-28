import type { SVGProps } from "react";
import * as React from "react";
const SvgArrowDownCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Zm1 10V8h-2v4H8l4 4 4-4h-3Z"
    />
  </svg>
);
export default SvgArrowDownCircle;
