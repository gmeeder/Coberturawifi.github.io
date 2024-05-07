var gauge = function(container, configuration) {
	var that = {};
	var config = {
		size						: 200,
		clipWidth					: 200,
		clipHeight					: 110,
		ringInset					: 20,
		ringWidth					: 20,
		
		pointerWidth				: 11,
		pointerTailLength			: 3,
		pointerHeadLengthPercent	: 0.5,
		
		minValue					: -100,
		maxValue					: -40,
		
		minAngle					: -90,
		maxAngle					: 90,
		
		majorTicks					: 3,
		labelFormat					: d3.format(',g'),
		labelInset					: 10,
		
		arcColorFn					: ['#dddddd', '#F7EF24', '#62B846'],

	};
	var range = undefined;
	var r = undefined;
	var pointerHeadLength = undefined;
	var value = 0;
	
	var svg = undefined;
	var arc = undefined;
	var scale = undefined;
	var ticks = undefined;
	var tickData = undefined;
	var pointer = undefined;

	var donut = d3.layout.pie();
	
	function deg2rad(deg) {
		return deg * Math.PI / 180;
	}
	
	function newAngle(d) {
		var ratio = scale(d);
		var newAngle = config.minAngle + (ratio * range);
		return newAngle;
	}
	
	function configure(configuration) {
		var prop = undefined;
		for ( prop in configuration ) {
			config[prop] = configuration[prop];
		}
		
		range = config.maxAngle - config.minAngle;
		r = config.size / 2;
		pointerHeadLength = Math.round(r * config.pointerHeadLengthPercent);

		// a linear scale that maps domain values to a percent from 0..1
		scale = d3.scale.linear()
			.range([0,1])
			.domain([config.minValue, config.maxValue]);
			
		ticks = scale.ticks(config.majorTicks);
		tickData = d3.range(config.majorTicks).map(function() {return 1/config.majorTicks;});
		
		arc = d3.svg.arc()
			.innerRadius(r - config.ringWidth - config.ringInset)
			.outerRadius(r - config.ringInset)
			.startAngle(function(d, i) {
				var ratio = d * i;
				return deg2rad(config.minAngle + (ratio * range));
			})
			.endAngle(function(d, i) {
				var ratio = d * (i+1);
				return deg2rad(config.minAngle + (ratio * range));
			});
	}
	that.configure = configure;
	
	function centerTranslation() {
		return 'translate('+r +','+ r +')';
	}
	
	function isRendered() {
		return (svg !== undefined);
	}
	that.isRendered = isRendered;
	
	function render(newValue) {
		svg = d3.select(container)
			.append('svg:svg')
				.attr('class', 'gauge')
				.attr('width', config.clipWidth)
				.attr('height', config.clipHeight);
		
		var centerTx = centerTranslation();
		
		var arcs = svg.append('g')
				.attr('class', 'arc')
				.attr('transform', centerTx);

		arcs.selectAll('path')
				.data(tickData)
			.enter().append('path')
				.attr('fill', function(d, i) {
					return config.arcColorFn[i];
				})
				.attr('stroke', '#ffffff')
				.attr('stroke-width', '6px')
				.attr('d', arc);
		

		var lg = svg.append('g')
				.attr('class', 'label')
				.attr('transform', centerTx);

		lg.selectAll('text')
				.data([-100, -86, -60, -40])
			.enter().append('text')
				.attr('transform', function(d) {
					if (d==-86){
						d=-80;
					}
					var ratio = scale(d);
					var newAngle = config.minAngle + (ratio * range);
					return 'rotate(' +(newAngle) +') translate(0,' +(config.labelInset - r) +')';
				})
				.text(config.labelFormat);

		lg.selectAll('line')
			.data([-100, -86, -60, -40])
			 .enter()
		    .append('line')
		    .attr('class', 'tickline')
		    .attr('x1', 0)
		    .attr('y1', 5)
		    .attr('x2', 0)
		    .attr('y2', 21)
		    .attr('transform', function(d) {
					if (d==-86){
						d=-80;
					}
					var ratio = scale(d);
					var newAngle = config.minAngle + (ratio * range);
					return 'rotate(' +(newAngle) +') translate(0,' +(config.labelInset - r) +')';
				})
		    .style('stroke', '#282828')
    		.style('stroke-width', '4px')
    		.style("stroke-linecap", "round");

		var lineData = [ [config.pointerWidth / 2, 0], 
						[0, -pointerHeadLength],
						[-(config.pointerWidth / 2), 0],
						[0, config.pointerTailLength],
						[config.pointerWidth / 2, 0] ];

		var pointerLine = d3.svg.line().interpolate('monotone');
		
		var pg = svg.append('g').data([lineData])
				.attr('class', 'pointer')
				.attr('transform', "translate("+config.clipWidth/2+",90)");
				
		pointer = pg.append('path')
			.attr('d', pointerLine)
			.attr('transform', 'rotate(' +config.minAngle +')');
			
		update(newValue === undefined ? 0 : newValue);
	}
	that.render = render;
	
	function update(value) {
		
		pointer.attr('transform', 'rotate('+value+')');
	}
	that.update = update;

	configure(configuration);
	
	return that;
};