import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  label: string;
  url: string;
  icon?: string;
  isPrimary?: boolean;
  size?: number;
}

export function Button({ label, url, icon, isPrimary, size }: ButtonProps) {
  return (
    <Link
      href={url}
      className={`${isPrimary ? "bg-orange" : "bg-blue"} text-white`}
    >
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
