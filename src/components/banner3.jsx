const Banner3 = () => {
  return (
    <div className="w-full h-[100vh] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('/images/banner3.jpg')] bg-no-repeat bg-cover relative flex justify-center items-center p-[5%] ">
      <nav className="w-full p-10 flex justify-end absolute top-0">
        <div className="flex gap-5 items-center justify-center ">
          <h1 className="text-white font-tilt-warp text-4xl drop-shadow-custom">
            GMK Dakonderhoud
          </h1>
          <img src="/icons/title.png" className="h-[60px] w-[60px]" />
        </div>
      </nav>
      <section className="w-full flex flex-col items-end gap-5 mt-20">
        <div className="flex flex-col items-end">
          <h1 className="lg:text-6xl max-w-[700px] text-white font-tilt-warp text-end">
            Wij bieden een duurzame en passende oplossing voor uw klus. 
          </h1>
          <p className="max-w-[650px] text-white text-lg mt-5 font-actor text-end">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="bg-[#2275FF] rounded-2xl h-[50px] w-[284px]" />
      </section>
    </div>
  );
};

export default Banner3;
