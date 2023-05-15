const email = "marcibfabisiak123@gmail.com";
const scrollToRef = <T extends HTMLElement>(ref: React.RefObject<T>) => {
  if (ref?.current) {
    window.scrollTo(0, ref.current.offsetTop);
  }
};
const copyEmail = (email: string) => navigator.clipboard.writeText(email);
export { scrollToRef, copyEmail, email };
