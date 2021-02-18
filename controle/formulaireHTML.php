<?php

    // Variables de mon formulaire
    $nom=$_POST['nom'];
    $mail=$_POST['mail'];
    $message=$_POST['message'];

    // Paramètres de ma BDD
    $user='root';
    $password='';
    $reqSQL_insertion="INSERT INTO visiteur VALUES(:id_visiteur,:nom,:mail,:message)";
    try{
        $BDD=new PDO('mysql:host=localhost;dbname=e-portfoliobdd;',$user,$password);
        $req=$BDD->prepare($reqSQL_insertion);
        $req->execute(array('id_visiteur'=>null,'nom'=>$nom,'mail'=>$mail,'message'=>$message));
    }
    catch (Exception $e){
        die('Erreur : ' . $e->getMessage());
    }

    
    // function verif_mail($mail){
    //     if(strstr($mail,'@') && ){

    //     }elseif(){

    //     }
    // }


?>