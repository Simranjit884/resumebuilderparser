import Link from "next/link";
import { FlexboxSpacer } from "../components/FlexboxSpacer";

export const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:bloxk" />
      <div>
        <h1>
          Create a proffesional
          <br />
          resume easily
        </h1>
        <p>With this powerful resume builder and parser</p>
        <Link href="/resume-import">Create Resume</Link>
        <p>No sign up required</p>
      </div>
    </section>
  );
};
