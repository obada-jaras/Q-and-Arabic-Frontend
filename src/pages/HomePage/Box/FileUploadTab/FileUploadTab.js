import React, { useCallback } from 'react';
import { Button } from 'reactstrap';
import { useDropzone } from 'react-dropzone';

import './FileUploadTab.css';
import { extractTextFromFile } from '../../../../utils/fileHandler';

const FileUploadTab = ({ setContext, setTitle }) => {
	const onDrop = useCallback(
		async (acceptedFiles) => {
			if (acceptedFiles.length !== 1) {
				return;
			}

			const file = acceptedFiles[0];
			const text = await extractTextFromFile(file);
			setContext(text);
			setTitle(file.name);
		},
		[setContext],
	);

	const {
		getRootProps,
		getInputProps,
		isDragActive,
		acceptedFiles,
		fileRejections,
	} = useDropzone({
		accept: 'text/plain',
		maxFiles: 1,
		onDrop,
		validator: (file) => {
			if (!['text/plain'].includes(file.type)) {
				return {
					code: 'file-type',
					message: 'الرجاء رفع ملف واحد بإحدى الصيغ المدعومة.',
				};
			}
		},
	});

	const files = acceptedFiles.map((file) => (
		<p key={file.name}>{file.name}</p>
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
			<p className="text-left">الملفات المدعومة: ، txt</p>
			{files}
			{rejectedFiles && <p className="color-primary">{rejectedFiles}</p>}
		</div>
	);
};

export default FileUploadTab;
