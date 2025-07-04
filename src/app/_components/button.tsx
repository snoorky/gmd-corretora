import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
	label: string;
	target?: string;
	url: string;
	icon?: string;
	isPrimary?: boolean;
	size?: number;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function Button({
	label,
	url,
	icon,
	isPrimary,
	onClick,
	size,
	target = "_blank",
}: ButtonProps) {
	return (
		<Link
			href={url}
			target={target}
			onClick={onClick}
			className={`${isPrimary ? "bg-blue" : "bg-orange"} text-white`}
		>
			{icon && (
				<Image alt={`Ícone de ${label}`} src={`/icons/${icon}.svg`} width={size} height={size} />
			)}
			{label}
		</Link>
	);
}
