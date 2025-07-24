/** @format */

// components/ui/card.tsx
import { cn } from "@/lib/utils";

export function Card({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"rounded-xl border bg-card text-card-foreground shadow",
				className,
			)}
			{...props}>
			{children}
		</div>
	);
}

export function CardContent({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn("p-6", className)}
			{...props}>
			{children}
		</div>
	);
}
