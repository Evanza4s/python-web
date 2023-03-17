import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-sky before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-violet before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-purple"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        href="#intro"
        className={`${
          selectedPage === "intro" ? selectedStyles : "bg-purple"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("intro")}
      />

      <AnchorLink
        href="#type"
        className={`${
          selectedPage === "type" ? selectedStyles : "bg-purple"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("type")}
      />

      <AnchorLink
        href="#code"
        className={`${
          selectedPage === "code" ? selectedStyles : "bg-purple"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("code")}
      />

      <AnchorLink
        href="#profile"
        className={`${
          selectedPage === "profile" ? selectedStyles : "bg-purple"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("profile")}
      />

    </div>
  );
};

export default DotGroup;