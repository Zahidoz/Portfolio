"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData, userData } from "@/data/userData";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSide() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each section on scroll
      sectionsRef.current.forEach((section) => {
        if (!section) return;

        const heading = section.querySelector("h2");
        const divider = section.querySelector(".divider");
        const content = section.querySelectorAll(".content-item");

        // Set initial state with more subtle transforms
        gsap.set(heading, {
          opacity: 0,
          y: 20,
        });

        gsap.set(divider, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        gsap.set(content, {
          opacity: 0,
          y: 25,
        });

        // Create timeline for staggered reveal - Framer-style smooth easing
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play none none none",
          },
        });

        tl.to(heading, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
          .to(divider, {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.inOut",
          }, "-=0.5")
          .to(content, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          }, "-=0.4");
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    sectionsRef.current[index] = el;
  };

  return (
    <div ref={containerRef} className="flex-1 flex justify-center px-6 xl:px-0 mt-[100vh] xl:mt-0 relative z-10 bg-secondary py-5">
      <div className="container w-full max-w-[500px] h-full flex flex-col gap-16.5 pt-[78px]">

        <div ref={(el) => addToRefs(el, 0)} className="flex flex-col gap-6">
          <div>
            <h2 className="text-[19px] font-[600] uppercase tracking-[2.1px] mb-[7px]">ABOUT</h2>
            <div className="divider w-full h-0.5 bg-[#1f4c3466]"></div>
          </div>
          <p className="content-item text-[16px]  font-light leading-[22.4px] pr-1 tracking-[.1px]">{userData.about.description}</p>
        </div>

        <div ref={(el) => addToRefs(el, 1)} className="flex flex-col gap-6">
          <div>
            <h2 className="text-[19px] font-[600] uppercase tracking-[2.1px] mb-[7px]">EXPERIENCE</h2>
            <div className="divider w-full h-0.5 bg-[#1f4c3466]"></div>
          </div>
          {
            userData.experience.map((exp, idx) => (
              <div key={idx} className="content-item flex flex-col gap-[9px]">
                <h3 className="text-[18px] font-[500] mt-0.5 leading-[19px] tracking-[.2px]">{exp.title}</h3>
                <h4 className="text-[16px] font-[400] tracking-[.1px]">{exp.subtitle}</h4>
                <p className="text-[16px]  font-light leading-[22.4px] pr-1 tracking-[.1px]">{exp.description}</p>
              </div>

            ))
          }
        </div>
        
         <div className="flex flex-col gap-10 xl:gap-6">
          <div>
            <h2 className="text-[19px] font-[600] uppercase tracking-[2.1px] mb-[7px]">FEATURED PROJECTS</h2>
            <div className="w-full h-0.5 bg-[#1f4c3466]"></div>
          </div>
          {
            projectsData.map((project, idx) => (
              <div key={idx} className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-[9px]">
                <a href={project.url} className="w-full h-auto xl:w-50 xl:min-w-60 xl:h-36.5 rounded-xl overflow-hidden" target="_blank" rel="noopener noreferrer">
                  <img className="w-full h-full object-cover hover:scale-102 transition-transform duration-300" src={project.thumbail} alt={project.title} />
                </a>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-[18px] font-[500] mt-0.5 leading-[19px] tracking-[.2px]">{project.title}</h3>
                  <p className="text-[16px]  font-light leading-[22.4px] pr-1 tracking-[.1px]">{project.subtitle}</p>
                </div>
              </div>

            ))
          }
        </div>

        <div ref={(el) => addToRefs(el, 2)} className="flex flex-col gap-6">
          <div>
            <h2 className="text-[19px] font-[600] uppercase tracking-[2.1px] mb-[7px]">EDUCATION</h2>
            <div className="divider w-full h-0.5 bg-[#1f4c3466]"></div>
          </div>
          {
            userData.education.map((edu, idx) => (
              <div key={idx} className="content-item flex flex-col gap-[9px]">
                <h3 className="text-[18px] font-[500] mt-0.5 leading-[19px] tracking-[.2px]">{edu.title}</h3>
                <h4 className="text-[16px] font-[400] tracking-[.1px]">{edu.subtitle}</h4>
              </div>

            ))
          }
        </div>

        <div ref={(el) => addToRefs(el, 3)} className="flex flex-col gap-6">
          <div>
            <h2 className="text-[19px] font-[600] uppercase tracking-[2.1px] mb-[7px]">SKILLS</h2>
            <div className="divider w-full h-0.5 bg-[#1f4c3466]"></div>
          </div>
          <div className="flex flex-col gap-4">
            {
              userData.skills.map((skill, idx) => (
                <div key={idx} className="content-item">
                  <p className="text-[16px]  font-light leading-[22.4px] pr-1 tracking-[.1px]"><span className="font-[600]">{skill.title}</span> {skill.subtitle}</p>
                </div>

              ))
            }
          </div>
        </div>

        <div ref={(el) => addToRefs(el, 4)} className="flex flex-col gap-6">
          <div>
            <h2 className="text-[19px] font-[600] uppercase tracking-[2.1px] mb-[7px]">CONTACT DETAILS</h2>
            <div className="divider w-full h-0.5 bg-[#1f4c3466]"></div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="content-item">
              <p className="text-[16px]  font-light leading-[22.4px] pr-1 tracking-[.1px]"><span className="font-[600]">{userData.contactDetails.email}</span></p>
            </div>
            <div className="content-item">
              <p className="text-[16px]  font-light leading-[22.4px] pr-1 tracking-[.1px]"><span className="font-[600]">{userData.contactDetails.phone}</span></p>
            </div>
          </div>
        </div>

        <div ref={(el) => addToRefs(el, 5)} className="flex flex-col gap-6">
          <div>
            <h2 className="text-[19px] font-[600] uppercase tracking-[2.1px] mb-[7px]">LOCATION</h2>
            <div className="divider w-full h-0.5 bg-[#1f4c3466]"></div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="content-item">
              <p className="text-[16px]  font-light leading-[22.4px] pr-1 tracking-[.1px]"><span className="font-[600]">{userData.location}</span></p>
            </div>
            <div >
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
