import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo-dark.svg"
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
