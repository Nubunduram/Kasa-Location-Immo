import React, { useState } from 'react';

const Dropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropdown ${isOpen ? 'active' : ''}`}>
            <button className="dropdown-btn" onClick={toggleDropdown}>
                {title}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <path d="M17.2103 21.8522C16.5409 22.5216 15.4538 22.5216 14.7843 21.8522L4.50206 11.5699C3.83265 10.9005 3.83265 9.81332 4.50206 9.1439C5.17148 8.47448 6.25862 8.47448 6.92804 9.1439L16 18.2159L25.072 9.14926C25.7414 8.47984 26.8285 8.47984 27.4979 9.14926C28.1674 9.81868 28.1674 10.9058 27.4979 11.5752L17.2157 21.8575L17.2103 21.8522Z" fill="white" />
                </svg>
            </button>
            <div className="dropdown-content">
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Dropdown;
