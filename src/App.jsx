import { useEffect, useRef, useState } from "react";
import timelineVideo from "./assets/timlinevideo.mp4";
import ScrollSpy from "react-ui-scrollspy";
import Timelinesectionimg from "./assets/homecare.webp";
import "./app.scss";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

function TimelineVideo() {
  const videoRef = useRef(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const percentage = latest / window.innerHeight;
    if (videoRef.current) {
      videoRef.current.currentTime =
        videoRef.current.duration * percentage * 0.3;
    }
  });

  return (
    <>
      <section className="timeline__video__container">
        <div className="timeline__video__holder">
          <motion.video
            ref={videoRef}
            muted
            playsInline
            className="timeline__video__container__video"
            src={timelineVideo}
          ></motion.video>
        </div>
      </section>
      <OurHistory />
    </>
  );
}

export default TimelineVideo;

export function OurHistory() {
  const Data = [
    {
      year: 1970,
      heading: "The Dawn of a ",
      subheading: "Flavor Pioneer",
      info: "Mr Victor Koh exceptional sensory talent was recognised by Bush Boake Allen (BBA), and he became the first Flavorist in Singapore and South East Asia. His background and capabilities led to the first creation of the world’s Pandan, Durian and various other flavors. He was tapped to be the Principal Flavorist of BBA.",
      img: Timelinesectionimg,
      id: 1,
    },
    {
      year: 1980,
      heading: " Ascending to ",
      subheading: "New Heights",
      info: "His tenure at BBA (later integrated into IFF) is marked by legendary status, lauded by the CEO of BBA to be the best creative Flavorist of his time. This culminated in his role to lead the Flavor Division at Haarmann & Reimer where he introduced iconic tropical flavors like Guava and Gula Melaka. These flavors forge a bridge between East and West, establishing new culinary standards. Haarmann & Reimer eventually merges with Dragoco and is today known as Symrise AG.",
      img: Timelinesectionimg,
      id: 2,
    },
    {
      year: 1989,
      heading: "Founding VK with ",
      subheading: "Vision",
      info: "Motivated by a vision to revolutionize flavor choices, Victor Koh establishes VK Aromatics International and Creative Flavours Fragrances. Rooted in the principles of authenticity (REAL TASTE) and value (V.F.M Flavors), VK challenges the status quo, introducing a new era of flavor diversity and depth that resonates across culinary landscapes.",
      img: Timelinesectionimg,
      id: 3,
    },
    {
      year: 1990,
      heading: "Seizing the Southeast ",
      subheading: "Asian Palate",
      info: "VK becomes synonymous with innovation, igniting the Wintermelon Flavor phenomenon in Taiwan in 1993. This success underpins expansion across Southeast Asia, with strategic moves into the Philippines and Malaysia to meet the growing demand for VK's groundbreaking Vanilla Flavors.",
      img: Timelinesectionimg,
      id: 4,
    },
    {
      year: 1996,
      heading: "VK Sets Foot in",
      subheading: "the Philippines",
      info: "VK marked a milestone by establishing its presence in the Philippines, reinforcing its dedication to exploring and integrating the rich flavors of Southeast Asia. This strategic move enabled VK to work closely with local markets, tailoring flavors that resonate with the Filipino palate and cultural culinary heritage.",
      img: Timelinesectionimg,
      id: 5,
    },
    {
      year: 1998,
      heading: "VK's Venture ",
      subheading: "into Malaysia",
      info: "Expanding further, VK opened manufacturing units in Johor Bahru, Malaysia, focusing on the innovative production of Vanilla Flavors. This strategic location not only facilitated access to prime resources but also underscored VK's commitment to excellence and innovation in the flavor industry within the Southeast Asian region.",
      img: Timelinesectionimg,
      id: 6,
    },
    {
      year: 1998,
      heading: "VK ",
      subheading: "Australia",

      info: "VK's foray into Australia marks a significant milestone, demonstrating the universal appeal of VK Flavors. This period is also defined by a commitment to natural flavor research, meeting the consumer's growing preference for authenticity.",
      img: Timelinesectionimg,
      id: 7,
    },
    {
      year: 2000,
      heading: "The Vanilla ",
      subheading: "Revolution",

      info: "A decade of research culminates in the launch of a revolutionary Vanilla Flavor range. Vanilla Flavors predominantly relied on Vanillin as a raw material. Mr Victor Koh created a new range of Vanilla Flavors created from a different structure. These flavors, heralded for their innovation, quickly rise to prominence, reinforcing VK's reputation as a flavor innovator.",
      img: Timelinesectionimg,
      id: 8,
    },
    {
      year: 2010,
      heading: " Embracing the ",
      subheading: "Pacific",

      info: "The demand for VK flavors extended to the remote Pacific Islands, including Mauritius, illustrating the global demand for unique and quality-driven flavors.",
      img: Timelinesectionimg,
      id: 9,
    },
    {
      year: 2021,
      heading: "A New Era of ",
      subheading: "Leadership",

      info: "Augustine Koh, embracing the legacy of innovation and excellence creates VKA Creative International to continue this legacy. His leadership marks the beginning of a new chapter, with a focus on sustaining the pioneering spirit and expanding VK's horizons.",
      img: Timelinesectionimg,
      id: 10,
    },
    {
      year: 2022,
      heading: " The Birth of ",
      subheading: "VKA-AFF",

      info: "Augustine Koh saw the need to marry cutting-edge technology with five decades of artisanal flavor crafting. A strategic merger with Advanced Flavors & Fragrances ushers in the VKA-AFF era. This collaboration not only diversifies the product range but also inaugurates an R&D Centre with cutting-edge tools and an Automated Flavor Production facility at JTC Food Hub @ Senoko, showcasing a commitment to innovation and sustainability.",
      img: Timelinesectionimg,
      id: 11,
    },
    {
      year: 2023,
      heading: "Technological ",
      subheading: "Milestones",

      info: "With investments in Spray Drying Technology, VKA-AFF introduces spray-dried VK Flavors, a testament to the brand's innovative edge. This advancement offers new applications and stability for flavors, cementing VKA-AFF's status as an industry pioneer.",
      img: Timelinesectionimg,
      id: 12,
    },
  ];
  const scrollToSection = (e, offset = 0) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.split("#")[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      let yOffset = 0;
      if (window.innerWidth >= 1220) {
        yOffset = -150; // For widths 1024px and above
      } else if (window.innerWidth >= 950) {
        yOffset = -195;
      } else {
        yOffset = -250;
      }
      const y =
        targetElement.getBoundingClientRect().top +
        window.scrollY +
        yOffset -
        offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="Timeline__Section">
        <div className="Timeline_Section_content">
          <div className="Timeline_Sectioncontentleft_main">
            <div className="Timeline_Sectioncontentleftmain_content">
              {Data.map((item) => {
                return (
                  <div key={item.id} className="Timeline_Sectioncontent_left">
                    <a
                      onClick={(e) => scrollToSection(e)}
                      href={`#${item.id}`}
                      className="Timeline_Sectioncontentleft_content"
                    >
                      <div
                        data-to-scrollspy-id={item.id}
                        className="Timeline_Sectioncontentleftcontent_heading"
                      >
                        {item.year}
                      </div>
                      <div className="Timeline_Sectioncontentleftcontent_dot"></div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="Timeline_Sectioncontent_right">
            <ScrollSpy
              scrollThrottle={10}
              useBoxMethod={false}
              offsetTop={-250}
            >
              {Data.map((item) => {
                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className="Timeline_Sectioncontentright_content"
                  >
                    <div className="Timeline_Sectioncontentrightcontent_subheading">
                      <div className="Timeline_Sectioncontentrightcontent_subheading">
                        {item.year}
                      </div>
                    </div>
                    <div className="Timeline_Sectioncontentrightcontent_heading">
                      {item.heading}
                      <span className="Timeline_Sectioncontentrightcontentheading_span">
                        {item.subheading}
                      </span>
                    </div>
                    <div className="Timeline_Sectioncontentrightcontent_info">
                      {item.info}
                    </div>
                    <img
                      src={Timelinesectionimg}
                      alt="Timelinesectionimg"
                      className="Timeline_Sectioncontentrightcontent_img"
                    />
                  </div>
                );
              })}
            </ScrollSpy>
          </div>
        </div>
      </div>
    </>
  );
}
