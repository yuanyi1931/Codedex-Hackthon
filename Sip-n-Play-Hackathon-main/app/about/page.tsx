import Heading from "../_components/heading";

const About = () => {
  return (
    <div className="flex-col space-y-3">
      <div className="w-full h-[600px] overflow-hidden mb-10">
        <img
          src="/about_pic.png"
          alt="grand opening pic"
          className="w-full h-full object-bottom object-cover"
        />
      </div>
      <div className="mx-auto w-3/4">
        <Heading name="Story" />
        <p className="text-base">
          Founder, Jonathan Li, shares a passion for board games, boba, and
          delicious food, so he combined them all to become Sip & Play, Park
          Slope's first board game cafe. It is a straightforward concept, come
          in with your friends and family to play any board game from our
          library of 300+ games! We hope when you visit, you also enjoy our
          coffee, espresso, boba, sandwiches, and snacks!
        </p>
      </div>
    </div>
  );
};

export default About;
