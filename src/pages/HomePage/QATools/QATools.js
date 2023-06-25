import React from 'react';
import { Button } from 'reactstrap';
import { FiCopy, FiBookmark, FiPrinter } from 'react-icons/fi';

const QATools = ({ qaList }) => {
    const copyAllToClipboard = () => {
        const textToCopy = qaList
            .map(qa => `${qa.question}\n\n${qa.answer}`)
            .join('\n\n');
        navigator.clipboard.writeText(textToCopy);
    };

    const addToBookmarks = () => {
        // Add functionality here
    };

    const printAll = () => {
        const textToPrint = qaList
            .map(qa => `${qa.question}\n\n${qa.answer}`)
            .join('\n\n');
        const newWindow = window.open("", "_blank");
        newWindow.document.write(textToPrint);
        newWindow.print();
    };

    return (
        <div className="d-flex flex-row-reverse mb-2">
            <Button className='border color-black bg-transparent bg-gray-hover' onClick={copyAllToClipboard}>
                <FiCopy className="ms-2" />
                نسخ الكل
            </Button>
            <Button className='border color-black bg-transparent bg-gray-hover ms-2' onClick={addToBookmarks}>
                <FiBookmark className="ms-2" />
                حفظ
            </Button>
            <Button className='border color-black bg-transparent bg-gray-hover ms-2' onClick={printAll}>
                <FiPrinter className="ms-2" />
                طباعة
            </Button>
        </div>
    );
};

export default QATools;
