const Footer = () => {
  return (
    <footer className="mt-52">
      <div className="flex flex-col md:flex-row justify-between md:items-end px-5">
        <h5 className="text-4xl lg:text-6xl max-w-[600px] font-roboto">
          Overtuigd van de nummer 1 in Noord Holland ?
        </h5>
        <h1 className="text-6xl mt-10 md:mt-0 lg:text-[250px] lg:leading-[200px]  font-nobile font-bold">
          GMK
        </h1>
      </div>
      <div className="flex flex-col gap-10 md:flex-row justify-between px-5 mt-10 mb-10 font-actor text-lg">
        <p>
          GMK Dakonderhoud B.V. <br />
          Leidsekade 57 1016 CX Amsterdam
        </p>
        <p>
          info@dakonderhoudgmk.nl <br />
          (020) 26 12 257
        </p>
        <p>
          Privacy verklaring <br />
          Algemene Voorwaarden
        </p>
        <p>
          (C) MMXXIV GMK Dakonderhoud B.V. <br />
          Concept by Nakatori Amsterdam
        </p>
      </div>
    </footer>
  );
};

export default Footer;
