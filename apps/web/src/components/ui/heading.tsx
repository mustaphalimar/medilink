import { TypographyH1 } from "@/Typography/TypographyH1";
interface headingProps {
  title: string;
  description: string;
}

const Heading = ({ title, description }: headingProps) => {
  return (
    <p>
      <TypographyH1>
        <span className="capitalize">{title}</span>
      </TypographyH1>

      <p className="text-lg mt-3 text-gray-700">{description}</p>
    </p>
  );
};

export default Heading;
