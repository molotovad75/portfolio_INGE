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


function exec_une_fois(nb_exec, nom_class){
    let i="nav";
    nom_class.className=i;
}



function myFunction(num) {
    
    var x = document.getElementById("nav");
    if(num==0){
        exec_une_fois(num,x);
    }
    
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
}

//IL FAUT FINIR LA FONCTION QUI CODE Le menu 

function age(){
    let age_=0;
    var now=new Date();

    let annee=now.getFullYear()-1999;

    if(now.getMonth()<7 || (now.getDay()<2 && now.getMonth()==7) ){
        age_=annee-1;
    }else if(now.getMonth()>=7 || (now.getDay()>=2 && now.getMonth()==7)){
        age_=annee;
    }
    return age_;
}



document.getElementById("age").innerText=age();

function exp_pro(){



}

function parcours(){

}

function afficher_CV(){
    window.open('../vue/CV_Ingé_LACHHAB_Adrien.pdf','blank');
}

function affiche_presentation(){
    
    //document.querySelector("#apropos1").style.display="flow";
    //présentation
    document.querySelector("#apropos1").style.pointerEvents="visible";
    document.querySelector("#apropos1").style.filter="blur(0px)";

    //Parcours
    document.querySelector("#parcours").style.pointerEvents="none";
    document.querySelector("#parcours").style.filter="blur(10px)";

    //Compétences
    document.querySelector("#competences").style.pointerEvents="none";
    document.querySelector("#competences").style.filter="blur(10px)";

    //contact
    document.querySelector("#contact").style.pointerEvents="none";
    document.querySelector("#contact").style.filter="blur(10px)";

    //Il faut center et mettre au centre la partie présentation 
    /* haut | droit | bas | gauche */
    document.querySelector(".en_tete").style.margin="0 0 50px 0"; //Ce qui est en haut de la partie concernée
    document.querySelector("#parcours").style.margin="50px 0 0 25%"; //Ce qui est en bas de la partie concernée
    
    document.querySelector("#apropos1").style.margin="0 0 0 10%"; 
    document.querySelector("#competences").style.margin="0 0 0 25%";
    document.querySelector("#contact").style.margin="0 0 0 25%";
    document.querySelector("#footer").style.margin="0 0 0 0";


    //Changer la taille de notre fenêtre pour qu'elle couvre une bonne partie de l'application.
    document.querySelector("#apropos1").style.height="400px";
    document.querySelector("#apropos1").style.padding="0 0 0 0"; 
    document.querySelector("#apropos1").style.textAlign="center";
    document.querySelector("#apropos1").style.width="82%";
    document.querySelector("#apropos1 h2").style.padding="100px 0 0 0";

    //Position des autres parties

    document.querySelector("#parcours").style.height="auto";
    document.querySelector("#parcours").style.padding="0 0 1% 0"; 
    document.querySelector("#parcours").style.width="62%";
    document.querySelector("#parcours h2").style.padding="0 0 0 0";

    document.querySelector("#competences").style.height="auto";
    document.querySelector("#competences").style.padding="0 0 1% 0"; 
    document.querySelector("#competences").style.width="62%";
    document.querySelector("#competences h2").style.padding="0 0 0 0";

    //Ancienne résolution CSS

    document.querySelector("#contact").style.height="auto";
    document.querySelector("#contact").style.padding="0 0 1% 0"; 
    document.querySelector("#contact").style.width="62%";
    document.querySelector("#contact h2").style.padding="0 0 0 0";
    //document.querySelector("#contact_me").style.margin="0px 0px 0px 0px";  
    document.querySelector("#infos_complemetaires").style.margin="0 0 0 0";

    
}

function affiche_parcours(){
    //document.querySelector("#parcours").style.display="flow";
    //présentation
    document.querySelector("#apropos1").style.pointerEvents="none";
    document.querySelector("#apropos1").style.filter="blur(10px)";

    //Parcours
    document.querySelector("#parcours").style.pointerEvents="visible";
    document.querySelector("#parcours").style.filter="blur(0px)";

    //Compétences
    document.querySelector("#competences").style.pointerEvents="none";
    document.querySelector("#competences").style.filter="blur(10px)";

    //contact
    document.querySelector("#contact").style.pointerEvents="none";
    document.querySelector("#contact").style.filter="blur(10px)";

    //Il faut center et mettre au centre la partie parcours

    /* haut | droit | bas | gauche */
    document.querySelector("#apropos1").style.margin="0 0 50px 25%"; //Ce qui est en haut de la partie concernée
    document.querySelector("#competences").style.margin="50px 0 0 25%"; //Ce qui est en bas de la partie concernée

    document.querySelector("#parcours").style.margin="0 0 0 25%"; 
    document.querySelector("#contact").style.margin="0 0 0 25%";
    document.querySelector(".en_tete").style.margin="0 0 0 0"; 
    document.querySelector("#footer").style.margin="0 0 0 0";    


    document.querySelector("#parcours").style.height="400px";
    document.querySelector("#parcours").style.margin="-20px 0px 0px 10%"; 
    document.querySelector("#parcours").style.textAlign="center";
    document.querySelector("#parcours").style.width="82%";
    document.querySelector("#parcours h2").style.padding="100px 0 0 0";

    //Position des autres parties

    //Changer la taille de notre fenêtre pour qu'elle couvre une bonne partie de l'application.
    document.querySelector("#apropos1").style.height="auto";
    document.querySelector("#apropos1").style.padding="0 0 1% 0"; 
    document.querySelector("#apropos1").style.width="62%";
    document.querySelector("#apropos1 h2").style.padding="0 0 0 0";

    document.querySelector("#competences").style.height="auto";
    document.querySelector("#competences").style.padding="0 0 1% 0"; 
    document.querySelector("#competences").style.width="62%";
    document.querySelector("#competences h2").style.padding="0 0 0 0";
    //Ancienne résolution CSS
    document.querySelector("#contact").style.height="auto";
    document.querySelector("#contact").style.padding="0 0 1% 0"; 
    document.querySelector("#contact").style.width="62%";
    document.querySelector("#contact h2").style.padding="0 0 0 0";
    //document.querySelector("#contact_me").style.margin="0px 0px 0px 0px";  
    document.querySelector("#infos_complemetaires").style.margin="0 0 0 0";


}

function affiche_competences(){
    //document.querySelector("#competences").style.display="flow";
    //présentation
    document.querySelector("#apropos1").style.pointerEvents="none";
    document.querySelector("#apropos1").style.filter="blur(10px)";

    //Parcours
    document.querySelector("#parcours").style.pointerEvents="none";
    document.querySelector("#parcours").style.filter="blur(10px)";

    //Compétences
    document.querySelector("#competences").style.pointerEvents="visible";
    document.querySelector("#competences").style.filter="blur(0px)";

    //contact
    document.querySelector("#contact").style.pointerEvents="none";
    document.querySelector("#contact").style.filter="blur(10px)";

    //Il faut center et mettre au centre la partie compétences
     /* haut | droit | bas | gauche */
    document.querySelector("#parcours").style.margin="0 0 50px 25%"; //Ce qui est en haut de la partie concernée
    document.querySelector("#contact").style.margin="50px 0 0 25%"; //Ce qui est en bas de la partie concernée
    
    document.querySelector(".en_tete").style.margin="0 0 0 0"; 
    document.querySelector("#apropos1").style.margin="0 0 0 25%";
    document.querySelector("#competences").style.margin="0 0 0 25%"; 
    document.querySelector("#footer").style.margin="0 0 0 0"; 

    //Position des autres parties

    //Changer la taille de notre fenêtre pour qu'elle couvre une bonne partie de l'application.
    document.querySelector("#apropos1").style.height="auto";
    document.querySelector("#apropos1").style.padding="0 0 1% 0"; 
    document.querySelector("#apropos1").style.width="62%";
    document.querySelector("#apropos1 h2").style.padding="0 0 0 0";

    document.querySelector("#parcours").style.height="auto";
    document.querySelector("#parcours").style.padding="0 0 1% 0"; 
    document.querySelector("#parcours").style.width="62%";
    document.querySelector("#parcours h2").style.padding="0 0 0 0";

    //Ancienne résolution CSS
    document.querySelector("#contact").style.height="auto";
    document.querySelector("#contact").style.padding="0 0 1% 0"; 
    document.querySelector("#contact").style.width="62%";
    document.querySelector("#contact h2").style.padding="0 0 0 0";
    //document.querySelector("#contact_me").style.margin="0px 0px 0px 0px";  
    document.querySelector("#infos_complemetaires").style.margin="0 0 0 0";

   
}

function affiche_contact(){
    //document.querySelector("#contact").style.display="flow";
    //présentation
    document.querySelector("#apropos1").style.pointerEvents="none";
    document.querySelector("#apropos1").style.filter="blur(10px)";

    //Parcours
    document.querySelector("#parcours").style.pointerEvents="none";
    document.querySelector("#parcours").style.filter="blur(10px)";

    //Compétences
    document.querySelector("#competences").style.pointerEvents="none";
    document.querySelector("#competences").style.filter="blur(10px)";

    //contact
    document.querySelector("#contact").style.pointerEvents="visible";
    document.querySelector("#contact").style.filter="blur(0px)";
    //Il faut center et mettre au centre la partie contact
     /* haut | droit | bas | gauche */
    document.querySelector("#competences").style.margin="0 0 50px 25%"; //Ce qui est en haut de la partie concernée
    document.querySelector("#footer").style.margin="50px 0 0 0"; //Ce qui est en bas de la partie concernée

    document.querySelector("#parcours").style.margin="0 0 0 25%"; 
    document.querySelector("#contact").style.margin="0 0 0 25%"; 
    document.querySelector(".en_tete").style.margin="0 0 0 0"; 
    document.querySelector("#apropos1").style.margin="0 0 0 25%";

    //Changer la taille de notre fenêtre pour qu'elle couvre une bonne partie de l'application.
    document.querySelector("#apropos1").style.height="auto";
    document.querySelector("#apropos1").style.padding="0 0 1% 0"; 
    document.querySelector("#apropos1").style.width="62%";
    document.querySelector("#apropos1 h2").style.padding="0 0 0 0";

    document.querySelector("#parcours").style.height="auto";
    document.querySelector("#parcours").style.padding="0 0 1% 0"; 
    document.querySelector("#parcours").style.width="62%";
    document.querySelector("#parcours h2").style.padding="0 0 0 0";

    document.querySelector("#competences").style.height="auto";
    document.querySelector("#competences").style.padding="0 0 1% 0"; 
    document.querySelector("#competences").style.width="62%";
    document.querySelector("#competences h2").style.padding="0 0 0 0";   

    document.querySelector("#contact").style.height="100%";
    document.querySelector("#contact h2").style.textAlign="center";
    document.querySelector("#contact").style.margin="-20px 0px 0px 10%"; 
    // document.querySelector("#contact_me").style.margin="-147px 0 0 549px";
    document.querySelector("#contact").style.width="82%";
    //document.querySelector("#infos_complemetaires").style.margin="0 0 0 80px";
}

function back_accueil(){
    document.querySelector("#competences").style.margin="0 0 0 25%"; 
    document.querySelector("#footer").style.margin="0 0 0 0";
    document.querySelector("#parcours").style.margin="0 0 0 25%"; 
    document.querySelector("#contact").style.margin="0 0 0 25%"; 
    document.querySelector(".en_tete").style.margin="0 0 0 0"; 
    document.querySelector("#apropos1").style.margin="0 0 0 25%";
}

// function recup_champ_form(){
//     // document.forms['dialogbox'].elements['nom'].value="";   
//     // document.forms['dialogbox'].elements['mail'].value="";   
//     // document.forms['dialogbox'].elements['message'].value="";
// }