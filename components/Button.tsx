interface ButtonProps {
  children: string;
  type: "link" | "button";
  link?: string;
}

export default function Button({ children, type, link }: ButtonProps) {
  return (
    <a
      href={link}
      className="flex items-center justify-center font-medium bg-scooter text-tuna p-4 w-max transition border-2 border-transparent hover:bg-tuna hover:text-scooter hover:border-scooter"
    >
      {children}
    </a>
  );
}
