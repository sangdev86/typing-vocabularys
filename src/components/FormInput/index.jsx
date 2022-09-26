import React from "react";
import styled from "styled-components";
const Group = styled.div`
	position: relative;
	margin: 45px 0;
`;
const Input = styled.input`
	background: none;
	background-color: white;
	color: #959595;
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid grey;
	margin: 25px 0;

	:focus {
		outline: none;
	}
	:focus ~ .label {
		.shrink {
			top: -14px;
			font-size: 12px;
			color: #5b5b5b;
		}
	}
`;
const Label = styled.label`
	color: grey;
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;
	text-transform: capitalize;
	&.shrink {
		top: -14px;
		font-size: 12px;
		color: #5b5b5b;
	}
`;
export default function FormInput({
	handleChange,
	label,
	...otherProps
}) {
	return (
		<Group>
			<Input onChange={handleChange} {...otherProps} />
			<Label
				className={`${
					otherProps.value.length ? "shrink " : ""
				} label`}
			>
				{label}
			</Label>
		</Group>
	);
}
