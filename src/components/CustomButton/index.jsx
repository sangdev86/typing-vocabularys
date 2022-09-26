import React from "react";
import styled from "styled-components";

export default function CustomButton({
	children,
	buttonPrimary,
	...otherProps
}) {
	const SpanPrimary = styled.span`
		font-size: 16px;
		color: white;
		padding: 10px 15px;
		background-color: #3295db;
		border-radius: 5px;
		font-weight: bold;
		margin: 5px;
		cursor: pointer;
		:hover {
			background-color: #5fa1d0;
		}
	`;
	const SpanSecondery = styled.span`
		font-size: 16px;
		color: #6d5825;
		padding: 10px 15px;
		background-color: #ffcf46;
		border-radius: 5px;
		font-weight: bold;
		margin: 5px;
		cursor: pointer;
		:hover {
			background-color: #fde8af;
		}
	`;
	return (
		<div {...otherProps}>
			{buttonPrimary ? (
				<SpanPrimary>{children}</SpanPrimary>
			) : (
				<SpanSecondery>{children}</SpanSecondery>
			)}
		</div>
	);
}
