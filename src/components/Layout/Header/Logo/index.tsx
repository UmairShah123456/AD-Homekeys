import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  isTransparent?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isTransparent = false }) => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={isTransparent ? "/images/logo-light.svg" : "/images/logo-dark.svg"}
        alt="AD Homekeys Logo"
        width={150}
        height={30}
        className="h-10 w-auto"
        priority
      />
    </Link>
  );
};

export default Logo;
