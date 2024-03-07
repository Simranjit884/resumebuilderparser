import { FlexboxSpacer } from "../components/FlexboxSpacer";

export const Hero = () => {
  return (
    <section className="lg:flex lg:h-[825px] lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:bloxk" />
    </section>
  );
};
