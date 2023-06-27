import * as React from "react";
const LineBg = (props) => (
  <div
    style={{
      position: "absolute",
      top: 70,
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1440}
      height={560}
      preserveAspectRatio="none"
      {...props}
    >
      <g
        fill="none"
        stroke="rgba(38, 201, 4, 0.58)"
        strokeWidth={2}
        mask='url("#a")'
      >
        <path d="M867.28-23.26C716.75-9.18 647.33 289.79 360.34 306.49 73.35 323.19-9.22 515.03-146.6 519.29" />
        <path d="M1091.36-87.45C950.37-56.31 900.01 308.58 676.81 314.68c-223.2 6.1-207.28-70-414.55-70-207.28 0-309.45 69.75-414.55 70" />
        <path d="M1078.87-87.32C934.64-84.68 822.61 95.69 533.54 101.27c-289.07 5.58-400.49 193.05-545.33 196" />
        <path d="M876.73-57.26C730.56-55.89 614.7 89.1 312.6 96.49c-302.1 7.39-406.86 272.44-564.13 280" />
        <path d="M1255.44-39.48c-181.37 12.45-313.45 360.8-631.23 361.05-317.79.25-464.73-209.96-631.24-212.8" />
      </g>
      <defs>
        <mask id="a">
          <path fill="#fff" d="M0 0h1440v560H0z" />
        </mask>
      </defs>
    </svg>
  </div>
);
export default LineBg;
