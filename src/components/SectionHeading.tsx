interface SectionHeadingProps {
  title: string;
  header: string;
}

export default function SectionHeading({ title, header }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 mb-12">
      <div className="font-semibold text-xl border-l-28 rounded-lg py-2 border-[#DB4444]  ">
        <span className="ml-4 text-[#DB4444]">{title} </span>
      </div>
      <h1 className="font-semibold text-2xl">{header}</h1>
    </div>
  );
}
