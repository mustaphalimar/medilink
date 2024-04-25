import { TypographyH1 } from "@/Typography/TypographyH1";
interface headingProps {
  title: string;
  description: string;
}

const Heading = ({ title, description }: headingProps) => {
  return (
    <>
      <TypographyH1>{title}</TypographyH1>
      <p className="text-lg mt-3 text-gray-700">{description}</p>
    </>
  );
};

export default Heading;
