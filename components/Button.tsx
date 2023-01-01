interface ButtonProps {
  children: string;
  type: "link" | "button";
  link?: string;
}

export default function Button({ children, type, link }: ButtonProps) {
  return (
    <a
      href={link}
      className="flex items-center justify-center w-full p-4 mx-auto font-medium transition border-2 border-transparent md:mx-0 bg-scooter text-tuna sm:w-max hover:bg-tuna hover:text-scooter hover:border-scooter"
    >
      {children}
    </a>
  );
}
