// import { chartJS } from 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.6/Chart.bundle.min.js';

var getElemChart = document.getElementById("myChart");
var myChart=new chartJS(getElemChart,{
    type:'line',

    data:{
        labels:["HTML/CSS","JavaScript","FrameworksJS","PHP","Bootstrap","JavaJ2EE"],
        datasets:[{
            label:"My first dataset",
            backgroundColor: red,
            borderColor: blue,
            data: [1,5,3,4,8,7]
        }]
    },
    option:{}
});