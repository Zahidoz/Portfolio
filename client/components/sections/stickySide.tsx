"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { userData } from "@/data/userData";

export default function StickySide() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLImageElement>(null);
  const specialityRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split name into words for animation
      if (nameRef.current) {
        const words = nameRef.current.innerText.split(" ");
        nameRef.current.innerHTML = words
          .map((word) => `<span class="word inline-block overflow-hidden"><span class="word-inner inline-block">${word}</span></span>`)
          .join(" ");
        
        const wordInners = nameRef.current.querySelectorAll(".word-inner");
        gsap.set(wordInners, { y: "100%" });
        
        gsap.to(wordInners, {
          y: "0%",
          duration: 1.2,
          stagger: 0.08,
          ease: "power4.out",
          delay: 0.3,
        });
      }

      // Image reveal with clip-path
      gsap.set(imageRef.current, { 
        clipPath: "inset(100% 0% 0% 0%)",
      });
      gsap.set(imageInnerRef.current, {
        scale: 1.3,
      });

      gsap.to(imageRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.4,
        ease: "power4.inOut",
        delay: 0.5,
      });
      gsap.to(imageInnerRef.current, {
        scale: 1,
        duration: 1.8,
        ease: "power3.out",
        delay: 0.5,
      });

      // Split speciality into words
      if (specialityRef.current) {
        const html = specialityRef.current.innerHTML;
        const parts = html.split(/<br\s*\/?>/i);
        
        specialityRef.current.innerHTML = parts
          .map((part) => {
            const words = part.trim().split(" ");
            return words
              .map((word) => `<span class="word inline-block overflow-hidden"><span class="word-inner inline-block">${word}</span></span>`)
              .join(" ");
          })
          .join("<br/>");

        const wordInners = specialityRef.current.querySelectorAll(".word-inner");
        gsap.set(wordInners, { y: "100%" });
        
        gsap.to(wordInners, {
          y: "0%",
          duration: 1,
          stagger: 0.05,
          ease: "power4.out",
          delay: 1.2,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="xl:flex-1 w-full py-16 xl:py-0 fixed xl:sticky top-0 left-0 xl:left-auto h-screen z-0 bg-primary text-secondary flex flex-col gap-6 md:gap-11 items-center justify-center"
    >
      <h1 ref={nameRef} className="text-5xl md:text-6xl lg:text-7xl text-center px-5">{userData.fullName}</h1>
      <div ref={imageRef} className="w-[266px] h-[405px] lg:w-[295px] lg:h-[450px] overflow-hidden">
        <img ref={imageInnerRef} className="w-full h-full object-cover" src={userData.profilePicture} alt="" />
      </div>
      <h2 ref={specialityRef} className="text-2xl md:text-3xl lg:text-4xl text-center leading-tight tracking-wide" dangerouslySetInnerHTML={{ __html: userData.speciality }} />
    </div>
  )
}
