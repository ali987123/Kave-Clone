import PropTypes from "prop-types";
const SectionItems = ({ title, description, imageSrc, link }) => (
    <div className="w-[21.6vw] h-[18vw] max-w-[324px] max-h-[270px] min-w-[300px] min-h-[250px] relative group overflow-hidden">
      <img
        alt={title}
        loading="lazy"
        decoding="async"
        className="absolute h-full w-full object-cover"
        src={imageSrc}
      />
      <div className="absolute inset-0 bg-black bg-opacity-45 transition-opacity duration-500 group-hover:bg-kavelogics-primary group-hover:bg-opacity-70">
        <div className="absolute px-6 py-4 transform transition-transform duration-500 translate-y-[180px] xl:translate-y-[70%] group-hover:translate-y-0 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-white text-[28px] font-bold capitalize leading-tight mb-3">
              {title}
            </h2>
            <p className="opacity-0 group-hover:opacity-100 text-white text-sm leading-6 transition-opacity duration-500">
              {description}
            </p>
          </div>
          <a
            className="text-white text-sm font-bold flex items-center gap-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            href={link}
          >
            Learn More{" "}⟶
           
          </a>
        </div>
      </div>
    </div>
  );
SectionItems.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
  export default SectionItems