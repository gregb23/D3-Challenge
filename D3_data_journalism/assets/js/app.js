// @TODO: YOUR CODE HERE!

//set up SVG 
var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

//create 
var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var chartGroup = svg.append("g")    
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

//get data
d3.csv("assets/data/data.csv").then(function(data){
    //check to make sure data loaded properly
    console.log(data);  
    
    //get smoker stats and age data
    data.forEach(function (obesity){
        obesity.obesity = +obesity.obesity;
        obesity.obesityHigh = +obesity.obesityHigh;
        obesity.obesityLow = +obesity.obesityLow;
        obesity.age = +obesity.age;
    });

    // create linear schale function
    var xLinearScale = d3
        .scaleLinear()
        .domain([28, d3.max(data, (d) => d.age) +1])
        .range([0, width]);

    var yLinearScale = d3.scaleLinear()
        .domain([20, d3.max(data, (d) => d.obesity) +1])
        .range([height, 0]);

    //set up axis
    var xAxis = d3.axisBottom(xLinearScale);
    var yAxis = d3.axisLeft(yLinearScale);

    //add axis to chart
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);
    chartGroup.append("g").call(yAxis); 
    
    //create circles for plot
    var circlesGroup = chartGroup
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d) => xLinearScale(d.age))
        .attr("cy", (d) => yLinearScale(d.obesity))
        .attr("r", "12")
        .attr("fill", "purple")
        .attr("opacity", ".75");


    
});

