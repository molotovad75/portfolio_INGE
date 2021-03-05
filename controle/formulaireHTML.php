<?php
    
    // Variables de mon formulaire
    $nom=$_POST['nom'];
    $mail=$_POST['mail'];
    $message=$_POST['_message'];

    
    $user="root";
    $password="";
    $reqSQL_insertion="INSERT INTO visiteur VALUES(:id_visiteur,:nom,:mail,:_message)";//Requête SQL permettant de stocker en BDD 
    try{
        $BDD=new PDO('mysql:host=localhost;dbname=e-portfoliobdd;',$user,$password);//Mise en place de ma BDD
        $req=$BDD->prepare($reqSQL_insertion);
        $req->execute(array('id_visiteur'=>null,'nom'=>$nom,'mail'=>$mail,'_message'=>$message));//On insère en BDD les données du visiteur
        // header("location:".  $_SERVER['HTTP_REFERER']); 
       header('location: ../modele/');//On revient à la page d'accueil.
        // echo '<script>afficher_message("Une réponse à votre message vous sera envoyé le plus vite possible !")</script>';
    }
    catch (Exception $e){
        die('Erreur : ' . $e->getMessage());
    }

    // if(isset($_POST['btn_envoyer'])==true)
    // {
        
    // }
?>