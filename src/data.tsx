type MenuItem = {
	title: string;
	label: string;
	hyperlink: string;
	subMenu: MenuItem[];
};

const menuData: MenuItem[] = [
	{
		title: "home",
		label: "Home",
		hyperlink: "/home",
		subMenu: [],
	},
	{
		title: "about",
		label: "Chi Siamo",
		hyperlink: "/about",
		subMenu: [
			{
				title: "our-team",
				label: "Il Nostro Team",
				hyperlink: "/about/team",
				subMenu: [
					{
						title: "management",
						label: "Direzione",
						hyperlink: "/about/team/management",
						subMenu: [],
					},
					{
						title: "staff",
						label: "Staff",
						hyperlink: "/about/team/staff",
						subMenu: [],
					},
				],
			},
			{
				title: "our-history",
				label: "La Nostra Storia",
				hyperlink: "/about/history",
				subMenu: [
					{
						title: "beginnings",
						label: "Gli Inizi",
						hyperlink: "/about/history/beginnings",
						subMenu: [],
					},
					{
						title: "achievements",
						label: "Risultati",
						hyperlink: "/about/history/achievements",
						subMenu: [],
					},
				],
			},
		],
	},
	{
		title: "services",
		label: "Servizi",
		hyperlink: "/services",
		subMenu: [
			{
				title: "consulting",
				label: "Consulenza",
				hyperlink: "/services/consulting",
				subMenu: [
					{
						title: "business-strategy",
						label: "Strategia Aziendale",
						hyperlink: "/services/consulting/business-strategy",
						subMenu: [],
					},
					{
						title: "financial-planning",
						label: "Pianificazione Finanziaria",
						hyperlink: "/services/consulting/financial-planning",
						subMenu: [],
					},
				],
			},
			{
				title: "development",
				label: "Sviluppo",
				hyperlink: "/services/development",
				subMenu: [
					{
						title: "web-development",
						label: "Sviluppo Web",
						hyperlink: "/services/development/web",
						subMenu: [
							{
								title: "frontend",
								label: "Frontend",
								hyperlink: "/services/development/web/frontend",
								subMenu: [],
							},
							{
								title: "backend",
								label: "Backend",
								hyperlink: "/services/development/web/backend",
								subMenu: [],
							},
						],
					},
					{
						title: "mobile-development",
						label: "Sviluppo Mobile",
						hyperlink: "/services/development/mobile",
						subMenu: [
							{
								title: "ios",
								label: "iOS",
								hyperlink: "/services/development/mobile/ios",
								subMenu: [],
							},
							{
								title: "android",
								label: "Android",
								hyperlink: "/services/development/mobile/android",
								subMenu: [],
							},
						],
					},
				],
			},
			{
				title: "design",
				label: "Design",
				hyperlink: "/services/design",
				subMenu: [
					{
						title: "graphic-design",
						label: "Design Grafico",
						hyperlink: "/services/design/graphic",
						subMenu: [],
					},
					{
						title: "ui-ux",
						label: "UI/UX",
						hyperlink: "/services/design/ui-ux",
						subMenu: [],
					},
				],
			},
		],
	},
	{
		title: "contact",
		label: "Contatti",
		hyperlink: "/contact",
		subMenu: [
			{
				title: "support",
				label: "Supporto",
				hyperlink: "/contact/support",
				subMenu: [],
			},
			{
				title: "locations",
				label: "Sedi",
				hyperlink: "/contact/locations",
				subMenu: [
					{
						title: "new-york",
						label: "New York",
						hyperlink: "/contact/locations/new-york",
						subMenu: [],
					},
					{
						title: "san-francisco",
						label: "San Francisco",
						hyperlink: "/contact/locations/san-francisco",
						subMenu: [],
					},
				],
			},
		],
	},
	{
		title: "careers",
		label: "Carriere",
		hyperlink: "/careers",
		subMenu: [
			{
				title: "job-openings",
				label: "Offerte di Lavoro",
				hyperlink: "/careers/job-openings",
				subMenu: [],
			},
			{
				title: "internships",
				label: "Tirocini",
				hyperlink: "/careers/internships",
				subMenu: [],
			},
		],
	},
];

export default menuData;
export type { MenuItem };
