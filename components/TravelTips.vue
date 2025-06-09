<template>
	<div class="relative">
		<div class="absolute p-4 -left-4 -top-8">
			<div class="flex flex-col p-2 text-lightblack bg-white border-darkwhite border-2 rounded-lg mt-8">
				<a v-for="tips in allTips" :href="tips.url" class="flex p-2 pr-4 rounded-lg hover:bg-darkwhite" target="_blank">
					<div v-html="tips.icon" class="w-14"></div>
					<div class="ml-4">
						<div class="text-xl font-bold font-heading">{{ tips.title }}</div>
						<div class="paragraph font-body travelTips_subTitle">{{ tips.subTitle }}</div>
					</div>
				</a>
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
</script>

<style>
.travelTips_subTitle {
	color: #4A9690
}
</style>
