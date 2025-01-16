export type Game = {
	cover: string;
	label: string;
	type: string;
	price: string;
};

export const games: Game[] = [
	{
		cover: 'assets/bt-1.jpg',
		label: 'DIGITAL',
		type: 'DIGITAL | PS4',
		price: 'R$ 129,99',
	},
	{
		cover: 'assets/bt-4.jpg',
		label: 'EXCLUSIVE',
		type: 'DISC | PS5',
		price: 'R$ 269,99',
	},
	{
		cover: 'assets/ac-cover.jpg',
		label: 'BEST OF YEAR',
		type: 'DIGITAL | PS5',
		price: 'R$ 369,99',
	},
	{
		cover: 'assets/bt-hardline.jpg',
		label: 'NEW',
		type: 'DIGITAL | PS3 PS4 PS5',
		price: 'R$ 369,99',
	},
];
