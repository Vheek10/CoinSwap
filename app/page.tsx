/** @format */

import ConnectWallet from "@/components/ConnectWallet";
import TokenSwap from "@/components/TokenSwap";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-base-200">
			{/* Top-right wallet connect */}
			<div className="absolute top-4 right-4 z-50">
				<ConnectWallet />
			</div>

			{/* Centered swap card */}
			<main className="flex justify-center items-center h-screen">
				<TokenSwap />
			</main>
		</div>
	);
}
