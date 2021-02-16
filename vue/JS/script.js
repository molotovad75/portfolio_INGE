
//Chart JS
// let techno_logicielles=['JAVA Standard Edition', 'C/C++, C#, VB.net, VBA, Python', 'Git/GitHub', 'MVC, Bridge, décorateur'],
//     techno_web=['HTML5/CSS3', 'PHP7, JAVA EE', 'JavaScript', 'Frameworks JS/PHP et bootstrap'],
//     techno_BDD=['SQL', 'PL/SQL', 'MCD/MLD', 'Extentions MERISE'],
//     techno_systèmes_réseaux=['Systèmes d'/'exploitation','Administration systèmes et réseaux','Notions modèle OSI/TCP IP/UDP','Shell'],
//Compétences 
var getElemChart = document.getElementById('graph_competences').getContext('2d');
    var myRadarChart = new Chart(getElemChart, 
        {
        type: 'radar',
            data: 
            {
                labels: ['JAVA Standard Edition', 'C/C++, C#, VB.net, VBA, Python', 'Git/GitHub', 'MVC, Bridge, décorateur'],
                labels: ['HTML5/CSS3', 'PHP7, JAVA EE', 'JavaScript', 'Frameworks JS/PHP et bootstrap'],
                
                datasets: [
                {
                    data: [20, 33, 56, 12],
                    label:"Dévelopement web",
                    backgroundColor: "rgba(0,28,255,0.5)",
                    borderColor:'rgba(19,255,0,0.5)',
                },
                {
                    data: [10, 43, 8, 5],
                    label:"Dévelopement logiciel",
                    backgroundColor: "rgba(19,255,0,0.5)",
                    borderColor:'rgba(0,28,255,0.5)',
                },
                {
                    data: [30, 3, 1, 28],
                    label:"Base de données",
                    backgroundColor: "rgba(255,0,0,0.5)",
                    borderColor:'rgba(0,28,255,0.5)',
                },
                {
                    data: [7, 33, 27, 4],
                    label:"Systèmes et réseaux",
                    backgroundColor: " rgba(11,14,15,0.5)",
                    borderColor:'rgba(0,28,255,0.5)',
                }]	

            },
    });
    //Fin compétences 




function vérif_graphes() {
    
}

var getElemChartAutres_compétences = document.getElementById('graph_autres_competences').getContext('2d');
var myRadar2chart= new Chart(getElemChartAutres_compétences,
    {
        type:'bar',
        data:
        {
            labels: ['Anglais', 'Espagnol', 'Portugais'],
            datasets:[{
                label:'Niveau de connaissance en %',

                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
    }
);

function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }