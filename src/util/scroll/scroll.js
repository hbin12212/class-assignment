const scrollToMain = () => {
    var about = document.querySelector(".MainComponent").offsetTop;
    window.scroll({
        behavior: "smooth",
        left: 0,
        top: about,
    });
};
const scrollToTeamIntro = () => {
    var about = document.querySelector(".TeamIntroComponent").offsetTop;
    window.scroll({
        behavior: "smooth",
        left: 0,
        top: about,
    });
};
export { scrollToMain, scrollToTeamIntro };
