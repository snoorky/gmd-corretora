import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  label: string;
  target?: string;
  url: string;
  icon?: string;
  isPrimary?: boolean;
  size?: number;
}

export function Button({ label, url, icon, isPrimary, size, target = "_blank"}: ButtonProps) {
  return (
    <Link href={url} target={target} className={`${isPrimary ? "bg-blue" : "bg-orange"} text-white`}>
      {icon && (
        <Image
          alt={`Ícone de ${label}`}
          src={`/icons/${icon}.svg`}
          width={size}
          height={size}
        />
      )}
      {label}
    </Link>
  );
}
