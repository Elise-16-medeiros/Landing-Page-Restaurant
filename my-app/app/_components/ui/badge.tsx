import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/app/_lib/utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				default: "border-transparent bg-[#E1B168] text-black",
				secondary: "border-transparent bg-gray-400 text-black",
				destructive:
					"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
				outline: "text-foreground",
				custom: "px-4 py-1 text-white border-[#E1B168] border-2 rounded",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

export { Badge, badgeVariants };
