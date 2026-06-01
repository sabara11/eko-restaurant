import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../Hero/Hero";
import Customer from "../../assets/customer_1.jpeg";

const Testimonal = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">

          {/* Image Section */}
          <div className="relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute h-[260px] w-[260px] sm:h-[330px] sm:w-[330px] md:h-[390px] md:w-[390px] rounded-full bg-[var(--color-lightYellow)]"
            />

            <motion.img
              initial={{ opacity: 0, x: -80, y: 60 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ scale: 1.06, rotate: 3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              src={Customer}
              alt="customer"
              className="relative z-10 w-[220px] sm:w-[280px] md:w-[330px] lg:w-[360px] rounded-3xl object-cover shadow-2xl"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left max-w-[500px] space-y-6">
            <motion.p
              variants={slideUp(0.3)}
              initial="hidden"
              whileInView="show"
              className="text-sm uppercase tracking-[0.3em] text-darkGreen font-semibold"
            >
              Customer Love
            </motion.p>

            <motion.h1
              variants={slideUp(0.5)}
              initial="hidden"
              whileInView="show"
              className="text-4xl md:text-5xl uppercase font-semibold font-leagueGothic leading-tight"
            >
              Feedback from our EKO-ites
            </motion.h1>

            <motion.div
              variants={slideUp(0.8)}
              initial="hidden"
              whileInView="show"
              className="relative bg-white/70 backdrop-blur-md shadow-xl rounded-3xl p-6 border border-yellow-100"
            >
              <span className="absolute -top-8 left-6 text-7xl text-lightYellow font-serif">
                “
              </span>

              <p className="text-lg font-serif leading-relaxed relative z-10">
                This is my fifth time here. I'm from NY, but EKO never misses!
                The egusi was rich and satisfying, and the jollof rice was
                perfectly seasoned. Definitely coming back.
              </p>

              <div className="mt-5">
                <p className="font-semibold text-darkGreen">— Jake Tommy</p>
                <p className="text-sm text-gray-500">New York, USA</p>
              </div>
            </motion.div>

            <motion.p
              variants={slideUp(1.1)}
              initial="hidden"
              whileInView="show"
              className="text-sm text-gray-600 leading-relaxed"
            >
              Every plate tells a story of culture, flavor, and tradition,
              crafted to create unforgettable memories with every bite.
            </motion.p>

            <motion.button
              variants={slideUp(1.3)}
              initial="hidden"
              whileInView="show"
              className="btn-primary mx-auto md:mx-0 block"
            >
              Order Now
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonal;