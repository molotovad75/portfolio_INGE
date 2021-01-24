

var getElemChart = document.getElementById("graph_competences");
console.log(getElemChart);

var radar=new Chart(getElemChart,{
    type:'radar',
    data: {
        labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
        datasets: [{data: [20, 10, 4, 2]  }]
    },
    
    options = {
        scale: {
            angleLines: {
                display: true
            },
            suggestedMin: 50,
            suggestedMax: 100
        }
    }
})
radar.display=true;
// var myChart=new chartJS(getElemChart,{
//     type:'line',

//     data:{
//         labels:["HTML/CSS","JavaScript","FrameworksJS","PHP","Bootstrap","JavaJ2EE"],
//         datasets:[{
//             label:"My first dataset",
//             backgroundColor: red,
//             borderColor: blue,
//             data: [1,5,3,4,8,7]
//         }]
//     },
//     option:{}
// });{}