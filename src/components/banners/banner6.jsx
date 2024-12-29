const Banner6 = () => {
  return (
    <div className="w-full h-[100vh] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('/images/banner6.jpg')] bg-no-repeat bg-cover relative flex justify-center items-end p-[4%]">
      <nav className="w-full p-[4%] flex absolute top-0">
        <div className="flex gap-5 items-center justify-center">
          <img src="/icons/title.png" className="h-[60px] w-[60px]" />
          <h1 className="text-white font-tilt-warp text-4xl drop-shadow-custom">
            GMK Dakonderhoud
          </h1>
        </div>
      </nav>
      <section className="w-full flex flex-col md:flex-row items-end justify-between">
        <div>
          <h1 className="text-6xl max-w-[700px] text-white font-tilt-warp">
            Wij bieden een duurzame en passende oplossing voor uw klus. 
          </h1>
        </div>
        <div>
          <p className="max-w-[650px] text-white text-lg mt-5 font-actor text-end">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className="bg-[#2275FF] rounded-2xl h-[50px] w-[284px] ms-auto mt-8" />
        </div>
      </section>
    </div>
  );
};

export default Banner6;
