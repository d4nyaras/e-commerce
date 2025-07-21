interface HeadingProps {
  title: string;
  center?: boolean;
}

export default function Heading({ title, center }: HeadingProps) {
  return (
    <div className={`${center ? "text-center" : "text-start"}`}>
      <h1 className="font-bold text-2xl text-[#FB2873] ">{title}</h1>
    </div>
  );
}
