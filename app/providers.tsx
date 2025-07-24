/** @format */

"use client";

import { WagmiConfig, createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const chains = [mainnet];

const { connectors } = getDefaultWallets({
	appName: "CoinSwap DApp",
	projectId: "49a95ecaddfd7a17e289a0e8459d3e0f", 
	chains,
});

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	chains,
	transports: {
		[mainnet.id]: http(), // 👈 public provider now uses http()
	},
});

const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<WagmiConfig config={wagmiConfig}>
				<RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
			</WagmiConfig>
		</QueryClientProvider>
	);
}
