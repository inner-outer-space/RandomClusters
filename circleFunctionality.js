d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv", d3.autoType)
  .then(function(data){
        var mySVG = d3.select('svg')
        var circles = mySVG.selectAll("circle").data(data);

        circles.join("circle")
              .attr("cx", d => d.Xi)
              .attr("cy", d => d.Yi)
              .attr("r", 5)
              .attr('fill', d => d.color)
              .attr('stroke','black')
              .transition("trans_1")      
              .delay(500)                 
              .duration(5000)            
              .ease(d3.easeBounce)
              .attr("cx", d => d.Xf)
              .attr("cy", d => d.Yf);
   })

