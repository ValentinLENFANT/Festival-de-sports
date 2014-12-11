function color(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#FF6A6A";
   else
      champ.style.backgroundColor = "#5EFF50";
}

function vnom(champ)
{
   if(champ.value.length < 2 || champ.value.length > 50)
   {
      color(champ, true);
      return false;
   }
   else
   {
      color(champ, false);
      return true;
   }
}


function vadresseRue(champ)
{
   if(champ.value.length < 5 || champ.value.length > 50)
   {
      color(champ, true);
      return false;
   }
   else
   {
      color(champ, false);
      return true;
   }
}

function vcodePostal(champ)
{
   if(champ.value.length < 5 || champ.value.length > 5)
   {
      color(champ, true);
      return false;
   }
   else
   {
      color(champ, false);
      return true;
   }
}

function vville(champ)
{
   if(champ.value.length < 2 || champ.value.length > 40)
   {
      color(champ, true);
      return false;
   }
   else
   {
      color(champ, false);
      return true;
   }
}

function vtel(champ)
{
   if(champ.value.length < 10 || champ.value.length > 20)
   {
      color(champ, true);
      return false;
   }
   else
   {
      color(champ, false);
      return true;
   }
}

function vnomResponsable(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      color(champ, true);
      return false;
   }
   else
   {
      color(champ, false);
      return true;
   }
}

function vnombreChambresOffertes(champ)
{
   if(champ.value.length < 2 || champ.value.length > 3)
   {
      color(champ, true);
      return false;
   }
   else
   {
      color(champ, false);
      return true;
   }
}

function vFormulaire(f)
{
   var nomOk = vnom(f.nom);
   var adresseRueOk = vadresseRue(f.adresseRue);
   var codePostalOk = vcodePostal(f.codePostal);
   var villeOk = vville(f.ville);
   var telOk = vtel(f.tel);
   var nomResponsableOk = vnomResponsable(f.nomResponsable);
   var nombreChambresOffertesOk = vnombreChambresOffertes(f.nombreChambresOffertes); 

   if(nomOk && adresseRueOk && codePostalOk && villeOk && telOk && nomResponsableOk && nombreChambresOffertesOk)
      return true;
   else
   {
      alert("Veuillez remplir correctement le formulaire (les champs en rouge)");
      return false;
   }
}

$(document).ready(function() {
    
});
//Fonction quand on appuie sur le boutton envoyer
function ValidateForm(){    
        //Si la checkbox est checked :
        if($('#checkbox_type_value').is(':checked')==true){
            //On envoie une requête submit :
            $('#creationEtablissement.php').submit();
            return true;
        }else{
            //Sinon on affiche une alerte :
            alert("Veuillez respecter les conditions de validation du formulaire.");

            return false;
        }
        return false;
    };
