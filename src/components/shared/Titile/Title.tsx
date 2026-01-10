import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className = "" }: TitleProps): React.ReactElement => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-700 mb-4">
        {children}
      </h2>
      {/* <div className="w-20 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto rounded-full" /> */}
    </div>
  );
};

export default Title;