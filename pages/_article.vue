<template>
	<div>
		<ArticleHeader
			:title="article.title"
			:date="article.date"
			:location="article.country"
			:cover="article.cover"
		/>

		<div v-for="(component, index) in article.content" :key="index">
			<Single
				v-if="component.__component == 'article.single'"
				:size="component.size"
				:image="component.image"
				:alt="component.image.alternativeText"
				:title="component.image.caption"
			/>

			<Title
				v-if="component.__component == 'article.title'"
				:size="component.size"
				:text="component.title"
			/>

		</div>

		<!-- <Title text="1. Monter en haut de la Tour Burj Khalifa et profiter de la vue sur tout Dubaï" />
		<Paragraph text="La crique est le bras de mer qui séparent deux quartiers historiques de Dubaï : Bur Dubaï et Deira. Pour se rendre d’un quartier à l’autre, je vous conseille de monter à bord d’un abra. C’est une embarcation traditionnelle en bois accessible depuis l’une des stations situées le long de la crique." />
		<Subtitle text="Monter en haut de la Tour Burj Khalifa et profiter de la vue sur tout Dubaï with long text" />
		<Paragraph text="La crique est le bras de mer qui séparent deux quartiers historiques de Dubaï : Bur Dubaï et Deira. Pour se rendre d’un quartier à l’autre, je vous conseille de monter à bord d’un abra. C’est une embarcation traditionnelle en bois accessible depuis l’une des stations situées le long de la crique." />
		<Collapsible
			title="Monter en haut de la Tour Burj Khalifa et profiter"
			text="La crique est le bras de mer qui séparent deux quartiers historiques de Dubaï : Bur Dubaï et Deira. Pour se rendre d’un quartier à l’autre, je vous conseille de monter à bord d’un abra. C’est une embarcation traditionnelle en bois accessible depuis l’une des stations situées le long de la crique."
		/>
		<Tips text="La crique est le bras de mer qui séparent deux quartiers historiques de Dubaï : Bur Dubaï et Deira. Pour se rendre d’un quartier à l’autre, je vous conseille de monter à bord d’un abra. C’est une embarcation traditionnelle en bois accessible depuis l’une des stations situées le long de la crique." />

		<Divider />

		<Single size="small" image="/images/test.jpg" alt="nom de l'image" />
		<Single size="big" image="/images/test2.jpg" alt="nom de l'image" title="Titre de l'image" />
		<Single size="cover" image="/images/test2.jpg" alt="nom de l'image" title="Titre de l'image" />

		<Duo
			left="/images/test.jpg" left-alt="nom de l'image"
			right="/images/test.jpg" right-alt="nom de l'image"
		/>
		<Duo
			left="/images/test.jpg" left-alt="nom de l'image" left-title="nom de l'image"
			right="/images/test2.jpg" right-alt="nom de l'image" right-title="nom de l'image 2"
		/>

		<Double
			left="/images/test.jpg" left-alt="nom de l'image"
			right="/images/test2.jpg" right-alt="nom de l'image"
		/>

		<Double
			left="/images/test.jpg" left-alt="nom de l'image" left-title="nom de l'image"
			right="/images/test2.jpg" right-alt="nom de l'image" right-title="nom de l'image 2"
		/>

		<MixedTextImage
			:reverse="true"
			image="/images/test.jpg" alt="nom de l'image"
			text="La crique est le bras de mer qui séparent deux quartiers historiques de Dubaï : Bur Dubaï et Deira. Pour se rendre d’un quartier à l’autre, je vous conseille de monter à bord d’un abra. C’est une embarcation traditionnelle en bois accessible depuis l’une des stations situées le long de la crique."
		/>

		<MixedTextImage
			:reverse="false"
			image="/images/test.jpg" alt="nom de l'image" title="test"
			text="La crique est le bras de mer qui séparent deux quartiers historiques de Dubaï : Bur Dubaï et Deira. Pour se rendre d’un quartier à l’autre, je vous conseille de monter à bord d’un abra. C’est une embarcation traditionnelle en bois accessible depuis l’une des stations situées le long de la crique."
		/>

		<MixedTextImage
			:reverse="true"
			image="/images/test.jpg" alt="nom de l'image"
			text="La crique est le bras de mer qui séparent deux quartiers historiques de Dubaï : Bur Dubaï et Deira. Pour se rendre d’un quartier à l’autre, je vous conseille de monter à bord d’un abra. C’est une embarcation traditionnelle en bois accessible depuis l’une des stations situées le long de la crique."
		/>

		<Scotch image="/images/test.jpg" />

		<PolaSingle image="/images/test.jpg" alt="nom de l'image" title="test" />
		<PolaSingle image="/images/test2.jpg" alt="nom de l'image" />

		<PolaDuo
			left="/images/test.jpg" left-alt="nom de l'image"
			right="/images/test2.jpg" right-alt="nom de l'image" right-title="nom de l'image 2"
		/>

		<PolaTrio
			left="/images/test.jpg" left-alt="nom de l'image"
			right="/images/test2.jpg" right-alt="nom de l'image" right-title="nom de l'image 2"
			center="/images/test.jpg" center-alt="nom de l'image"
		/>

		<MixedTextPolaroid
			:reverse="true"
			image="/images/test.jpg" alt="nom de l'image"
			text="La crique est le bras de mer qui séparent deux quartiers historiques de Dubaï : Bur Dubaï et Deira. Pour se rendre d’un quartier à l’autre, je vous conseille de monter à bord d’un abra. C’est une embarcation traditionnelle en bois accessible depuis l’une des stations situées le long de la crique."
		/>

		<MixedTextPolaroid
			:reverse="false"
			image="/images/test2.jpg" alt="nom de l'image"
			text="La crique est le bras de mer qui séparent deux quartiers historiques de Dubaï : Bur Dubaï et Deira. Pour se rendre d’un quartier à l’autre, je vous conseille de monter à bord d’un abra. C’est une embarcation traditionnelle en bois accessible depuis l’une des stations situées le long de la crique."
		/>

		<Video />
		<Map url="https://www.google.com/maps/d/embed?mid=18WmJKsjMiMmpWQjosrVfnhD9owQQPK5R" />
		<Slider
			:images="[{ url: '/images/test2.jpg'},{ url:'/images/test.jpg'}]"
		/> -->

	</div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
	async asyncData({ params }: any) {
		const article = await axios.get(`http://localhost:1337/articles?slug=${params.article}`)
		return { article: article.data[0] }
	}
}
</script>
