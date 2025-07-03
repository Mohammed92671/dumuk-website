import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import iframeMaskGroup from "./iframe-mask-group.svg";
import lvuxbd2tlh0pe3nsmqvz9zelzkSvg from "./lvuxbd2tlh0pe3nsmqvz9zelzk-svg.svg";
import maskGroup from "./mask-group.svg";

const backgroundImages = [
  {
    className:
      "absolute w-[437px] h-[490px] top-[-77px] left-[1498px] rotate-[-57.00deg] blur-[5.5px]",
    style: { backgroundImage: "url(/g8s0h58s2ut2gybj2iglzzdeda0-png-3.png)" },
  },
  {
    className:
      "absolute w-[254px] h-64 top-[86px] left-[199px] rotate-[26.00deg] blur-[3.5px]",
    style: { backgroundImage: "url(/g8s0h58s2ut2gybj2iglzzdeda0-png-4.png)" },
  },
  {
    className:
      "absolute w-[254px] h-64 top-[970px] left-[1751px] rotate-[-6.00deg] blur-[3.5px]",
    style: { backgroundImage: "url(/g8s0h58s2ut2gybj2iglzzdeda0-png-5.png)" },
  },
  {
    className:
      "absolute w-[331px] h-[330px] top-[832px] left-[26px] rotate-[96.00deg] blur-[3.5px]",
    style: { backgroundImage: "url(/g8s0h58s2ut2gybj2iglzzdeda0-png.png)" },
  },
  {
    className:
      "absolute w-36 h-[149px] top-[1078px] left-[600px] rotate-[-141.00deg] blur-[2px]",
    style: { backgroundImage: "url(/image.png)" },
  },
  {
    className:
      "absolute w-36 h-[149px] top-[161px] left-[388px] rotate-[-40.00deg] blur-[2px]",
    style: { backgroundImage: "url(/g8s0h58s2ut2gybj2iglzzdeda0-png-2.png)" },
  },
];

const ElementLight = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Pre-registration submitted with email:", email);
  };

  return (
    <div className="flex flex-col w-[1920px] h-[1224px] items-start relative bg-white bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(28,38,26,1)_100%)]">
      <main className="flex flex-col min-h-[1200px] items-center px-5 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(28,38,26,1)_100%)]">
        <div className="flex flex-col max-w-[1920px] w-[1200px] h-[1200px] items-center justify-center gap-[15px] relative">
          <img
            className="relative w-52 h-52"
            alt="Energy logo"
            src={maskGroup}
          />

          <section className="relative w-[1200px] h-[142.08px]">
            <div className="absolute w-[1200px] h-[86px] top-0 left-0">
              <div className="flex flex-col w-[1200px] items-center absolute top-0 left-0">
                <h1 className="relative w-fit mt-[-1.00px] font-big-customers-515674-framer-app-semantic-strong font-[number:var(--big-customers-515674-framer-app-semantic-strong-font-weight)] text-black text-[length:var(--big-customers-515674-framer-app-semantic-strong-font-size)] text-center tracking-[var(--big-customers-515674-framer-app-semantic-strong-letter-spacing)] leading-[var(--big-customers-515674-framer-app-semantic-strong-line-height)] whitespace-nowrap [font-style:var(--big-customers-515674-framer-app-semantic-strong-font-style)]">
                  Something powerful is charging...
                </h1>
              </div>

              <div className="flex flex-col w-[1200px] items-center absolute top-[35px] left-0">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Light',Helvetica] font-light text-white text-2xl text-center tracking-[-0.24px] leading-[50.4px] whitespace-nowrap">
                  A new era of energy is coming. Be the first to feel it.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-[1200px] items-center absolute top-[110px] left-0">
              <h2 className="relative w-fit mt-[-1.00px] font-big-customers-515674-framer-app-semantic-heading-2 font-[number:var(--big-customers-515674-framer-app-semantic-heading-2-font-weight)] text-white text-[length:var(--big-customers-515674-framer-app-semantic-heading-2-font-size)] text-center tracking-[var(--big-customers-515674-framer-app-semantic-heading-2-letter-spacing)] leading-[var(--big-customers-515674-framer-app-semantic-heading-2-line-height)] whitespace-nowrap [font-style:var(--big-customers-515674-framer-app-semantic-heading-2-font-style)]">
                Pre-registration open.
              </h2>
            </div>
          </section>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-w-[1200px] w-[280px] items-start gap-2.5 relative flex-[0_0_auto]"
          >
            <Input
              type="email"
              placeholder="name@framer.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-10 bg-[#eeeeee] rounded-[10px] text-[#999999] font-big-customers-515674-framer-app-semantic-input font-[number:var(--big-customers-515674-framer-app-semantic-input-font-weight)] text-[length:var(--big-customers-515674-framer-app-semantic-input-font-size)] tracking-[var(--big-customers-515674-framer-app-semantic-input-letter-spacing)] leading-[var(--big-customers-515674-framer-app-semantic-input-line-height)] [font-style:var(--big-customers-515674-framer-app-semantic-input-font-style)]"
            />

            <Button
              type="submit"
              className="h-10 w-full bg-black rounded-[10px] font-big-customers-515674-framer-app-semantic-button font-[number:var(--big-customers-515674-framer-app-semantic-button-font-weight)] text-white text-[length:var(--big-customers-515674-framer-app-semantic-button-font-size)] tracking-[var(--big-customers-515674-framer-app-semantic-button-letter-spacing)] leading-[var(--big-customers-515674-framer-app-semantic-button-line-height)] [font-style:var(--big-customers-515674-framer-app-semantic-button-font-style)] h-auto"
            >
              Pre-register
            </Button>
          </form>
        </div>

        {backgroundImages.map((image, index) => (
          <div key={`bg-image-${index}`} className={image.className}>
            <div className="flex flex-col w-full h-full items-start justify-center relative">
              <div
                className="relative flex-1 self-stretch w-full grow bg-cover bg-[50%_50%]"
                style={image.style}
              />
            </div>
          </div>
        ))}

        <header className="flex flex-col w-[1920px] h-[68px] items-start justify-center absolute top-0 left-0">
          <div className="flex items-center px-0 py-0.5 relative self-stretch w-full flex-[0_0_auto] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] bg-[linear-gradient(270deg,rgba(255,247,247,0.1)_0%,rgba(59,59,59,0.15)_100%)]">
            <div className="inline-flex items-center justify-center pl-1 pr-0 py-2.5 relative flex-[0_0_auto]">
              <div className="relative w-[47px] h-11">
                <div className="flex flex-col w-[47px] items-start justify-center relative">
                  <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
                    <div className="flex flex-col w-[47px] h-11 items-center justify-center px-[3.53px] py-0 relative">
                      <img
                        className="relative w-[39.94px] h-11"
                        alt="Company logo"
                        src={lvuxbd2tlh0pe3nsmqvz9zelzkSvg}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute w-[1920px] h-[68px] top-0 left-0 border-b [border-bottom-style:solid] border-[#bab8b8]" />
            <div className="absolute w-[1920px] h-px top-[67px] left-0 bg-[#00000014]" />
          </div>
        </header>
      </main>

      <img
        className="absolute w-[1910px] h-[1200px] top-0 left-0"
        alt="Background overlay"
        src={iframeMaskGroup}
      />

      <div className="fixed w-[1920px] h-[76px] top-[1148px] left-0" />
    </div>
  );
};

export default ElementLight;
