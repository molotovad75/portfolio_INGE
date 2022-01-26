
//Chart JS
// let techno_logicielles=['JAVA Standard Edition', 'C/C++, C#, VB.net, VBA, Python', 'Git/GitHub', 'MVC, Bridge, décorateur'],
//     techno_web=['HTML5/CSS3', 'PHP7, JAVA EE', 'JavaScript', 'Frameworks JS/PHP et bootstrap'],
//     techno_BDD=['SQL', 'PL/SQL', 'MCD/MLD', 'Extentions MERISE'],
//     techno_systèmes_réseaux=['Systèmes d'/'exploitation','Administration systèmes et réseaux','Notions modèle OSI/TCP IP/UDP','Shell'],
//Compétences 

// var message=document.getElementById('message_à_afficher').value;

// function afficher_message(new_message) {
//     message=new_message;
// }

function competences(){
    var getElemChart = document.getElementById('graph_autres_competences2').getContext('2d');
    var myRadarChart = new Chart(getElemChart, 
        {
        type: 'radar',
            data: 
            {
                
                 labels: ['HTML5/CSS3', 'PHP7, JAVA EE', 'JavaScript', 'Frameworks JS/PHP et bootstrap'],
                
                datasets: [
                {
                    data: [20, 33, 56, 12],
                    // labels: ['HTML5/CSS3', 'PHP7, JAVA EE', 'JavaScript', 'Frameworks JS/PHP et bootstrap'],
                    label:"Dévelopement web",
                    backgroundColor: "rgba(0,28,255,0.5)",
                    borderColor:'rgba(19,255,0,0.5)',
                },
                {
                    data: [10, 43, 8, 5],
                    // labels: ['JAVA Standard Edition', 'C/C++, C#, VB.net, VBA, Python', 'Git/GitHub', 'MVC, Bridge, décorateur'],
                    label:"Dévelopement logiciel",
                    backgroundColor: "rgba(19,255,0,0.5)",
                    borderColor:'rgba(0,28,255,0.5)',
                },
                {
                    data: [30, 3, 1, 28],
                    // labels: ['SQL,PL/SQL', 'Microsoft Access, MySQL', 'MCD MLD', 'Extensions MERISE'],
                    label:"Base de données",
                    backgroundColor: "rgba(255,0,0,0.5)",
                    borderColor:'rgba(0,28,255,0.5)',
                },
                {
                    data: [7, 33, 27, 4],
                    // labels: ['UNIX', 'Administration systèmes et réseaux', 'Modèle OSI', 'TCP/IP UDP/IP'],
                    label:"Systèmes et réseaux",
                    backgroundColor: " rgba(11,14,15,0.5)",
                    borderColor:'rgba(0,28,255,0.5)',
                }]	

            },
    });
    //Fin compétences 
}





function langues(){
    var getElemChartAutres_compétences = document.getElementById('graph_autres_competences1').getContext('2d');
    var myRadar2chart= new Chart(getElemChartAutres_compétences,
    {
        type:'bar',
        data:
        {
            labels: ['Maitrise des langues'],
            datasets:[{
                label:['Niveau de connaissance pour anglais'],

                data: [12],

                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',//couleur rouge
                ],
                borderWidth: 1,
                labels: ['Anglais']
            },
            {
                label:['Niveau de connaissance pour esapgnol'],
                data: [19],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.5)',//couleur bleue
                ],
                borderWidth: 1,
                labels: ['Espagnol']
            },
            {
                label:['Niveau de connaissance pour portugais'],
                data: [3],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.5)'//couleur orangée
                ],
                borderWidth: 1,
                labels: ['Portugais']
            },
            {
                label:['Niveau de connaissance en français'],
                data: [100],
                backgroundColor: [
                    'rgba(241, 0, 255, 0.5)'//couleur rosée
                ],
                borderWidth: 1,
                labels: ['Français']
            }
            ]
        },
    }
);

}




function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }
