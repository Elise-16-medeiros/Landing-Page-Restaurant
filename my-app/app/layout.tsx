import type { Metadata } from "next";
import { Josefin_Sans, Cormorant_Infant } from "next/font/google";
import "./globals.css";
import AuthProvider from "./_providers/auth";
import Footer from "./_components/Footer";

const josefin = Josefin_Sans({
	subsets: ["latin"],
	weight: "400",
	variable: "--josefin-font",
});

const cormorant = Cormorant_Infant({
	subsets: ["latin"],
	weight: "400",
	variable: "--cormorant-font",
});

export const metadata: Metadata = {
	title: "Restaurant Botticelli",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${josefin.variable} ${cormorant.variable} bg-stone-50`}>
				<AuthProvider>
					{children}

					<Footer />
				</AuthProvider>
			</body>
		</html>
	);
}
