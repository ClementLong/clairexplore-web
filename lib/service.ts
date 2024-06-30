import axios from "axios";

const env = {
	API_URL: process.env.API_URL || "https://api.clairexplore.com",
	SITE_URL: process.env.SITE_URL || "https://clairexplore.com",
	STAGING: process.env.STAGING || false,
};

export const aboutService: any = async () =>
	await axios.get(`${env.API_URL}/about`);

export const homepageService: any = async () =>
	await axios.get(`${env.API_URL}/homepage`);

export const optionsService: any = async () =>
	await axios.get(`${env.API_URL}/options`);

export const articlesService: any = async () =>
	await axios.get(
		`${env.API_URL}/articles${env.STAGING ? "" : "?published=true"}`
	);

export const articlesByCountryService: any = async (country: string) =>
	await await axios.get(
		`${process.env.API_URL}/articles?country=${country}${
			env.STAGING ? "" : "&published=true"
		}`
	);

export const contactService: any = async () =>
	await axios.get(`${env.API_URL}/contact`);

export const cguService: any = async () =>
	await axios.get(`${env.API_URL}/cgu`);

export const articleService: any = async (slug: string) =>
	await axios.get(`${env.API_URL}/articles?slug=${slug}`);

export const searchService: any = async (search: string) =>
	await await axios.get(
		`${env.API_URL}/articles?title_contains=${search}&published=true`
	);

export const listingService: any = async (slug: string) =>
	await axios.get(`${env.API_URL}/listing`);
