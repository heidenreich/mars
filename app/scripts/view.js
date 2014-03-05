var MainView = Backbone.View.extend({

	className: 'container',

	initialize: function(options){

		weather = new WeatherData();

		weather.fetch();

		$('body').html(this.el)
	},

	render: function(){
		new WeatherView({model: weather})
	}
})



