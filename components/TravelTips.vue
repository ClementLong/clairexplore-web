<template>
	<div class="md:relative">
		<div class="md:absolute md:p-4 pt-4 md:py-4 -left-24 -top-8 normal-case">
			<div
				class="flex flex-col md:flex-row md:p-2 text-lightblack bg-white md:border-darkwhite md:border-2 rounded-lg md:mt-8">
				<div class="flex flex-col">
					<a v-for="tips in allTips" :href="tips.url" class="flex p-2 md:pr-4 rounded-lg hover:bg-darkwhite"
						@click="pushEvent(tips.url)" target="_blank">
						<div v-html="tips.icon" class="w-14"></div>
						<div class="ml-4">
							<div class="text-xl font-bold font-heading">{{ tips.title }}</div>
							<div class="paragraph font-body travelTips_subTitle">{{ tips.subTitle }}</div>
						</div>
					</a>
				</div>
				<div class="flex flex-col justify-between py-4 md:py-2 md:ml-2 mr-2 md:mr-0">
					<nuxt-link
						class="relative flex flex-row-reverse md:flex-row group items-center hover:bg-darkwhite mb-2 md:mb-0"
						:to="{ name: 'article', params: { article: article.url } }" v-for="article in allArticles">
						<div class="w-48">
							<img :src="article.image" alt="article.preview.alternativeText"
								class="h-28 w-full overflow-hidden flex justify-center items-center rounded object-cover">
						</div>
						<div class="ml-4" style="width: calc(100% - 12rem);">
							<div class="font-bold text-right mr-4 font-body block md:hidden"
								style="font-size: 16px; line-height: 20px;">{{ article.title }} : {{ article.subTitle
								}}
							</div>
							<div class="text-l font-bold font-body hidden md:block">{{ article.title }} :</div>
							<div class="paragraph font-body hidden md:block">{{ article.subTitle }}</div>
						</div>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import activity from '~/assets/icons/activity.svg?raw'
import car from '~/assets/icons/car.svg?raw'
import esim from '~/assets/icons/esim.svg?raw'
import hotel from '~/assets/icons/hotel.svg?raw'
import insurance from '~/assets/icons/insurance.svg?raw'
import plane from '~/assets/icons/plane.svg?raw'
import transport from '~/assets/icons/transport.svg?raw'

interface TipsSection {
	icon: string,
	title: string,
	subTitle: string,
	url: string
}

interface TipsArticle {
	image: string,
	title: string,
	subTitle: string,
	url: string
}

const allTips: Array<TipsSection> = [
	{
		icon: hotel,
		title: 'Trouver un hôtel',
		subTitle: 'Via Booking',
		url: 'https://www.booking.com/index.html?aid=7956554',
	},
	{
		icon: plane,
		title: 'Réserver un vol à petit prix',
		subTitle: 'Via Trips',
		url: 'https://trip.tp.st/966P3MTX',
	},
	{
		icon: car,
		title: 'Louer une voiture',
		subTitle: 'Via DiscoverCars',
		url: 'https://www.discovercars.com/fr?a_aid=clairexplore',
	},
	{
		icon: transport,
		title: 'Réserver un trajet en bus/train/ferry',
		subTitle: 'Via 12Go',
		url: 'https://12go.tp.st/zNQibnDy',
	},
	{
		icon: activity,
		title: 'Réserver des activités',
		subTitle: 'Via Get Your Guide',
		url: 'https://www.getyourguide.com/?partner_id=5WEACJC',
	},
	{
		icon: insurance,
		title: 'Souscrire à une assurance voyage',
		subTitle: 'Via Chapka',
		url: 'https://www.chapkadirect.fr/index.php?action=produit&id=924&app=clairexplore ',
	},
	{
		icon: esim,
		title: 'Acheter une carte e-sim',
		subTitle: 'Via Holafly',
		url: 'https://holafly.sjv.io/55Mxe1',
	},
]

const allArticles: Array<TipsArticle> = [
	{
		image: 'https://clairexplore.s3.eu-west-3.amazonaws.com/medium_3_dcdeb3200b.jpg',
		title: 'Préparer son sac à dos de voyage',
		subTitle: '25 accessoires indispensables',
		url: 'preparer-son-sac-a-dos-de-voyage-accessoires-indispensables',
	},
	{
		image: 'https://clairexplore.s3.eu-west-3.amazonaws.com/medium_4_4267c84093.jpg',
		title: 'Bons plans voyage',
		subTitle: '10 conseils pour économiser de l\'argent',
		url: 'conseils-preparer-economiser-voyage',
	},
	{
		image: 'https://clairexplore.s3.eu-west-3.amazonaws.com/medium_Design_sans_titre_78f2d1cf1d.jpg',
		title: 'Matériel photo & vidéo',
		subTitle: 'mon équipement et mes conseils',
		url: 'materiel-photo-video',
	},
	{
		image: 'https://clairexplore.s3.eu-west-3.amazonaws.com/medium_5_995463f59d.jpg',
		title: 'Matériel randonnée & bivouac',
		subTitle: 'tous mes conseils',
		url: 'equipement-materiel-bivouac-randonnee',
	},
]

const pushEvent = (url: string) => {
	const { gtag } = useGtag()

	gtag('event', 'affiliate_link', {
		url: url
	});
}
</script>

<style>
.travelTips_subTitle {
	color: #4A9690
}
</style>
