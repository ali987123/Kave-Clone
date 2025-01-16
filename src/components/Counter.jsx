const stats = [
  { value: "100%", description: "Client Satisfaction" },
  { value: "80+", description: "Happy Clients" },
  { value: "100%", description: "On-Time Delivery" },
  { value: "65", description: "Projects Delivered" },
];

const Counter = () => {
  return (
    <div className="w-full py-8 grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-4 place-items-center bg-gradient-to-r from-blue-950 via-blue-700 to-blue-950 text-white">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 sm:gap-4 max-w-[170px] text-center"
        >
          <h2 className="text-green-500 font-bold text-2xl sm:text-3xl">
            {stat.value}
          </h2>
          <p className="text-sm sm:text-base font-bold">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
