interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col gap-8">
      {children}
    </div>
  );
}
