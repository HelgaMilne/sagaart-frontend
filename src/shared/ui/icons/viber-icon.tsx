interface IProps {
  color: string;
}

export function ViberIcon({ color }: IProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.3,9.5c-3.8-0.7-7.8-0.7-11.6,0c-1.7,0.4-3.8,2.4-4.2,4c-0.7,3.1-0.7,6.3,0,9.5c0.4,1.6,2.6,3.6,4.2,4
	c0.1,0,0.1,0.1,0.1,0.1v4.6c0,0.2,0.3,0.4,0.4,0.1l2.2-2.3c0,0,1.8-1.8,2.1-2.1c0,0,0.1-0.1,0.1-0.1c2.2,0.1,4.5-0.1,6.7-0.5
	c1.7-0.4,3.8-2.4,4.2-4c0.7-3.1,0.7-6.3,0-9.5C30.1,11.9,27.9,9.9,26.3,9.5z M26.3,23.2c-0.4,0.7-0.8,1.3-1.5,1.7
	c-0.2,0.1-0.4,0.1-0.7,0.2c-0.3-0.1-0.5-0.1-0.7-0.2c-2.3-0.9-4.5-2.3-6.3-4.1c-1-1.1-1.8-2.3-2.4-3.6c-0.3-0.7-0.6-1.2-0.8-1.9
	c-0.2-0.6,0.1-1.2,0.5-1.6c0.4-0.4,0.8-0.7,1.3-0.9c0.4-0.2,0.7-0.1,1,0.2c0.6,0.7,1.2,1.5,1.6,2.3c0.3,0.5,0.2,1.1-0.3,1.5
	c-0.1,0.1-0.2,0.1-0.4,0.3c-0.1,0.1-0.2,0.1-0.3,0.3c-0.1,0.2-0.1,0.4-0.1,0.7c0.6,1.7,1.7,3,3.4,3.7c0.3,0.1,0.5,0.2,0.9,0.2
	c0.5-0.1,0.7-0.7,1.1-0.9c0.4-0.3,0.8-0.3,1.2-0.1c0.4,0.2,0.7,0.5,1.2,0.8c0.4,0.3,0.7,0.5,1.1,0.8C26.4,22.5,26.5,22.9,26.3,23.2z
	 M23.2,17.8C23.1,17.8,23.2,17.8,23.2,17.8c-0.3,0-0.4-0.1-0.4-0.4c0-0.1,0-0.4-0.1-0.5c-0.1-0.3-0.2-0.6-0.5-0.8
	c-0.1-0.1-0.3-0.1-0.4-0.2c-0.2-0.1-0.4-0.1-0.6-0.1c-0.2-0.1-0.3-0.2-0.3-0.4c0-0.1,0.2-0.3,0.4-0.3c1.2,0.1,2.1,0.7,2.2,2.1
	c0,0.1,0,0.2,0,0.3C23.5,17.6,23.4,17.8,23.2,17.8z M22.5,14.6c-0.4-0.1-0.7-0.3-1.2-0.4c-0.1,0-0.4-0.1-0.5-0.1
	c-0.2,0-0.4-0.1-0.3-0.4c0-0.2,0.1-0.4,0.4-0.3c0.7,0.1,1.4,0.2,2.1,0.5c1.3,0.7,2.1,1.7,2.3,3.2c0,0.1,0,0.1,0,0.2
	c0,0.1,0,0.3,0,0.5c0,0.1,0,0.1,0,0.2c-0.1,0.3-0.6,0.4-0.7,0c0-0.1-0.1-0.2-0.1-0.3c0-0.7-0.1-1.3-0.4-1.9
	C23.6,15.3,23.1,14.9,22.5,14.6z M26.5,18.9c-0.2,0-0.4-0.2-0.4-0.4c0-0.4-0.1-0.9-0.1-1.3c-0.3-2.3-2.2-4.2-4.5-4.6
	c-0.4-0.1-0.7-0.1-1-0.1c-0.2,0-0.5,0-0.6-0.3c-0.1-0.2,0.1-0.4,0.4-0.4c0.1,0,0.1,0,0.1,0c0.1,0,3,0.1,0,0c3.1,0.1,5.6,2.1,6.2,5.2
	c0.1,0.5,0.1,1,0.1,1.6C26.8,18.7,26.7,18.9,26.5,18.9z"
        fill={color}
      />
    </svg>
  );
}