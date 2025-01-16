
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const items = [
    {
      title: "What Kinds of Services are provided by Kavelogics?",
      content:
        "At Kavelogics, we provide a comprehensive range of services such as: AI Development, Mobile app development, Website development, UI/UX design, and Digital marketing solutions, SEO, and SaaS-based website development.",
    },
    { title: "Accordion Item 2", content: "Content for item 2" },
    { title: "Accordion Item 3", content: "Content for item 3" },
    { title: "Accordion Item 4", content: "Content for item 4" },
    { title: "Accordion Item 5", content: "Content for item 5" },
    { title: "Accordion Item 6", content: "Content for item 6" },
    { title: "Accordion Item 7", content: "Content for item 7" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 pt-10">
      <h1 className="font-bold text-5xl pb-10">Frequently Asked Questions</h1>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
      <button className="bg-green-500 text-white px-4 pt-3 pb-3 font-semibold rounded-lg mt-5">
        Book Consultation
      </button>
    </div>
  );
};

export default Accordion;
