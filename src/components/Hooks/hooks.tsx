import { useState, useEffect } from "react";
const useScroll = (skillref: React.MutableRefObject<null>) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    let YPosition;
    if (skillref.current) {
      YPosition = (skillref.current as HTMLElement).getBoundingClientRect().top;
    }
    const offset = window.scrollY;
    if (YPosition !== undefined && offset > YPosition) {
      return setScrolled(true);
    } else {
      return setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return [scrolled];
};

const useChangeCopiedStateToDefaultAfter = (time: number) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, time);
    return () => clearTimeout(timeout);
  }, [copied, time]);
  return [copied, setCopied] as const;
};
export { useChangeCopiedStateToDefaultAfter, useScroll };
