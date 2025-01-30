export default () => {
  return (
    <>
      <div className="min-h-screen p-8 space-y-8 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          <p className="text-2xl md:text-4xl text-center col-span-1 md:col-span-2 flex flex-col justify-center items-center p-4">
            Human Form <br />
            Reference Sheet
          </p>
          <img
            src={`/images/Human Full Reference.png`}
            className="h-full object-cover w-full col-span-1 md:col-span-6"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          <img
            src={`/images/Furry Full Reference.png`}
            className="h-full object-cover w-full col-span-1 md:col-span-6"
          />
          <p className="text-2xl md:text-4xl text-center col-span-1 md:col-span-2 flex flex-col justify-center items-center p-4">
            Furry Form <br />
            Reference Sheet
          </p>
        </div>
      </div>
    </>
  );
};
