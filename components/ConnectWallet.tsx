/** @format */

// components/ConnectWallet.tsx
"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ConnectWallet() {
	return (
		<div className="flex justify-end p-4">
			<ConnectButton />
		</div>
	);
}
