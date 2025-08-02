import React, { type ReactNode } from "react";

interface LoaderWrappersProps {
  children: ReactNode;
  justify?: "center" | "start" | "end";
  margin?: string;
  height?: string;
  width?: string;
}

const LoaderWrappers: React.FC<LoaderWrappersProps> = ({
  children,
  justify,
  margin,
  height = "auto",
  width,
}) => {
  return (
    <div
      style={{
        margin: margin || "",
        display: "flex",
        alignItems: "center",
        justifyContent: justify || "start",
        height,
        width,
      }}
      className="loader-wrapper"
    >
      {children}
    </div>
  );
};

export default LoaderWrappers;
