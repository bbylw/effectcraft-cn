import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function DownloadIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" aria-hidden="true" {...props}>
      <path d="M8 2v8M4.5 7 8 10.5 11.5 7M2.5 13h11" />
    </svg>
  );
}
