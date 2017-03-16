module.exports = {
	entry : './main.js',
	output : {
		filename : 'app.js',
		library:'app',
		libararyTarget:'amd'
	},
	watch : true,
	loaders : [{
		test:/\.css$/,
		loaders:['style','csss']
	}],
	externals:{
		'angular':true,
	}
};
