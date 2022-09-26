import React, { useState } from "react";
import styled from "styled-components";
import { vocabularysData } from "../../data/eng";
import { createAction } from "../../store/createActions";
import { TYPE_KB } from "../../store/Keyboard/constant";
import CustomButton from "../CustomButton";
import FormInput from "../FormInput";
import Modal from "../Modal";

const SettingStyle = styled.div`
	display: flex;
	margin: 20px;
	justify-content: flex-end;
	align-items: center;
	position: relative;
`;
const TitleForm = styled.h2`
	color: #5fa1d0;
	font-size: 30px;
	text-align: center;
`;
const Submit = styled.input`
	font-size: 16px;
	color: white;
	padding: 10px 15px;
	background-color: #3295db;
	border-radius: 5px;
	font-weight: bold;
	border: none;
	margin: 5px;
	outline: none;
	cursor: pointer;
	:hover {
		background-color: #5fa1d0;
	}
`;
function Setting({ modal, handleModal, dispatch }) {
	const [form, setForm] = useState({
		letters: "",
		characters: "",
	});
	const handleChange = (e) => {
		const { value, name } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let arr = form.letters.split("");
		let arrCharacter = [];
		form.characters.split("").forEach((el) => {
			if (el !== " ") {
				arrCharacter.push(el);
			}
		});

		if (arrCharacter.length > 0) {
			vocabularysData.forEach((el) => {
				const arrOneletter = el.split("");
				const checkLetter = arrCharacter.every(
					(child) =>
						arrOneletter.findIndex((key) => key === child) >
						-1
				);
				if (checkLetter) {
					arr.push(...el.split(""));
					arr.push(" ");
				}
			});
		}

		dispatch(createAction(TYPE_KB.CHANGE_PRACTICE, arr));
		handleModal();
	};

	return (
		<SettingStyle>
			<CustomButton buttonPrimary onClick={handleModal}>
				Setting
			</CustomButton>
			<CustomButton>Reset</CustomButton>
			<Modal modal={modal}>
				<TitleForm>Setting</TitleForm>
				<form onSubmit={handleSubmit} id="form">
					<FormInput
						handleChange={handleChange}
						name="letters"
						type="text"
						value={form.letters}
						label="Letters"
					/>
					<FormInput
						handleChange={handleChange}
						name="characters"
						type="text"
						value={form.characters}
						label="Charecter of 2000"
					/>
					<div style={{ textAlign: "center" }}>
						<Submit type="submit" value="Start" />
					</div>
				</form>
			</Modal>
		</SettingStyle>
	);
}
export default React.memo(Setting);
