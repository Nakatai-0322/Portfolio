<template>
	<b-row style="margin-left: 0; margin-right: 0">
		<b-col md="4">
			<b-img src="https://cdn.nakatai.xyz/img/nakatai.webp" id="avatar-img" alt="Nakatai" />
		</b-col>

		<b-col md="8">
			<h2 class="intro animate__animated animate__fadeInUp animate__fast">
				Hi!,
				<br />I<span>'m Nakatai!!!</span>
			</h2>

			<div class="col-md-10 info">

				<br />
				<b-button class="action-btn animate__animated animate__wobble animate__delay-4s animate__fast" to="/about">
					Explore >
				</b-button>

				<!-- .SOCIAL LINKS SECTION -->
				<div class="social-icons animate__animated animate__fadeInUp animate__delay-1s">
					<social-link :to="socialLinks.github">
						<GithubIcon />
					</social-link>

					<social-link :to="socialLinks.youtube">
						<YoutubeIcon />
					</social-link>

					<social-link :to="socialLinks.twitter">
						<TwitterIcon />
					</social-link>
				</div>
			</div>
		</b-col>
	</b-row>
</template>

<script>
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import LinkedinIcon from "vue-ionicons/dist/logo-linkedin.vue";
import TwitterIcon from "vue-ionicons/dist/logo-twitter.vue";
import FacebookIcon from "vue-ionicons/dist/logo-facebook.vue";
import YoutubeIcon from "vue-ionicons/dist/logo-youtube.vue";
import MailIcon from "vue-ionicons/dist/md-mail.vue";

export default {
	components: {
		GithubIcon,
		LinkedinIcon,
		TwitterIcon,
		FacebookIcon,
		YoutubeIcon,
		MailIcon,
	},

	data() {
		return {
			avatar: require("@/assets/avatar-1.webp"),
			socialLinks: {
				github: "https://go.nakatai.xyz/github",
				youtube: "https://go.nakatai.xyz/youtube",
				twitter: "https://go.nakatai.xyz/twitter",
			},
		};
	},

	head: {
		title: "Nakatai Portfolio",
		meta: [
			{
				hid: "description",
				name: "description",
				content:
					"",
			},
			{
				hid: "og:title",
				name: "og:title",
				content: "Nakatai Portfolio",
			},
			{
				property: "og:description",
				content:
					"",
			},
			{
				hid: "og:image",
				name: "og:image",
				content: "",
			},
		],
	},
	mounted() {
		this.$nextTick(() => {
			this.$nuxt.$loading.start();

			setTimeout(() => this.$nuxt.$loading.finish(), 500);
		});
	},
};
</script>
