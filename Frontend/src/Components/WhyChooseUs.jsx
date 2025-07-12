import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { PackageOpen, Handshake, Headset, Sparkles, HeartPlus } from 'lucide-react';


const features = [
  "On-time Delivery",
  "Long-term Partnership",
  "Dedicated Support",
  "Cost Effective",
  "24/7 Availability",
];

const f = [

  {
    id: 1,
    title: "On-time Delivery",
    decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    icon: <PackageOpen />,
  },
  {
    id: 2,
    title: "Long-term Partnership",
    decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    icon: <Handshake />
  },
  {
    id: 3,
    title: "Dedicated Support",
    decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    icon: <HeartPlus />
  },
  {
    id: 4,
    title: "Cost Effective",
    decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    icon: <Sparkles />
  },
  {
    id: 5,
    title: "Customer-Support 24/7",
    decription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    icon: <Headset />
  }
]

const WhyChooseUs = () => {
  return (
    <section className="bg-black py-24 px-10 md:px-20 text-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          <span className="text-purple-700 tracking-wide">Feelize </span> deliver seamless digital experience <br />
          and connect people to technology
        </h2>

        <p className="text-gray-400 mb-12 max-w-52 md:max-w-2xl mx-auto text-lg tracking-wide">
          We’re not just coders — we’re your partners. Here’s why clients love working with us:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 md:px-10 py-14 gap-x-3 gap-y-28 sm:gap-x-20 md:gap-x-32">
          {f?.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              // className="flex items-start gap-4 rounded-xl p-6 hover:shadow-lg transition"
              className="grid gap-y-10"
            >
              <h1 className="text-left">{feature.icon}</h1>
              <p className="text-left"><span className="text-purple-700 font-bold pr-1">{feature.title}</span>{feature.decription}</p>
              <div className="border-b border-b-gray-800"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
