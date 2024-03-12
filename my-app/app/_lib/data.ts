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
		name: "About Us",
		hash: "#about",
	},
	{
		name: "Our Kitchen",
		hash: "#Kitchen",
	},
	{
		name: "Menu",
		hash: "#menu",
	},
	{
		name: "Events",
		hash: "#events",
	},
	{
		name: "Reservation",
		hash: "#reservation",
	},
] as const;

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
