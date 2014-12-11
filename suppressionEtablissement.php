<?php

include("_debut.inc.php");
include("_gestionBase.inc.php"); 
include("_controlesEtGestionErreurs.inc.php");

// CONNEXION AU SERVEUR MYSQL PUIS SÉLECTION DE LA BASE DE DONNÉES festival

$connexion=connect();
if (!$connexion)
{
   ajouterErreur("Echec de la connexion au serveur MySql");
   afficherErreurs();
   exit();
}
if (!selectBase($connexion))
{
   ajouterErreur("La base de données festival est inexistante ou non accessible");
   afficherErreurs();
   exit();
}

// SUPPRIMER UN ÉTABLISSEMENT 

$id=$_GET['id'];

$rsEtab=obtenirDetailEtablissement($connexion, $id);
$nom=$rsEtab['nom'];

// Cas 1ère étape (on vient de listeEtablissements.php)

if ($_REQUEST['action']=='demanderSupprEtab')    
{
   echo "
   <br><center><h5>Souhaitez-vous vraiment supprimer l'établissement $nom ? 
   <br><br>
   
       <tr>
         <td align='center'><a href='suppressionEtablissement.php?action=validerSupprEtab&amp;id=$id'>

         <input type='submit' class='btn btn-inverse' value='Valider' name='valider' action='validerSupprEtab&amp';id=$id>

         <a href='suppressionEtablissement.php?action=validerSupprEtab&amp;id=$id'>
         
      </tr>


      <tr>
         <a class='btn btn-inverse' href='listeEtablissements.php'>Retour</a>
         </td>
      </tr>
   </table>
</form>";
   
}

// Cas 2ème étape (on vient de suppressionEtablissement.php)

else
{
   supprimerEtablissement($connexion, $id);
   echo "
   <br><br><center><h5>L'établissement a été supprimé</h5>
   <a href='listeEtablissements.php?'>Retour</a></center>";
}

?>
