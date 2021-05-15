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
});

