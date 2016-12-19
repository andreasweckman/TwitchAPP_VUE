<template>
	<div class="streams">
		<div class="stream" v-for="stream in streams">
			<div class="stream-name">{{ stream.name }}</div>
			<div class="stream-title">{{ stream.game }}</div>
			<div class="stream-game-played"></div>
			<div class="stream-container">
				<iframe controls autoplay="false" allowfullscreen="true" frameborder="0" class="iframe-player" v-bind:src="stream.iframeUrl"></iframe>
			</div>
			<button class="chat-button" v-on:click.prevent="stream.showChat = !stream.showChat">Show Chat</button>
			<div class="chat-container" v-show="stream.showChat"></div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'streams',
	data () {
		return {
		  	streams: []
		}
	},
	created() {
		let streamers = ["lirik", "yznb", "eleaguetv", "esl_csgo"]

		let url = 'https://api.twitch.tv/kraken/streams/'

		let clientId = 'qlf937bswx51k79kcz1w2gjxt1e305'

		let self = this

		streamers.forEach(function (stream) {
			let resource = self.$resource(url + stream + '?client_id=' + clientId)

			resource.get({}).then((data) => {
				if(data.body.stream !== null) {
					self.streams.push({
						showChat: false,
						game: data.body.stream.game,
						viewers: data.body.stream.viewers,
						name: data.body.stream.channel.name,
						iframeUrl: 'http://player.twitch.tv/?channel=' + data.body.stream.channel.name + '&autoplay=false'
					})
				}
			})
		})

	}
}

</script>

<style>



</style>