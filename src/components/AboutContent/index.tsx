import React from "react";
import { SecIntro } from "../SecIntro";

export const AboutContent = () => {
  return (
    <SecIntro.Root>
      <SecIntro.Title>About</SecIntro.Title>
      <SecIntro.Description>
        This is a simple Next.js app that uses a custom server to generate a
        static site.
      </SecIntro.Description>
    </SecIntro.Root>
  );
};
