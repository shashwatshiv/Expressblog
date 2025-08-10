const Loading = () => {
  return (
    <div className=" h-screen flex justify-center">
      <div className="flex flex-row gap-2 items-center">
        <div className="w-4 h-4 rounded-full bg-emerald-500 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-emerald-500 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-emerald-500 animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  );
};

export default Loading;
