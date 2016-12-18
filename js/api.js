$(document).ready(function() {

	var streamers = ["lirik", "yznb", "eleaguetv"];
  	var cb = '?client_id=qlf937bswx51k79kcz1w2gjxt1e305&callback=?';
	var url = 'https://api.twitch.tv/kraken/';
	

	streamers.forEach(function(stream) {

		$.getJSON('https://api.twitch.tv/kraken/streams/' + stream + cb, function(data) {


		    if (data["stream"] == null) { 
		        console.log(stream + " is offline");
		    } 

		    else {

	       		console.log(stream + " is online");

				var streamerName = data.stream.channel.name;
				var streamTitle = data.stream.channel.status;
				var gameCurrentlyPlayed = data.stream.channel.game;
				//var logo = data.stream.channel.logo;
				var iframeUrl = 'http://player.twitch.tv/?channel=';
				var chatUrl = 'http://www.twitch.tv/';

		        $('.stream-name').html('<h2> ' + streamerName + ' </h2>');
		        $('.stream-game-played').html('<h2>Spelar: ' + gameCurrentlyPlayed + ' </h2>');
				$('.stream-title').html('<h2> ' + streamTitle + ' </h2>');
		        $('#app').html('<iframe controls autoplay="false" allowfullscreen="true" frameborder="0" class="iframe-player" src="' + iframeUrl + stream + '&autoplay=false"></iframe>');
				$('.chat-container').html('<iframe width="100%" height="500px" controls allowfullscreen="true" frameborder="0" src="' + chatUrl + stream + '/chat"></iframe>');
			}
		});

	});

});