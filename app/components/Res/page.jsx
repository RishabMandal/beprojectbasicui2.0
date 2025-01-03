"use client";

import React, { useRef } from 'react';

const ResizableDivs = () => {
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);
  const dividerRef = useRef(null);

  const handleMouseDown = (e) => {
    const startX = e.clientX;
    const initialLeftWidth = leftDivRef.current.offsetWidth;

    const onMouseMove = (e) => {
      const newWidth = initialLeftWidth + (e.clientX - startX);
      leftDivRef.current.style.width = `${newWidth}px`;
      rightDivRef.current.style.width = `calc(100% - ${newWidth + dividerRef.current.offsetWidth}px)`;
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div className="flex h-64">
      <div
        ref={leftDivRef}
        className="bg-blue-500 p-4"
        style={{ minWidth: '100px' }} // Prevents the div from being too small
      >
        Left Div
      </div>
      <div
        ref={dividerRef}
        className="bg-gray-400 cursor-col-resize w-1 h-full"
        onMouseDown={handleMouseDown}
      ></div>
      <div
        ref={rightDivRef}
        className="bg-green-500 p-4"
      >
        Right Div
      </div>
    </div>
  );
};

export default ResizableDivs;
