// All of the site's personal content lives here, so you can update it in one place.
// An empty `url` hides that link on the site.

export const profile = {
	name: 'Rahul Shirode',
	brand: 'RahulShirode.dev',
	title: 'Web Operations Engineer',
	email: 'rahul.shirode123@gmail.com',
	phone: '+91 97642 65386',
	phoneHref: 'tel:+919764265386',
	address: '411 021, Pune, MH, India',
	mapsUrl: 'https://maps.google.com/?q=Pune,Maharashtra,India',
	// Put your CV at public/assets/resume.pdf, then set this to 'assets/resume.pdf'
	resumeUrl: '',
	availability: "I'm open to web operations, WordPress and cloud platform roles. The fastest way to reach me is email.",
	socials: [
		{ label: 'LinkedIn', icon: 'ri-linkedin-fill', url: '' },
		{ label: 'GitHub', icon: 'ri-github-fill', url: '' },
	],
}

export const activeSocials = profile.socials.filter((s) => s.url)

export const navLinks = [
	{ label: 'About', href: '#about' },
	{ label: 'Services', href: '#services' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Portfolio', href: '#portfolio' },
	{ label: 'Blog', href: '#blog' },
	{ label: 'Contact', href: '#contact' },
]

export const stats = [
	{ icon: 'ri-calendar-check-line', value: 12, suffix: '+', label: 'Years Experience' },
	{ icon: 'ri-global-line', value: 40, suffix: '+', label: 'Production Sites Managed' },
	{ icon: 'ri-rocket-2-line', value: 10, suffix: '', label: 'Weeks to Migrate 40+ Sites' },
	{ icon: 'ri-bank-card-line', value: 5, suffix: '', label: 'Payment Gateways Integrated' },
]

export const techIcons = [
	{ icon: 'ri-wordpress-fill', label: 'WordPress' },
	{ icon: 'ri-cloud-fill', label: 'AWS' },
	{ icon: 'ri-html5-fill', label: 'HTML5' },
	{ icon: 'ri-css3-fill', label: 'CSS3' },
	{ icon: 'ri-javascript-fill', label: 'JavaScript' },
	{ icon: 'ri-code-s-slash-line', label: 'PHP' },
	{ icon: 'ri-database-2-fill', label: 'MySQL' },
	{ icon: 'ri-git-branch-fill', label: 'Git' },
	{ icon: 'ri-github-fill', label: 'GitHub' },
	{ icon: 'ri-ubuntu-fill', label: 'Linux' },
	{ icon: 'ri-windows-fill', label: 'Windows Server' },
	{ icon: 'ri-bootstrap-fill', label: 'Bootstrap' },
]

export const platforms = ['WordPress', 'WP Engine', 'WooCommerce', 'WordPress Multisite', 'Moodle', 'Joomla', 'AWS', 'Azure DevOps', 'Jira', 'Bitbucket', 'SiteGround', 'Hostinger']

export const milestones = [
	{ date: 'May 2026', text: 'AWS Cloud Quest: Generative AI Practitioner' },
	{ date: '2026', text: 'Custom ACF theme for the American Arbitration Association' },
	{ date: 'Oct 2024', text: 'AWS Cloud Quest: Cloud Practitioner' },
	{ date: 'May 2022', text: '40+ BRE Group sites moved from IIS to WP Engine' },
	{ date: 'Oct 2013', text: 'Started building WordPress and Joomla sites' },
]

export const services = [
	{
		icon: 'ri-wordpress-line',
		title: 'WordPress Development',
		text: 'Custom themes built from Figma designs, ACF flexible layouts, and plugin customization across Elementor, WPBakery and Divi.',
	},
	{
		icon: 'ri-arrow-left-right-line',
		title: 'Website Migrations',
		text: 'Moving sites between hosts with planned DNS cutovers, SSL setup and minimal downtime, including WordPress Multisite and Moodle.',
	},
	{
		icon: 'ri-git-merge-line',
		title: 'Release Management',
		text: 'Weekly core, plugin and theme updates that move through DEV, STAGE and PROD with testing before every go-live.',
	},
	{
		icon: 'ri-tools-line',
		title: 'Support & Maintenance',
		text: 'Fixing production issues within SLAs through Azure DevOps and Jira, diagnosing servers with SSH, logs and hosting tools.',
	},
	{
		icon: 'ri-shopping-cart-2-line',
		title: 'E-commerce & Payments',
		text: 'WooCommerce stores and payment integrations with PayPal, Stripe, Razorpay, CCAvenue and Cybersource.',
	},
	{
		icon: 'ri-cloud-line',
		title: 'Cloud & Hosting',
		text: 'WP Engine, SiteGround and Hostinger hosting, plus growing hands-on AWS work with EC2, S3, IAM, VPC, Route 53 and CloudWatch.',
	},
]

export const experience = [
	{
		company: 'Zensar Technologies',
		via: 'Pune',
		initials: 'Z',
		period: 'Jan 2022 – Jul 2026',
		role: 'Senior Software Engineer',
		bullets: [
			'Senior engineer on enterprise WordPress accounts, including BRE Group (UK) and the American Arbitration Association (USA).',
			'Owned releases, migrations and production support, working directly with client teams in the UK and USA.',
		],
		tags: ['WordPress', 'WP Engine', 'DNS', 'SSL', 'Git'],
	},
	{
		company: 'ComputoVision',
		via: 'Pune',
		initials: 'CV',
		period: 'Oct 2013 – Dec 2021',
		role: 'Software Engineer',
		bullets: [
			'Built WordPress and Joomla websites, custom plugins and modules.',
			'Integrated payments with PayPal, Stripe, Razorpay, CCAvenue and Cybersource.',
			'Ran email campaigns with Mailchimp, SendGrid and PHPList.',
		],
		tags: ['WordPress', 'Joomla', 'PHP', 'MySQL', 'Payment Gateways'],
	},
]

export const education = [
	{ label: 'Degree', org: 'MET’s IOE, Nashik (Pune University)', text: 'B.E. Computers' },
]

export const certifications = [
	{ date: 'May 2026', org: 'AWS Cloud Quest', text: 'Generative AI Practitioner (training badge)' },
	{ date: 'Oct 2024', org: 'AWS Cloud Quest', text: 'Cloud Practitioner (training badge)' },
	{ date: 'Now', org: 'Hands-on AWS & DevOps', text: 'EC2, S3, IAM, VPC, Route 53, CloudWatch, Docker, Jenkins' },
]

export const projects = [
	{
		title: 'Moving 40+ websites from IIS to WP Engine',
		highlight: '40+ sites',
		highlightSub: 'migrated in 10 weeks',
		text: 'Led the migration of WordPress Multisite, standalone sites, online stores and Moodle apps from on-premise IIS to the cloud with minimal downtime, with DNS cutovers, .pfx SSL setup and UAT before every go-live.',
		client: 'BRE Group, UK',
		time: '10 weeks (Mar – May 2022)',
		role: 'Team lead',
		tech: 'WP Engine, WordPress Multisite, Moodle, DNS, SSL',
		demo: '',
		github: '',
	},
	{
		title: 'Custom WordPress theme from Figma designs',
		highlight: 'ACF',
		highlightSub: 'flexible, reusable page layouts',
		text: 'A component-based theme on Advanced Custom Fields so editors can build pages from reusable layouts, tuned for fast page loads and accessibility.',
		client: 'American Arbitration Association, USA',
		time: '2026',
		role: 'Developer',
		tech: 'WordPress, ACF, PHP, JavaScript, Figma, Bitbucket',
		demo: '',
		github: '',
	},
	{
		title: 'BRE Academy platform',
		highlight: 'Events + Store',
		highlightSub: 'built on WordPress',
		text: 'Reusable page templates, an events feature and a WooCommerce store, plus reworked navigation for the BRE Academy learning platform.',
		client: 'BRE Group, UK',
		time: '2022 – 2026',
		role: 'Team lead & developer',
		tech: 'WordPress, WooCommerce, PHP, JavaScript',
		demo: '',
		github: '',
	},
]

export const skills = [
	{ label: 'CMS', text: 'WordPress (custom themes, ACF, plugins, Elementor, WPBakery, Divi), Joomla, Moodle' },
	{ label: 'Front-End', text: 'HTML5, CSS3, Bootstrap, JavaScript' },
	{ label: 'Back-End', text: 'PHP, MySQL, phpMyAdmin' },
	{ label: 'Hosting & Ops', text: 'WP Engine, SiteGround, Hostinger, DNS, SSL, Linux, Windows Server, SSH, FTP' },
	{ label: 'Delivery', text: 'Git, GitHub, Bitbucket, CI/CD, Azure DevOps, Jira, Monday.com, Slack, MS Teams' },
	{ label: 'Cloud & DevOps', text: 'AWS (EC2, S3, IAM, VPC, Route 53, CloudWatch), Docker, Jenkins' },
]

// Blog posts come from your headless WordPress at build time.
export const wordpressApi = 'https://admin.rahulshirode.cloud/wp-json/wp/v2'
