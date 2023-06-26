import React, { useState } from 'react';
import {
	NavItem,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
import {
	FaUserCircle,
	FaArchive,
	FaHistory,
	FaCog,
	FaSignOutAlt,
} from 'react-icons/fa';

const UserMenu = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen((prevState) => !prevState);
	};

	return (
		<NavItem>
			<Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
				{/* Avatar Icon */}
				<DropdownToggle nav caret>
					<FaUserCircle className="d-flex" size={20} />
				</DropdownToggle>

				{/* Dropdown Menu */}
				<DropdownMenu end className="text-end">
					<DropdownItem>
						<FaArchive className="ms-1" /> المحفوظات
					</DropdownItem>

					<DropdownItem>
						<FaHistory className="ms-1" /> السجل
					</DropdownItem>

					<DropdownItem>
						<FaCog className="ms-1" /> إعدادات الحساب
					</DropdownItem>

					<DropdownItem divider />

					<DropdownItem>
						<a href="./login" className="text-decoration-none color-primary">
							<FaSignOutAlt className="ms-1" /> تسجيل الخروج
						</a>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</NavItem>
	);
};

export default UserMenu;
