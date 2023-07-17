import React, { useState } from 'react';
import { Card, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import FileUploadTab from './FileUploadTab/FileUploadTab';
import TextInputTab from './TextInputTab/TextInputTab';

function Box({ context, setContext, setTitle }) {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<Card body>
			<Nav tabs>
				<NavItem>
					<NavLink
						className={classnames(
							{ active: activeTab === '1' },
							'color-primary',
						)}
						onClick={() => {
							toggle('1');
						}}
					>
						رفع ملف
					</NavLink>
				</NavItem>

				<NavItem>
					<NavLink
						className={classnames(
							{ active: activeTab === '2' },
							'color-primary',
						)}
						onClick={() => {
							toggle('2');
						}}
					>
						نص
					</NavLink>
				</NavItem>
			</Nav>

			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<FileUploadTab
						setContext={setContext}
						setTitle={setTitle}
					/>
				</TabPane>
				<TabPane tabId="2">
					<TextInputTab
						context={context}
						setContext={setContext}
						setTitle={setTitle}
					/>
				</TabPane>
			</TabContent>
		</Card>
	);
}

export default Box;
