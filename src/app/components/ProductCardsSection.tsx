import { motion } from 'motion/react';
import { LayoutDashboard, DollarSign, BookOpen, Users, Bell, GraduationCap, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import capp5 from '../../assets/capp5.png';
import capp6 from '../../assets/capp6.png';
import capp7 from '../../assets/capp7.png';
import './ProductCardsSection.css';

const products = [
	{
		id: 'admin',
		titleKey: 'home.products.admin.title',
		descriptionKey: 'home.products.admin.description',
		buttonKey: 'home.products.admin.cta',
		image: capp5,
		imageAltKey: 'home.products.admin.imageAlt',
		imageFit: 'contain' as const,
		imageMaxWidth: 440,
		imagePadding: 14,
		imagePosition: 'center',
		badges: [
			{ icon: LayoutDashboard, position: 'top-4 left-4' },
			{ icon: DollarSign, position: 'bottom-4 right-4' },
		],
		ctaPath: '/app/assistant',
	},
	{
		id: 'teacher',
		titleKey: 'home.products.teacher.title',
		descriptionKey: 'home.products.teacher.description',
		buttonKey: 'home.products.teacher.cta',
		image: capp6,
		imageAltKey: 'home.products.teacher.imageAlt',
		imageFit: 'contain' as const,
		imageMaxWidth: 420,
		imagePadding: 14,
		imagePosition: 'center',
		badges: [
			{ icon: BookOpen, position: 'top-4 right-4' },
			{ icon: Users, position: 'bottom-4 left-4' },
		],
		ctaPath: '/app/teacher',
	},
	{
		id: 'parent',
		titleKey: 'home.products.parent.title',
		descriptionKey: 'home.products.parent.description',
		buttonKey: 'home.products.parent.cta',
		image: capp7,
		imageAltKey: 'home.products.parent.imageAlt',
		imageFit: 'contain' as const,
		imageMaxWidth: 430,
		imagePadding: 14,
		imagePosition: 'center',
		badges: [
			{ icon: Bell, position: 'top-4 left-4' },
			{ icon: GraduationCap, position: 'bottom-4 right-4' },
		],
		ctaPath: '/app/parent',
	},
];

export function ProductCardsSection() {
	const { t } = useTranslation();

	return (
		<section className="os-product-section py-20 px-4 md:px-6">
			<div className="max-w-[1200px] mx-auto">
				{/* Section Title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className="os-product-title"
				>
					{t('home.products.title')}
				</motion.h2>

				{/* 3 Product Cards */}
				<div className="os-product-grid">
					{products.map((product) => (
						<motion.div
							key={product.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileHover={{ y: -8, scale: 1.02 }}
							viewport={{ once: true }}
							transition={{ duration: 0.2, ease: 'easeOut' }}
							className="os-card"
						>
							{/* Card Top - Screenshot Area */}
							<div
								className="os-media"
								style={{
									padding: `${product.imagePadding}px`,
								}}
							>
								<img
									src={product.image}
									alt={t(product.imageAltKey)}
									className="os-mediaImage os-mediaImage--contained"
									style={{
										objectFit: product.imageFit,
										objectPosition: product.imagePosition,
										maxWidth: `${product.imageMaxWidth}px`,
										margin: '0 auto',
										borderRadius: '14px',
										boxShadow: '0 14px 30px rgba(0,0,0,0.10)',
										background: 'transparent',
									}}
								/>

								{/* Soft gradient for readability */}
								<div className="os-mediaOverlay" />

								{/* Floating Icon Badges (equal circles) */}
								{product.badges.map((badge, i) => (
									<div key={i} className={`os-badge ${badge.position}`}>
										<badge.icon size={18} className="os-badgeIcon" />
									</div>
								))}
							</div>

							{/* Card Bottom - Text Area */}
							<div className="os-cardBody">
								<h3 className="os-cardTitle">{t(product.titleKey)}</h3>
								<p className="os-cardDesc">{t(product.descriptionKey)}</p>

								<div className="os-cardFooter">
									<Link to={product.ctaPath} className="os-cardCta" role="button">
										{t(product.buttonKey)}
										<ArrowRight size={16} />
									</Link>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
