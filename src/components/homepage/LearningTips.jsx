"use client";

import { Card } from "@heroui/react";
import { motion } from "motion/react";
import {
  BiTimeFive,
  BiBrain,
  BiTargetLock,
  BiCoffeeTogo,
} from "react-icons/bi";

const LearningTips = () => {
  const tips = [
    {
      title: "The Pomodoro Technique",
      description:
        "Study for 25 minutes, then take a 5-minute break. This keeps your brain fresh and prevents burnout during long coding sessions.",
      icon: <BiTimeFive className="text-2xl text-orange-500" />,
      bg: "bg-orange-50",
    },
    {
      title: "Active Recall",
      description:
        "Instead of just re-reading notes, try to summarize what you learned from memory. It strengthens neural pathways and improves retention.",
      icon: <BiBrain className="text-2xl text-[#3B7597]" />,
      bg: "bg-blue-50",
    },
    {
      title: "Micro-Learning Goals",
      description:
        "Don't try to learn everything at once. Set one small goal per day, like 'Understanding Map vs Filter', to maintain consistent progress.",
      icon: <BiTargetLock className="text-2xl text-teal-500" />,
      bg: "bg-teal-50",
    },
    {
      title: "Teach to Learn",
      description:
        "Explain a complex concept to a friend or even an inanimate object. If you can explain it simply, you've truly mastered it.",
      icon: <BiCoffeeTogo className="text-2xl text-purple-500" />,
      bg: "bg-purple-50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto ">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl text-[#093C5D] mb-4">
              Master the Art of Learning
            </h2>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              Success isn't just about working hard; it's about working smart.
              Use these techniques to accelerate your skill acquisition.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="h-full"
            >
              <Card className="h-full border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-gray-50 group">
                <div className="p-8 flex flex-col items-start gap-5">
                  <div
                    className={`p-4 rounded-2xl ${tip.bg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    {tip.icon}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#093C5D]">
                      {tip.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LearningTips;
