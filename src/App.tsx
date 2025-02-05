import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer"; // Import scroll detection hook
import Counter from "./components/Counter";
import DataForm from "./components/DataForm";
import Form from "./components/Form";
import RichTextEditor from "./components/RichTextEditor";
import Header from "./components/Header";
import { SignIn } from "./components/SignIn";

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const [formData, setFormData] = useState({
    address: "",
    email: "",
    contactNumber: "",
    countryCode: "+91",
  });

  const handleSignInToggle = () => {
    setIsSignInOpen((prev) => !prev);
  };

  const [counterRef, counterInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const counterAnimation = useSpring({
    opacity: counterInView ? 1 : 0,
    scale: counterInView ? 1 : 0.8,
    config: { tension: 150, friction: 10 },
  });

  // Scroll detection for Forms
  const [formRef, formInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const formAnimation = useSpring({
    opacity: formInView ? 1 : 0,
    transform: formInView ? "translateY(0px)" : "translateY(20px)",
    config: { tension: 120, friction: 14 },
  });

  return (
    <div className="bg-white overflow-x-hidden  pb-8">
      <Header onSignInClick={handleSignInToggle} />
      {isSignInOpen && <SignIn onClose={() => setIsSignInOpen(false)} />}
      <div className="grid mt-16 sm:px-8 px-4 min-h-[82vh] grid-cols-1 w-full lg:h-[54rem] md:h-[34rem] bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
        <div className="sm:px-4 px-1 text-center">
          <animated.div
            ref={counterRef}
            className="flex sm:flex-row flex-col justify-center items-center gap-8"
            style={counterAnimation}
          >
            <Counter />
            <RichTextEditor />
          </animated.div>

          <animated.div
            ref={formRef}
            className="flex mt-5 pb-4 sm:flex-row flex-col justify-center items-center gap-8"
            style={formAnimation}
          >
            <DataForm formData={formData} />
            <Form formData={formData} setFormData={setFormData} />
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default App;
