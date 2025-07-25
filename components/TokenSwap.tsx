/** @format */

"use client";

import { useEffect, useState } from "react";
import { ArrowDown, CheckCircle, ChevronUpDown } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { Combobox } from "@headlessui/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Install these via:
// npm install @headlessui/react lucide-react react-hot-toast react-loading-skeleton

const TOKENS = [
	{ symbol: "ETH", name: "Ethereum" },
	{ symbol: "BNB", name: "Binance Coin" },
	{ symbol: "USDT", name: "USDT" },
	{ symbol: "DAI", name: "Dai" },
];

export default function TokenSwap() {
	const [fromAmount, setFromAmount] = useState("");
	const [toAmount, setToAmount] = useState("");
	const [fromToken, setFromToken] = useState(TOKENS[0]);
	const [toToken, setToToken] = useState(TOKENS[1]);
	const [slippage, setSlippage] = useState("0.5");
	const [isSwapping, setIsSwapping] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [price, setPrice] = useState<number | null>(null);

	const filtered =
		searchQuery === ""
			? TOKENS
			: TOKENS.filter((t) =>
					t.name.toLowerCase().includes(searchQuery.toLowerCase()),
			  );

	// Simulate live price fetch
	useEffect(() => {
		setPrice(null);
		const timer = setTimeout(() => {
			setPrice(parseFloat((Math.random() * 1000 + 100).toFixed(2)));
		}, 800);
		return () => clearTimeout(timer);
	}, [fromToken, toToken]);

	const handleSwap = () => {
		if (!fromAmount) {
			toast.error("Enter amount");
			return;
		}
		toast.loading("Processing swap...");
		setIsSwapping(true);
		setTimeout(() => {
			toast.dismiss();
			toast.success(
				`Swapped ${fromAmount} ${fromToken.symbol} → ${toAmount || "?"} ${
					toToken.symbol
				}`,
			);
			setIsSwapping(false);
			setFromAmount("");
			setToAmount("");
		}, 1600);
	};

	const TokenCombo = ({ selected, setSelected, label }) => (
		<Combobox
			value={selected}
			onChange={setSelected}>
			<span className="block text-sm text-white/70 mb-1">{label}</span>
			<div className="relative">
				<Combobox.Input
					displayValue={(t) => t.symbol}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="w-full bg-[#343142] rounded-xl text-lg text-white px-4 py-2 outline-none"
				/>
				<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-3">
					<ChevronUpDown className="h-5 w-5 text-white/60" />
				</Combobox.Button>
				<Combobox.Options className="absolute mt-1 w-full bg-[#292738] rounded-xl py-1 max-h-44 overflow-auto z-10 shadow-lg">
					{filtered.map((t) => (
						<Combobox.Option
							key={t.symbol}
							value={t}
							className={({ active }) =>
								`p-2 text-white/80 cursor-pointer ${
									active ? "bg-purple-600 text-white" : ""
								}`
							}>
							{({ selected, active }) => (
								<div className="flex items-center justify-between">
									<span>
										{t.name} ({t.symbol})
									</span>
									{selected && (
										<CheckCircle className="h-4 w-4 text-green-400" />
									)}
								</div>
							)}
						</Combobox.Option>
					))}
				</Combobox.Options>
			</div>
		</Combobox>
	);

	return (
		<>
			<Toaster position="top-right" />
			<div className="w-full max-w-md mx-auto rounded-3xl bg-gradient-to-br from-[#1f1d2b] to-[#171520] p-6 shadow-[0_0_30px_#0d0c13] border border-[#2b2939]/60 backdrop-blur-md">
				<h2 className="text-center text-3xl font-bold text-white mb-6">Swap</h2>

				{/* From */}
				<div className="mb-4 bg-[#292738] border border-[#3d3b50] rounded-xl p-4">
					<TokenCombo
						selected={fromToken}
						setSelected={setFromToken}
						label="From"
					/>
					<input
						type="number"
						placeholder="0.00"
						value={fromAmount}
						onChange={(e) => setFromAmount(e.target.value)}
						className="w-full bg-transparent text-white text-3xl font-semibold placeholder-white/30 outline-none mt-2"
					/>
				</div>

				{/* Swap Icon */}
				<div className="flex justify-center mb-4">
					<button
						onClick={() => {
							setFromToken(toToken);
							setToToken(fromToken);
							setFromAmount(toAmount);
							setToAmount(fromAmount);
						}}
						className="bg-[#343142] hover:bg-[#4b4760] text-white rounded-full p-2 border-4 border-[#1f1d2b] shadow">
						<ArrowDown className="h-5 w-5" />
					</button>
				</div>

				{/* To */}
				<div className="mb-4 bg-[#292738] border border-[#3d3b50] rounded-xl p-4">
					<TokenCombo
						selected={toToken}
						setSelected={setToToken}
						label="To"
					/>
					<input
						type="number"
						placeholder="0.00"
						value={toAmount}
						onChange={(e) => setToAmount(e.target.value)}
						className="w-full bg-transparent text-white text-3xl font-semibold placeholder-white/30 outline-none mt-2"
					/>
				</div>

				{/* Slippage */}
				<div className="flex items-center justify-between mb-4 text-sm text-white/70">
					<label>Slippage (%)</label>
					<input
						type="number"
						step="0.1"
						value={slippage}
						onChange={(e) => setSlippage(e.target.value)}
						className="w-16 bg-[#292738] text-white px-2 py-1 rounded-md border border-[#3d3b50] outline-none"
					/>
				</div>

				{/* Price */}
				<div className="text-white/80 text-sm mb-6">
					{price === null ? (
						<Skeleton
							height={18}
							width={120}
							baseColor="#292738"
							highlightColor="#3d3b50"
						/>
					) : (
						`1 ${fromToken.symbol} ≈ ${price} ${toToken.symbol}`
					)}
				</div>

				{/* Swap Button */}
				<button
					onClick={handleSwap}
					disabled={isSwapping}
					className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
					{isSwapping ? "Swapping..." : "Confirm Swap"}
				</button>
			</div>
		</>
	);
}
