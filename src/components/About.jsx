import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";

const ServiceCard = ( {index, title, icon} ) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">

        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
                  flex justify-evenly items-center flex-col"
        >
            <img src={icon} alt="{title}" className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introcution</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px]
                          max-w-3xl leading-[30px]">
       <p className="mb-2">I'm a Software Developer with a flair for Frontend sorcery and Graphic Design wizardry. I sprinkle pixels, slay bugs, and turn caffeine into code. <br /></p>
        When I'm not busy wrestling with <strong>&lt;code&gt;</strong>tags<strong>&lt;/code&gt;</strong> and <strong>&lt;style&gt;</strong>Sheets<strong>&lt;/style&gt;</strong>, I'm capturing the world through my trusty lens.
        Photography is my jam, I can make a rusty doorknob look like a rockstar. Oh, and did I mention I'm a sports enthusiast? I run like a cheetah on fire (or at least I like to think so). <br />
        <p className="mt-2">I'm all about creating kick-ass websites and spreading good vibes. If you're as passionate about tech as I am, and you don't mind a dash of glitter in your code, let's team up and make some digital magic.</p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")