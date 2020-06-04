<template>
	<div>
		<ArticleHeader
			title="15 EXPÉRIENCES À NE PAS MANQUER LORS DE VOTRE VOYAGE À DUBAÏ"
			date="2020-07-01"
			location="Emirats Arabes Unis"
			cover="/images/test.jpg"
		/>

		<Title text="1. Monter en haut de la Tour Burj Khalifa et profiter de la vue sur tout Dubaï" />
		<Paragraph text="La crique est le bras de mer qui séparent deux quartiers historiques de Dubaï : Bur Dubaï et Deira. Pour se rendre d’un quartier à l’autre, je vous conseille de monter à bord d’un abra. C’est une embarcation traditionnelle en bois accessible depuis l’une des stations situées le long de la crique." />
		<Subtitle text="Monter en haut de la Tour Burj Khalifa et profiter de la vue sur tout Dubaï with long text" />
		<Paragraph text="La crique est le bras de mer qui séparent deux quartiers historiques de Dubaï : Bur Dubaï et Deira. Pour se rendre d’un quartier à l’autre, je vous conseille de monter à bord d’un abra. C’est une embarcation traditionnelle en bois accessible depuis l’une des stations situées le long de la crique." />
		<Collapsible
			title="Monter en haut de la Tour Burj Khalifa et profiter"
			text="La crique est le bras de mer qui séparent deux quartiers historiques de Dubaï : Bur Dubaï et Deira. Pour se rendre d’un quartier à l’autre, je vous conseille de monter à bord d’un abra. C’est une embarcation traditionnelle en bois accessible depuis l’une des stations situées le long de la crique."
		/>
		<Tips text="La crique est le bras de mer qui séparent deux quartiers historiques de Dubaï : Bur Dubaï et Deira. Pour se rendre d’un quartier à l’autre, je vous conseille de monter à bord d’un abra. C’est une embarcation traditionnelle en bois accessible depuis l’une des stations situées le long de la crique." />

		<Divider />

		<Single image="/images/test.jpg" alt="nom de l'image" />
		<Single image="/images/test2.jpg" alt="nom de l'image" title="Titre de l'image" />

		<BigPicture image="/images/test2.jpg" alt="nom de l'image" title="Titre de l'image" />

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


		<Cover image="/images/test.jpg" alt="nom de l'image" title="test" />

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
		/>

	</div>
</template>

<script lang="ts">
// import axios from 'axios'

export default {
	// async asyncData({ params }: any) {
	// 	const { data } = await axios.get(`https://my-api/posts/${params.article}`)
	// 	return { content: data }
	// }
}
</script>
