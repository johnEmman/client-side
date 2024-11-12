import React from "react";

function Subtitle() {
  return (
    <div>
      <div className="flex-1 p-3 bg-gray-100 rounded-md flex items-start h-20 overflow-y-auto">
        <span className="text-gray-500 mr-2 flex-shrink-0" aria-hidden="true">
          🗨️
        </span>
        <p className="text-sm text-gray-700">
          <span className="sr-only">Subtitles:</span>
          Subtitles will appear here during the meeting.
        </p>
      </div>
    </div>
  );
}

export default Subtitle;
