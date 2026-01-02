"use client";
import { motion, useScroll } from "framer-motion";

export default function ArticleSection({ children }: { children: React.ReactNode }) {
    const {scrollYProgress} = useScroll()
    console.log(scrollYProgress)
  return (
       <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}    
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mb-12"
    >
      {children}
    </motion.section>
  );
}
