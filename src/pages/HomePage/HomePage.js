import React, { useState } from 'react';
import { Button } from 'reactstrap';

import Box from './Box/Box';
import QATools from './QATools/QATools';
import QAList from './QAList/QAList';

const HomePage = () => {
	const [qaList, setQAList] = useState([]);
	const [showQA, setShowQA] = useState(false);

	const generateQA = () => {
		setQAList([
			{
				question: 'ما هي أفضل طريقة لتعلم البرمجة؟',
				answer: 'تعتمد الطريقة المثلى لتعلم البرمجة على الشخص وأسلوبه الخاص، ولكن يمكن البدء بتعلم الأساسيات والتدرب على حل المشاكل البسيطة والتحديات البرمجية.',
			},
			{
				question: 'ما هي أهمية البرمجة في العصر الحديث؟',
				answer: 'تعتبر البرمجة من أهم المهارات في العصر الحديث، حيث تستخدم في تطوير البرامج والتطبيقات والمواقع الإلكترونية والأجهزة الذكية، وتساعد على تحسين الحياة اليومية وتسهيل العمليات الحيوية في المجتمع.',
			},
			{
				question: 'ما هي أفضل لغة برمجة لتعلمها كمبتدئ؟',
				answer: 'تعتمد اللغة المناسبة للتعلم على الغرض من تعلم البرمجة، ولكن يمكن البدء بتعلم لغات برمجة مثل Python أو JavaScript أو Ruby أو Swift.',
			},
			{
				question: 'ما هي أفضل الأدوات لتطوير تطبيقات الجوال؟',
				answer: 'تعتمد الأدوات المناسبة لتطوير تطبيقات الجوال على نوع الجهاز ونظام التشغيل والغرض من التطبيق، ولكن يمكن استخدام أدوات مثل Android Studio وXcode وReact Native.',
			},
			{
				question: 'ما هي أفضل الأساليب لتحسين أداء موقع الويب؟',
				answer: 'تعتمد الأساليب المناسبة لتحسين أداء موقع الويب على عدة عوامل، مثل حجم الصفحة وعدد الصور والملفات وجودة الاستضافة والتصميم، ولكن يمكن استخدام تقنيات مثل تقليل حجم الصفحة وتحسين الصور واستخدام خوادتعتمد الأساليب المناسبة لتحسين أداء موقع الويب على عدة عوامل، مثل حجم الصفحة وعدد الصور والملفات وجودة الاستضافة والتصميم، ولكن يمكن استخدام تقنيات مثل تقليل حجم الصفحة وتحسين الصور واستخدام خوادم CDN.',
			},
		]);
		setShowQA(true);
	};

	return (
		<div className="d-flex mt-5 flex-column ">
			<Box />

			<div className="d-flex justify-content-center">
				<Button
					color="primary"
					className="mt-5 px-5"
					onClick={generateQA}
				>
					إنشاء الأسئلة وإجاباتها
				</Button>
			</div>

			{showQA && <QATools qaList={qaList} />}
			{showQA && <QAList qaList={qaList} />}
		</div>
	);
};

export default HomePage;
