export const topFunction = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
export const scrollFunction = (scrollButton: React.RefObject<HTMLButtonElement>) => {
    if (scrollButton && scrollButton.current) {
        const buttonElm = scrollButton?.current as HTMLButtonElement;
        if (
            document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            buttonElm.style.display = "block";
        } else {
            buttonElm.style.display = "none";
        }
    }
};