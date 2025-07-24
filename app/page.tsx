/** @format */

import TokenSwap from "@/components/TokenSwap";
import ConnectWallet from "@/components/ConnectWallet";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center px-4">
			<ConnectWallet />
			<TokenSwap />
		</main>
	);
}
