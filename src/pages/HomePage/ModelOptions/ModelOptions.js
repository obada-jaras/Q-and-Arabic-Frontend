import React, { useState } from 'react';
import {
	Row,
	Col,
	Input,
	Label,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
import './ModelOptions.css';

const ModelOptions = ({
	QGModel,
	QAModel,
	numQuestions,
	setQGModel,
	setQAModel,
	setNumQuestions,
}) => {
	const [QGDropdownOpen, setQGDropdownOpen] = useState(false);
	const [QADropdownOpen, setQADropdownOpen] = useState(false);

	const toggleQGDropdown = () => setQGDropdownOpen((prevState) => !prevState);
	const toggleQADropdown = () => setQADropdownOpen((prevState) => !prevState);

	const handleNumQuestionsChange = (e) => setNumQuestions(e.target.value);

	return (
		<div>
			<Row className="my-2">
				<Col md={4} className="text-center">
					<Label for="QGModel">توليد الأسئلة</Label>
					<Dropdown
						isOpen={QGDropdownOpen}
						toggle={toggleQGDropdown}
						className="custom-dropdown"
					>
						<DropdownToggle caret>{QGModel}</DropdownToggle>
						<DropdownMenu>
							<DropdownItem onClick={() => setQGModel('AraT5')}>
								AraT5
							</DropdownItem>
							<DropdownItem onClick={() => setQGModel('AraGPT2')}>
								AraGPT2
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</Col>

				<Col md={4} className="text-center">
					<Label for="numQuestions">عدد الأسئلة</Label>
					<Input
						type="number"
						name="numQuestions"
						id="numQuestions"
						value={numQuestions}
						onChange={handleNumQuestionsChange}
						min="1"
						className="w-25 mx-auto text-center"
					/>
				</Col>

				<Col md={4} className="text-center">
					<Label for="QAModel">الإجابة على الأسئلة</Label>
					<Dropdown
						isOpen={QADropdownOpen}
						toggle={toggleQADropdown}
						className="custom-dropdown"
					>
						<DropdownToggle caret>{QAModel}</DropdownToggle>
						<DropdownMenu>
							<DropdownItem onClick={() => setQAModel('AraT5')}>
								AraT5
							</DropdownItem>
							<DropdownItem onClick={() => setQAModel('AraGPT2')}>
								AraGPT2
							</DropdownItem>
							<DropdownItem onClick={() => setQAModel('AraBERT')}>
								AraBERT
							</DropdownItem>
							<DropdownItem
								onClick={() => setQAModel('AraElectra')}
							>
								AraElectra
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</Col>
			</Row>
		</div>
	);
};

export default ModelOptions;
