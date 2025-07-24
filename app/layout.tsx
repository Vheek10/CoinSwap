/** @format */

import "./globals.css";
import { Inter } from "next/font/google";
import { Web3Provider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "CoinSwap",
	description: "Swap tokens easily on Ethereum",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			data-theme="dark">
			<body className={inter.className}>
				<Web3Provider>{children}</Web3Provider>
			</body>
		</html>
	);
}
