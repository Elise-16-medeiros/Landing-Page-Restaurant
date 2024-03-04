import { menus } from "../_lib/data";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";

import { Table, TableBody, TableCell, TableRow } from "./ui/table";

const Menu = () => {
	return (
		<section className="bg-[#292E36] h-[316px] p-5 mt-24 md:mt-16">
			<div className="before:content[''] before:border-2 before:absolute before:w-[93px] before:border-[#E1B168] after:content-[''] after:border-2 after:w-[93px] after:border-[#E1B168] after:absolute">
				<h2 className="py-1 tracking-wide text-white uppercase">Our Menu</h2>
			</div>

			<div className="grid grid-cols-2 gap-8 place-content-center place-items-center h-64 md:flex justify-around items-center">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="custom">Dishes</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Main Dish</DialogTitle>
							<DialogDescription>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<Table>
								<TableBody>
									{menus.map((val, key) => (
										<TableRow key={key}>
											<TableCell className="font-medium">{val.name}</TableCell>
											<TableCell>{val.description}</TableCell>
											<TableCell className="text-right">{val.price}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</DialogContent>
				</Dialog>

				<Dialog>
					<DialogTrigger asChild>
						<Button variant="custom">Desserts</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Our Desserts</DialogTitle>
							<DialogDescription>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<Table>
								<TableBody>
									{menus.map((val, key) => (
										<TableRow key={key}>
											<TableCell className="font-medium">{val.name}</TableCell>
											<TableCell>{val.description}</TableCell>
											<TableCell className="text-right">{val.price}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</DialogContent>
				</Dialog>

				<Dialog>
					<DialogTrigger asChild>
						<Button variant="custom">Pizzas</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Our Pizzas</DialogTitle>
							<DialogDescription>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<Table>
								<TableBody>
									{menus.map((val, key) => (
										<TableRow key={key}>
											<TableCell className="font-medium">{val.name}</TableCell>
											<TableCell>{val.description}</TableCell>
											<TableCell className="text-right">{val.price}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</DialogContent>
				</Dialog>

				<Dialog>
					<DialogTrigger asChild>
						<Button variant="custom">Drinks</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Our Drinks</DialogTitle>
							<DialogDescription>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<Table>
								<TableBody>
									{menus.map((val, key) => (
										<TableRow key={key}>
											<TableCell className="font-medium">{val.name}</TableCell>
											<TableCell>{val.description}</TableCell>
											<TableCell className="text-right">{val.price}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</DialogContent>
				</Dialog>
			</div>
		</section>
	);
};

export default Menu;
