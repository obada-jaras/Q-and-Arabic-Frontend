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
import { Link } from 'react-router-dom';
import {
	HISTORY_URL,
	BOOKMARK_URL,
	LOGIN_URL,
} from '../../../constants/frontendUrls';

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
						<Link
							to={BOOKMARK_URL}
							className="text-decoration-none color-black"
						>
							<FaArchive className="ms-1" /> المحفوظات
						</Link>
					</DropdownItem>

					<DropdownItem>
						<Link
							to={HISTORY_URL}
							className="text-decoration-none color-black"
						>
							<FaHistory className="ms-1" /> السجل
						</Link>
					</DropdownItem>

					{/* Link to Account Settings */}
					<DropdownItem>
						<Link
							to="/"
							className="text-decoration-none color-black"
						>
							<FaCog className="ms-1" /> إعدادات الحساب
						</Link>
					</DropdownItem>

					<DropdownItem divider />

					<DropdownItem>
						<Link
							to={LOGIN_URL}
							className="text-decoration-none color-primary"
						>
							<FaSignOutAlt className="ms-1" /> تسجيل الخروج
						</Link>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</NavItem>
	);
};

export default UserMenu;
