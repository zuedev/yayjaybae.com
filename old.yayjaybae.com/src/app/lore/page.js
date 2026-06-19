export default () => {
  let loreVideoYT = "https://www.youtube.com/embed/lVLZW7wgCp4";

  // add params to the url
  [
    "autoplay=1", // autoplay the video
    "loop=1", // loop the video
  ].forEach((param) => {
    if (loreVideoYT.includes("?")) {
      loreVideoYT += `&${param}`;
      return;
    }

    loreVideoYT += `?${param}`;
  });

  return (
    <div className="flex flex-col items-center h-screen">
      <iframe
        src={loreVideoYT}
        style={{ width: "100%", height: "95%", border: "none" }}
      ></iframe>
    </div>
  );
};
