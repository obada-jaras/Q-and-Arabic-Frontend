import React from 'react';
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { FiCopy } from 'react-icons/fi';
import './QAItem.css';

const QAItem = ({ qa }) => {
    const copyToClipboard = () => {
        const textToCopy = `${qa.question}\n\n${qa.answer}`;
        navigator.clipboard.writeText(textToCopy);
    };

    return (
        <Card className="mb-2 qa-card">
            <CardBody className="d-flex justify-content-between align-items-center">
                <div>
                    <CardTitle tag="h5">{qa.question}</CardTitle>
                    <CardText>{qa.answer}</CardText>
                </div>
                <Button color="secondary" onClick={copyToClipboard} style={{ minWidth: '71px', height: '35px', fontSize: '12px', marginInlineStart: '50px' }}>
                    <FiCopy className='ms-2'/>
                    نسخ
                </Button>
            </CardBody>
        </Card>
    );
};

export default QAItem;
