import { SVGProps } from "react";

const ExpenseTrackerLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <g id="Exchange">
      <path fill="#425b72" d="M44 5h-5l1.6-1.2a1 1 0 0 0-1.2-1.6C34.31 6 35.6 5 35.36 5.25a1 1 0 0 0-.26 1.17c.15.32.24.33 4.3 3.38a1 1 0 0 0 1.2-1.6L39 7h5a2 2 0 0 1 2 2v3a1 1 0 0 0 2 0V9a4 4 0 0 0-4-4zM8.6 38.2a1 1 0 0 0-1.2 1.6L9 41H4a2 2 0 0 1-2-2v-3a1 1 0 0 0-2 0v3a4 4 0 0 0 4 4h5l-1.6 1.2a1 1 0 0 0 1.2 1.6c5.9-4.43 5.88-3.19 0-7.6z"/>
      <path fill="#9dcc6b" d="M5 17h38v18H5z"/>
      <path fill="#b5e08c" d="M43 17v15H11a3 3 0 0 1-3-3V17z"/>
      <path fill="#84b749" d="M11 17a6 6 0 0 1-6 6v-2a4 4 0 0 0 4-4zM43 29v2a4 4 0 0 0-4 4h-2a6 6 0 0 1 6-6zM28.35 17h-8.7a10 10 0 0 0 0 18h8.7a10 10 0 0 0 0-18zM24 34a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
      <path fill="#84b749" d="M24 23a1 1 0 0 1 1 1 1 1 0 0 0 1 1c1.66 0 1.21-3-1-3.82a1 1 0 1 0-2 0A3 3 0 0 0 24 27a1 1 0 1 1-1 1 1 1 0 0 0-1-1c-1.66 0-1.21 3 1 3.82a1 1 0 1 0 2 0A3 3 0 0 0 24 25a1 1 0 0 1 0-2zM10.71 25.29a1 1 0 1 0 0 1.42 1 1 0 0 0 0-1.42zM38.71 25.29a1 1 0 0 0-1.54 1.27 1 1 0 1 0 1.54-1.27z"/>
      <path fill="#9dcc6b" d="M7 13h34v4H7z"/>
      <path fill="#b5e08c" d="M41 13v2H12a2 2 0 0 1-2-2z"/>
      <path fill="#84b749" d="M43 21v2a6 6 0 0 1-6-6h2a4 4 0 0 0 4 4zM11 35H9a4 4 0 0 0-4-4v-2a6 6 0 0 1 6 6z"/>
    </g>
  </svg>
);

export default ExpenseTrackerLogo;
