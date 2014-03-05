var WeatherView = Backbone.View.extend({

	template: _.template($('#weather-template').text()),

	className: 'weather-container',

	initialize: function(){

		$('body').prepend(this.el)
		this.render()
	},

	render: function(){

		this.$el.html(this.template({weather: this.model}))
	}

})
