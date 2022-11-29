import Button from "./Button";

export default function Hero() {
  return (
    <header className="min-h-[80vh] w-full bg-tuna text-white flex items-center justify-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-[3.375rem] font-semibold mb-4">
          Hi there !<br />I am{" "}
          <span className="text-scooter">Thomas Hellin</span>
        </h1>
        <span className="text-[1.75rem] font-medium block mb-8">
          Full-stack Developer
        </span>
        <Button type="link" link="#">
          Get in touch
        </Button>
      </div>
    </header>
  );
}
