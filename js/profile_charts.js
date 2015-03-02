
// Chart.defaults.global = {
//   responsive: true,
//   animation: false
// }

//-------------------------------------------

var ironData = {
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
      data : [10.5,null,null,11,null,null,12.5]
    }
  ]
}

var ctx = $("#canvas-iron")[0].getContext("2d");
new Chart(ctx, {width: 375, height: 187})
.Line(ironData, {
  segmentShowStroke : true,
  scaleShowValues: true,
  scaleValuePaddingX: 13,
  scaleValuePaddingY: 13,
  bezierCurve : false,
  scaleOverride: true,
  scaleSteps: 7,
  scaleStepWidth: 1,
  scaleStartValue: 9
});

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
      data : [35,38,45,42,47,39,50]
    }
  ]
}

var ctx = $("#canvas-protein")[0].getContext("2d");
window.myLine = new Chart(ctx, {width: 375, height: 187})
.Line(proData, {
  bezierCurve : false,
  scaleOverride: true,
  scaleSteps: 8,
  scaleStepWidth: 6 ,
  scaleStartValue: 25
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
      data : [180,null,null,212,null,null,230]
    }
  ]
}

var ctx = $("#canvas-b12")[0].getContext("2d");
new Chart(ctx, {width: 375, height: 187})
.Line(b12Data, {
  bezierCurve : false,
  scaleOverride: true,
  scaleSteps: 12,
  scaleStepWidth: 30,
  scaleStartValue: 80
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
      data : [134,131,133,129,130,129,128]
    }
  ]
}

var ctx = $("#canvas-weight")[0].getContext("2d");
new Chart(ctx, {width: 375, height: 187})
.Line(b12Data, {
  scaleShowValues: true,
  scaleValuePaddingX: 13,
  scaleValuePaddingY: 13,
  bezierCurve : false,
  scaleOverride: true,
  scaleSteps: 8,
  scaleStepWidth: 5,
  scaleStartValue: 110
});

//-------------------------------------------

$( ".clickme" ).click(function() {
  $(this).find(".canvas-background").animate({
    //opacity: 0.25,
    // left: "+=50",
    height: "toggle"
  }, 333, function() {
    // Animation complete.
  });
});
  