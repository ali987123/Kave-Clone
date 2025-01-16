

const Footer1 = () => {
  return (
    <div className="mx-auto bg-blue-950 rounded-t-2xl mt-[5rem]">
      <div className=" md:max-w-[734px] lg:max-w-[1200px] md:flex gap-5 px-4 py-[52px] md:px-[18px] md:py-[33px] lg:px-[64px] lg:pt-[58px] lg:pb-[77px] text-white/[98] rounded-t-[16px] bg-calltoaction_mobile md:bg-calltoaction_tablet lg:bg-calltoaction_desktop bg-no-repeat bg-cover">
        <div className="">
          <h1 className="text-[28px] lg:text-4xl text-white">Ready to boost your businesses?</h1>
          <p className="p1 mt-5 mb-10 text-white text-left font-semibold">
            Elevate your business with advanced technologies, expert insights, and unmatched support for a brighter future.
          </p>
          <a
            className="place-self-center custom-button bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-bold transition duration-300 pt-4 pb-4"
            href="/contact-us"
          >
            Schedule Free Consultation
          </a>
        </div>
        <img
          alt="call-to-action"
          loading="lazy"
          width="1200"
          height="1200"
          decoding="async"
          className="w-[240px] mx-auto h-auto mt-[85px] md:place-self-auto md:mt-0 md:w-[330px] lg:w-[380px] lg:mt-[-110px]"
          style={{ color: 'transparent' }}
          srcSet="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/707e3d37-8f7d-4a31-40cb-c827cd3b3e00/w=1200,q=75 1x, https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/707e3d37-8f7d-4a31-40cb-c827cd3b3e00/w=3840,q=75 2x"
          src="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/707e3d37-8f7d-4a31-40cb-c827cd3b3e00/w=3840,q=75"
        />
      </div>
    </div>
  );
};

export default Footer1;
