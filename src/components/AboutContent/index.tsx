"use client";
import React, { useEffect, useRef } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { SecIntro } from "../SecIntro";
import { appFadeInUp } from "@/utils/framerMotion";

export const AboutContent = () => {
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <AnimatePresence>
      <LayoutGroup>
        <motion.div
          ref={ref}
          variants={appFadeInUp}
          initial="hidden"
          animate={control}
          exit="exit"
        >
          <SecIntro.Root>
            <SecIntro.Title>About</SecIntro.Title>
            <SecIntro.Description>
              This is a simple Next.js app that uses a custom server to generate
              a static site.
            </SecIntro.Description>
          </SecIntro.Root>
        </motion.div>
      </LayoutGroup>
    </AnimatePresence>
  );
};
