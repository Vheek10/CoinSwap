/** @format */

import { Token } from "@uniswap/sdk-core";

export const USDC = new Token(
	1, // Mainnet
	"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606e48", // USDC
	6,
	"USDC",
	"USD Coin",
);

export const WETH = new Token(
	1,
	"0xC02aaA39b223FE8D0A0E5C4F27eAD9083C756Cc2", // WETH
	18,
	"WETH",
	"Wrapped Ether",
);
