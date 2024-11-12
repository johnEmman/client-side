import React from "react";

export default function Media() {
  return (
    <div>
      <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
        <span className="text-4xl text-gray-400" aria-hidden="true">
          📹
        </span>
        <span className="sr-only">Video placeholder</span>
      </div>
    </div>
  );
}
