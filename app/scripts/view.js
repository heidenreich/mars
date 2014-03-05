var MainView = Backbone.model.extend({

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


var WeatherView = Backbone.model.extend({

	template: _.template($('#weather-template').text)

	className: 'weather-container',

	initialize: function(){

		$('body').prepend(this.el)
		this.render()
	},

	render: function(){

		this.$el.html(this.template({weather: this.model}))
	}

})
