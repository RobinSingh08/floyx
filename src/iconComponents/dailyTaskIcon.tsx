import * as React from 'react';
const SVGComponent = ({ fill, ...props }: { fill: string }) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill={fill ?? 'none'} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 1.25c-2.574 0-4.57.51-5.905 1.845C1.76 4.429 1.25 6.426 1.25 9v6c0 2.574.51 4.57 1.845 5.905C4.429 22.24 6.426 22.75 9 22.75h6c2.574 0 4.57-.51 5.905-1.845C22.24 19.571 22.75 17.574 22.75 15V9c0-2.574-.51-4.57-1.845-5.905C19.571 1.76 17.574 1.25 15 1.25H9ZM2.75 9c0-2.426.49-3.93 1.405-4.845C5.071 3.24 6.574 2.75 9 2.75h6c2.426 0 3.93.49 4.845 1.405.915.916 1.405 2.419 1.405 4.845v6c0 2.426-.49 3.93-1.405 4.845-.916.915-2.419 1.405-4.845 1.405H9c-2.426 0-3.93-.49-4.845-1.405C3.24 18.929 2.75 17.426 2.75 15V9Zm7.16-2.15a.75.75 0 0 1 0 1.061l-2.25 2.25a.75.75 0 0 1-1.06 0l-.75-.75a.75.75 0 0 1 1.06-1.06l.22.22 1.72-1.72a.75.75 0 0 1 1.06 0Zm1.71 2.03a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 0 1.5h-5.25a.75.75 0 0 1-.75-.75Zm.75 6.25a.75.75 0 1 0 0 1.5h5.25a.75.75 0 0 0 0-1.5h-5.25Zm-2.46-1.28a.75.75 0 0 1 0 1.061l-2.25 2.25a.75.75 0 0 1-1.06 0l-.75-.75a.75.75 0 0 1 1.06-1.06l.22.22 1.72-1.72a.75.75 0 0 1 1.06 0Z"
      // fill={props?.fill ?? "#fff"}
      fillOpacity={0.3}
    />
  </svg>
);
export default SVGComponent;
