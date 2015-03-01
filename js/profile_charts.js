
// Chart.defaults.global = {
//   responsive: true,
//   animation: false
// }

//-------------------------------------------

var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var lineChartData2 = {
  labels : ["January","February","March","April","May","June","July"],
  datasets : [
    {
      label: "My First dataset",
      fillColor : "rgba(0,220,220,0)",
      strokeColor : "rgba(220,220,220,1)",
      pointColor : "rgba(0,90,0,1)",
      pointStrokeColor : "#fff",
      pointHighlightFill : "#fff",
      pointHighlightStroke : "rgba(220,220,220,1)",
      data : [.09,null,.04,null,.02,.07,.03]
    }
  ]
}

//-------------------------------------------

var proData = {
  labels : ["January","February","March","April","May","June","July"],
  datasets : [
    {
      label: "My First dataset",
      fillColor : "rgba(0,220,220,0)",
      strokeColor : "rgba(220,220,220,1)",
      pointColor : "rgba(0,90,0,1)",
      pointStrokeColor : "#fff",
      pointHighlightFill : "#fff",
      pointHighlightStroke : "rgba(220,220,220,1)",
      data : [.03,null,.04,null,.02,.07,.03]
    }
  ]
}

var ctx = $("#canvas-protein")[0].getContext("2d");
window.myLine = new Chart(ctx, {width: 375, height: 187})
.Line(proData, {
  bezierCurve : false,
  scaleOverride: true,
  scaleSteps: 8,
  scaleStepWidth: .01,
  scaleStartValue: .01
});

//-------------------------------------------

var b12Data = {
  labels : ["January","February","March","April","May","June","July"],
  datasets : [
    {
      label: "My First dataset",
      fillColor : "rgba(0,220,220,0)",
      strokeColor : "rgba(220,220,220,1)",
      pointColor : "rgba(0,90,0,1)",
      pointStrokeColor : "#fff",
      pointHighlightFill : "#fff",
      pointHighlightStroke : "rgba(220,220,220,1)",
      data : [.01,null,null,.07,null,null,.03]
    }
  ]
}

var ctx = $("#canvas-b12")[0].getContext("2d");
new Chart(ctx, {width: 375, height: 187})
.Line(b12Data, {
  bezierCurve : false,
  scaleOverride: true,
  scaleSteps: 8,
  scaleStepWidth: .01,
  scaleStartValue: .01
});

$( ".clickme" ).click(function() {
  $(this).find(".canvas-background").animate({
    //opacity: 0.25,
    // left: "+=50",
    height: "toggle"
  }, 333, function() {
    // Animation complete.
  });
});
  