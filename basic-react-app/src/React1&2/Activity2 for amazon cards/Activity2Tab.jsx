import Activity from "./Activity2.jsx";
import mouseImg from "./mouse.webp";
import pencilImg from "./apple-pencil-1st-generation.avif";
import keyboardImg from "./zebronics-keyboard-mouse-transformer-1000x1000.jpg";
import petroImg from "./51T2MLLTtpL.jpg";

function Activitytab() {
  return (
    <>
      <Activity
        title="Logitech MX Master 3S"
        img={mouseImg}
        li1="8,000 DPI"
        li2="5 programmable Buttons"
        oldp="₹ 12,495"
        newp="₹ 8,999"
      />
      <Activity
        title="Apple Pencil (2nd Gen)"
        img={pencilImg}
        li1="Intuitive touch surface"
        li2="Designed for iPad Pro"
        oldp="₹ 11,900"
        newp="₹ 9,199"
      />
      <Activity
        title="Zebronics Zeb-transformer"
        img={keyboardImg}
        li1="Intuitive touch surface"
        li2="Designed for iPad Pro"
        oldp="₹ 1,599"
        newp="₹ 899"
      />
      <Activity
        title="Petro"
        img={petroImg}
        li1="Wireless Mouse 2.4GHz"
        li2="Optical Orientation"
        oldp="₹ 599"
        newp="₹ 278"
      />
    </>
  );
}
export default Activitytab;
