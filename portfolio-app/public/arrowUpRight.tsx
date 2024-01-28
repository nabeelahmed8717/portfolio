'use client'

import { useState } from "react";

const ArrowUpRight = ({ color, size }: any) => {

    const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size ?? "20"} height={size ?? "20"} viewBox="0 0 20 20" fill="none"
            style={{ cursor: "pointer" }}
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}>
            <path d="M16.2504 0H8.75042C8.06042 0 7.50042 0.559167 7.50042 1.25C7.50042 1.94083 8.06042 2.5 8.75042 2.5H15.7329L0.36625 17.8658C-0.122083 18.3533 -0.122083 19.1458 0.36625 19.6333C0.610417 19.8775 0.930417 19.9992 1.25042 19.9992C1.57042 19.9992 1.89042 19.8775 2.13458 19.6333L17.5004 4.2675V11.25C17.5004 11.9408 18.0604 12.5 18.7504 12.5C19.4404 12.5 20.0004 11.9408 20.0004 11.25V3.75C20.0004 1.6825 18.3179 0 16.2504 0Z" fill={hovered ? '#583AF1' : color ?? "black"} />
        </svg>
    )
}

export default ArrowUpRight