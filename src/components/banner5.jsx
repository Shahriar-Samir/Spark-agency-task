const Banner5 = () => {
  return (
    <div className="w-full h-[100vh] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('/images/banner5.jpg')] bg-no-repeat bg-cover relative flex justify-center items-center p-[5%] ">
      <nav className="w-full p-10 flex justify-between items-center flex-col xl:flex-row gap-5 text-white absolute top-0">
        <div className="flex gap-5 items-center justify-center ">
          <img src="/icons/title.png" className="h-[60px] w-[60px]" />
          <h1 className="text-white font-tilt-warp text-4xl drop-shadow-custom">
            GMK Dakonderhoud
          </h1>
        </div>
        <ul className="flex gap-5 items-center font-tilt-warp drop-shadow-custom">
          <li>Diensten</li>
          <li>Over Ons</li>
          <li>Contact</li>
        </ul>
        <h1 className="text-xl drop-shadow-custom">
          Spoed? Bel 020 1234567 of klik hier | Chat
        </h1>
      </nav>
      <section className="w-full flex flex-col md:flex-row items-center gap-16 mt-20 ">
        <div className="flex w-1/2 ">
          <h1 className="lg:text-6xl max-w-[700px] text-white font-tilt-warp ">
            Wij bieden een duurzame en passende oplossing voor uw klus. 
          </h1>
        </div>
        <div className="text-white font-inter w-1/2 mt-28">
          <h1 className="text-xl font-semibold">Label</h1>
          <h5 className="mt-2">Description</h5>
          <input placeholder="value" className="p-2 rounded-lg mt-8 w-full" />
          <div className="bg-[#2275FF] rounded-2xl h-[50px] w-[284px] mt-10 ms-auto" />
        </div>
      </section>
    </div>
  );
};

export default Banner5;
