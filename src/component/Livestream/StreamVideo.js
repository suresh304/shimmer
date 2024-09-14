import React from "react";

const StreamVideo = ({width,height}) => {
  return (
    <div className="mx-4 my-2">
      <iframe
        width={width}
        height={height}
        src="https://www.youtube.com/embed/KD7ClKO7TB0?si=HbSkNHHAHZRG4WT6"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default StreamVideo;
