import gsap from "gsap";

export const useAnimation = () => {
  const notifyAnimation = (element) => {
    gsap.fromTo(element.current, { scale: 0 }, { duration: 1.5, scale: 1, opacity: 1 });
    gsap.to(element.current, { delay: 1, duration: 1, opacity: 0 });
  };

  return { notifyAnimation };
};
