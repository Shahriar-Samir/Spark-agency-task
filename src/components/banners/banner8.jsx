const Banner8 = () => {
  return (
    <div className="w-full h-[150vh] lg:h-[100vh] relative flex justify-center items-end ">
      <nav className="w-full p-[4%] flex absolute top-0">
        <div className="flex gap-5 items-center justify-center">
          <img src="/icons/title.png" className="h-[60px] w-[60px]" />
          <h1 className="text-white font-tilt-warp text-4xl drop-shadow-custom">
            GMK Dakonderhoud
          </h1>
        </div>
      </nav>
      <section className="w-full h-full flex flex-col lg:flex-row items-end justify- gap-10">
        <div className="w-full lg:w-3/4 h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.4)),url('/images/banner8.jpg')] bg-no-repeat bg-cover flex justify-center items-center text-white">
          <div className=" w-9/12 max-w-[800px] mx-auto">
            <h1 className="text-xl font-semibold">Label</h1>
            <h5 className="mt-2">Description</h5>
            <input placeholder="value" className="p-2 rounded-lg mt-8 w-full" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center flex-col">
          <h1 className="text-5xl font-tilt-warp w-11/12 mx-auto text-center lg:text-start">
            Vraag hieronder <br />
            een offerte op
          </h1>
          <form className="mx-auto w-9/12 pt-4 px-4 pb-7 mt-10 border rounded-lg flex flex-col gap-4 max-w-[600px]">
            <label>
              Name
              <input
                placeholder="value"
                className="py-2 px-4 rounded-lg border w-full mt-2"
              />
            </label>
            <label>
              Surname
              <input
                placeholder="value"
                className="py-2 px-4 rounded-lg border w-full mt-2"
              />
            </label>
            <label>
              Email
              <input
                placeholder="value"
                className="py-2 px-4 rounded-lg border w-full mt-2"
              />
            </label>
            <label>
              Message
              <textarea
                placeholder="value"
                className="py-2 px-4 rounded-lg border w-full mt-2"
              />
            </label>
            <button className="rounded-lg bg-black font-bold text-white p-2">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Banner8;
