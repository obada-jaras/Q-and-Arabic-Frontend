import React from 'react';
import { Button } from 'reactstrap';
import { useDropzone } from 'react-dropzone';

import './FileUploadTab.css';

const FileUploadTab = () => {
	const {
		getRootProps,
		getInputProps,
		isDragActive,
		acceptedFiles,
		fileRejections,
	} = useDropzone({
		accept: 'application/pdf, text/plain',
		maxFiles: 1,
		validator: (file) => {
			if (!['application/pdf', 'text/plain'].includes(file.type)) {
				return {
					code: 'file-type',
					message: 'الرجاء رفع ملف واحد بإحدى الصيغ المدعومة.',
				};
			}
		},
	});

	const files = acceptedFiles.map((file) => (
		<p key={file.path}>{file.path}</p>
	));

	const rejectedFiles =
		fileRejections.length > 0
			? 'الرجاء رفع ملف واحد بإحدى الصيغ المدعومة.'
			: '';

	return (
		<div
			{...getRootProps()}
			className={`text-center ${isDragActive ? 'dragging' : ''}`}
		>
			<input {...getInputProps()} />
			<Button className="mt-5">اختيار ملف</Button>
			<p>
				{isDragActive
					? 'أسقط الملف هنا...'
					: 'أو قم بسحب الملف واسقاطه هنا'}
			</p>
			<p className="text-left">الملفات المدعومة: pdf، txt</p>
			{files}
			{rejectedFiles && <p className="color-primary">{rejectedFiles}</p>}
		</div>
	);
};

export default FileUploadTab;
