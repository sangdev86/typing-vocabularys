import React from "react";
import styled from "styled-components";
const ModalStyle = styled.div`
	position: absolute;
	z-index: 999;
	background-color: #f9f9f9;
	box-shadow: 1px 2px 5px 4px #e4e4e4;
	bottom: 100%;
	left: 50%;
	transform: translate(-50%, 30%);
`;
const Children = styled.div`
	margin: 50px;
`;
export default function Modal({
	children,
	modal,
	...otherProps
}) {
	return modal ? (
		<ModalStyle {...otherProps}>
			<Children>{children}</Children>
		</ModalStyle>
	) : null;
}
