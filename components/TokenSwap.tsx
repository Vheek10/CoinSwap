/** @format */

"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"; // use your UI components or plain divs
import { Button } from "@/components/ui/button";
import { FaArrowsAltV } from "react-icons/fa";

export default function TokenSwap() {
	const [fromToken, setFromToken] = useState("ETH");
	const [toToken, setToToken] = useState("USDC");
	const [amount, setAmount] = useState("");

	const handleSwap = () => {
		// Connect to smart contract swap logic here
		alert(`Swapping ${amount} ${fromToken} to ${toToken}`);
	};

	const flipTokens = () => {
		setFromToken(toToken);
		setToToken(fromToken);
	};

	return (
		<Card className="w-full max-w-md mx-auto mt-10 p-6 rounded-2xl bg-base-200 shadow-lg">
			<h2 className="text-2xl font-bold text-center mb-6">Token Swap</h2>
			<CardContent className="space-y-4">
				<div className="form-control">
					<label className="label">
						<span className="label-text">From</span>
					</label>
					<input
						type="number"
						placeholder="0.0"
						className="input input-bordered w-full"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
					<div className="mt-2">
						<select
							className="select select-bordered w-full"
							value={fromToken}
							onChange={(e) => setFromToken(e.target.value)}>
							<option value="ETH">ETH</option>
							<option value="USDC">USDC</option>
							<option value="DAI">DAI</option>
						</select>
					</div>
				</div>

				<div className="text-center">
					<button
						className="btn btn-circle btn-outline"
						onClick={flipTokens}>
						<FaArrowsAltV className="text-lg" />
					</button>
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text">To</span>
					</label>
					<input
						type="text"
						className="input input-bordered w-full"
						value={toToken}
						disabled
					/>
				</div>

				<Button
					className="w-full btn-primary mt-4"
					onClick={handleSwap}>
					Swap
				</Button>
			</CardContent>
		</Card>
	);
}
