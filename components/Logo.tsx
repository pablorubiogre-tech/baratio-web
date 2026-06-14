import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
};

const sizeClasses = {
  sm: "h-9 w-auto",
  md: "h-[48px] w-auto sm:h-[52px] lg:h-auto lg:max-h-[68px]",
  lg: "h-14 w-auto",
};

export default function Logo({
  className = "",
  size = "md",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/logo-baratio.png"
      alt="Baratio Asesoría Energética"
      width={2481}
      height={946}
      priority={priority}
      unoptimized
      className={`block max-w-none shrink-0 object-contain object-left ${sizeClasses[size]} ${className}`}
    />
  );
}
