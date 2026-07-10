"use client";

export default () => {
  return (
    <>
      <style jsx global>{`
          body {
            overflow: hidden;
            background: url("/hero.png") no-repeat center center fixed;
            background-size: cover;
          }
        `}
      </style>
      <div className="fixed inset-0 flex items-center justify-center">
        <img
          src="/wordprint.png"
          className="block max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl"
        />
      </div>
    </>
  );
};
