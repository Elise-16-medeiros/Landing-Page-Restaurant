export const heroData: {
	pretitle: string;
	title: string;
	btnText: string;
} = {
	pretitle: "OUTSTANDING ITALIAN CUISINE",
	title: "Botticelli",
	btnText: "Book a table",
};

export const linksData = [
	{
		name: "Home",
		slash: "/",
	},
	{
		name: "About Us",
		slash: "/about",
	},
	{
		name: "Our Kitchen",
		slash: "/Kitchen",
	},
	{
		name: "Menu",
		slash: "/menu",
	},
	{
		name: "Events",
		slash: "/events",
	},
	{
		name: "Contact",
		slash: "/contact",
	},
];

type Menu = {
	name: string;
	description: string;
	price: string;
};
export const menus: Menu[] = [
	{
		name: "Volutpat quis tortor",
		description: "Lorem ipsum dolor sit amet consectetur",
		price: "€29",
	},
	{
		name: "Consequat laoreet",
		description: "Lorem ipsum dolor sit amet consectetur",
		price: "€100",
	},
	{
		name: "Non placerat platea",
		description: "Lorem ipsum dolor sit amet consectetur",
		price: "€60",
	},
	{
		name: "In feugiat odio",
		description: "Lorem ipsum dolor sit amet consectetur",
		price: "€45",
	},
	{
		name: "Sed in viverra lectus",
		description: "Lorem ipsum dolor sit amet consectetur",
		price: "€32",
	},
	{
		name: "Diam sapien",
		description: "Lorem ipsum dolor sit amet consectetur",
		price: "€80",
	},
];
