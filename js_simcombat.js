//***********************declaration VAR **********************************/
var mob1= document.getElementById('mob1');
var info1=document.getElementById('RadishInfo');
var mob2= document.getElementById('mob2');
var info2=document.getElementById('SlobmarléInfo');
var mob3= document.getElementById('mob3');
var info3=document.getElementById('HatharedéInfo');
var nomGrodo=document.getElementById('Grodo');
var lockGrodo=document.getElementById('entourgrand1');
var nomMamoxo=document.getElementById('Mamoxo');
var lockMamoxo=document.getElementById('entourgrand2');
var nomBony=document.getElementById('Bony');
var lockBony=document.getElementById('entourpetit2');
var nomKrakos=document.getElementById('Krakos');
var lockKrakos=document.getElementById('entourpetit1');
var buttonStart=document.getElementById('bouto')
var RdmAttackHero = Math.floor(Math.random()*20);
var RdmAttackMonster = Math.floor(Math.random()*15);
var PVRadish=document.getElementById('pvgRadish');
var PVSlobmarlé=document.getElementById('pvgSlobmarlé');
var PVHatharedé=document.getElementById('pvgHatharedé');
var PVmamaxo=document.getElementById('hpMamoxo');
var PVGrodo=document.getElementById('hpGrodo');
var PVBone=document.getElementById('hpBony');
var PVKrakos=document.getElementById('hpKrakos');
var ManaMamoxo=document.getElementById('manaMamoxo');
var ManaGrodo=document.getElementById('manaGrodo');
var ManaBony=document.getElementById('manaBony');
var ManaKrakos=document.getElementById('manaKrakos');
var ButtonAttaque=document.getElementById('attaqueB');
var RadishImage=document.getElementById('Radish');
var SlobmarléImage=document.getElementById('Slobmarlé');
var HatharedéImage=document.getElementById('Hatharedé');
var ButtonMagic=document.getElementById('MagieB');
var PVRadishval='120';
var PVSlobmarléval='120';
var PVHatharedéval='120';
var PVmamoxoval= '100';
var PVGrodoval='100';
var PVBony='100';
var PVKrak ='100';
var Manamamoxoval='100';
var ManaGrodoval='100';
var ManaBonyval='100';
var ManaKrakosval='100';
var Indication = document.getElementById('scenario');
var ripposte = 0 ;
var RipposteRequit = 4;
var RdmDegaMonstre= Math.floor(Math.random()*3);
var DefaiteTxt =document.getElementById('EcritureDef');
var VictoireTxt = document.getElementById('EcritureVic');
var PlayTxt = document.getElementById('EcriturePlay');
var EgalitéTxt = document.getElementById('EcritureEgalité');
var FondDefVic=document.getElementById('fondDefVi');
var BlocageMamoxo=document.getElementById('BlockMamoxo');
var BlocageGrodo=document.getElementById('BlockGrodo');
var BlocageBony=document.getElementById('BlockBony');
var BlocageKrakos=document.getElementById('BlockKrakos');
var MamoxoImage=document.getElementById('MamoxoP');
var GrodoImage=document.getElementById('GrodoP');
var BonyImage=document.getElementById('BonyP');
var KrakosImage=document.getElementById('KrakosP');
var MortMamoxo=document.getElementById('DeathMamoxo');
var MortGrodo=document.getElementById('DeathGrodo');
var MortBony=document.getElementById('DeathBony');
var MortKrakos=document.getElementById('DeathKrakos');
var MortRadish=document.getElementById('DeathRadish');
var MortSlobmarlé=document.getElementById('DeathSlobmarlé');
var MortHatharedé=document.getElementById('DeathHatharedé');
var TextInfoDDV=document.getElementById('InstructionDV');
var ButtonDef=document.getElementById('DefenseB');
var ButtonMenuOn=document.getElementById('ButtonSoundOn');
var ButtonMenuOff=document.getElementById('ButtonSoundOff');
var MonstrEnVie=3;
var DefenseMamaxo=0;
var DefenseGrodo=0;
var DefenseBony=0;
var DefenseKrakos=0;
var AudioMenu=new Audio ('Audio/MenuSound.mp3');
var AudioBattle=new Audio ('Audio/BattleSound.mp3');
var AudioButtonClick=new Audio ('Audio/ButtonClickSoundTrue.mp3');
var AudioAttaque01= new Audio ('Audio/AttaqueSound01.mp3');
var AudioAttaque02= new Audio ('Audio/AttaqueSound02.mp3');
var AudioAttaque03= new Audio ('Audio/AttaqueSound03.mp3');
var AudioAttaqueSelect=new Audio('Audio/AttaqueOnClickSound.mp3');
var AudioMagicSelect=new Audio('Audio/MagicOnClickSoundTrue.mp3');
var AudioPoison=new Audio('Audio/PoisonSound.mp3');
var AudioFlame=new Audio('Audio/FlameSound.mp3');
var AudioArrow=new Audio('Audio/ArrowSound.mp3');
var AudioShield=new Audio('Audio/ShieldSound.mp3');
var AudioReplique=new Audio('Audio/RepliqueSound.mp3');
var AudioVic=new Audio('Audio/WinSound.mp3');
var AudioDef=new Audio('Audio/LooseSound.mp3');
var AudioSelect=new Audio('Audio/SelectionSound.mp3');
var minAttaque=5;
var maxAttaque=25;
var minAttaqueSpéMamoxo=30;
var maxAttaqueSpéMamoxo=45;
var minAttaqueSpé=20;
var maxAttaqueSpé=35;
var UsedAttaqueMamoxo=0;
var UsedAttaqueGrodo=0;
var UsedAttaqueBony=0;
var UsedAttaqueKrakos=0;
var UsedAttaqueSpéMamoxo=0;
var UsedAttaqueSpéGrodo=0;
var UsedAttaqueSpéBony=0;
var UsedAttaqueSpéKrakos=0;
var UsedDefMamoxo=0;
var UsedDefGrodo=0;
var UsedDefBony=0;
var UsedDefKrakos=0;
//************************************************************************ */
//**************************affichage quand souris sur Div******************* */
mob1.addEventListener("mouseenter", function(event){
    info1.style.visibility="visible";
});

mob1.addEventListener("mouseleave", function(event){
    info1.style.visibility="hidden";
});

mob2.addEventListener("mouseenter", function(event){        
    info2.style.visibility="visible";
});

mob2.addEventListener("mouseleave", function(event){
    info2.style.visibility="hidden";
});

mob3.addEventListener("mouseenter", function(event){
    info3.style.visibility="visible";
});

mob3.addEventListener("mouseleave", function(event){
    info3.style.visibility="hidden";
});

ButtonAttaque.addEventListener("mouseenter", function(event){
   ButtonAttaque.style.color="grey";
});

ButtonAttaque.addEventListener("mouseleave", function(event){
    ButtonAttaque.style.color="White";
});
 
ButtonDef.addEventListener("mouseenter", function(event){
    ButtonDef.style.color="grey";
});
 
ButtonDef.addEventListener("mouseleave", function(event){
    ButtonDef.style.color="White";
});

ButtonMagic.addEventListener("mouseenter", function(event){
    ButtonMagic.style.color="grey";
});
 
ButtonMagic.addEventListener("mouseleave", function(event){
    ButtonMagic.style.color="White";
});
//************************************************************************ */
//*********************Action Hero**************************************** */
function ActionMamaxo(){
    AudioSelect.play();               //lancement son atttaque
    AudioSelect.volume=0.1;         
    nomKrakos.style.color= "white";                   //affichage de selection  
    lockKrakos.style.visibility= "hidden";
    nomGrodo.style.color= "white";                      // Selection afficher/retirer      
    lockGrodo.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    nomMamoxo.style.color= "green";
    lockMamoxo.style.visibility= "visible";
    ButtonAttaque.onclick=AttaqueMama               //changement des fonctions selon perso
    Indication.innerHTML="Choisissez une action"
    ButtonMagic.innerHTML="Flamme Benit 50mp"                   //application direction pour joueur
    if (UsedAttaqueMamoxo==0){
        ButtonAttaque.onclick=AttaqueMama;
        ButtonAttaque.style.visibility="visible";
    }else{
        ButtonAttaque.onclick=Nul
        ButtonAttaque.style.visibility="hidden";
    }
    if (UsedAttaqueSpéMamoxo==0){
        ButtonMagic.onclick=AttaqueSpéAskMamoxo             //verif si action n'a pas deja etait faite pour magie defense et attaque
        ButtonMagic.style.visibility="visible";
    }else{
        ButtonMagic.onclick=Nul
        ButtonMagic.style.visibility="hidden";
    }
    if (UsedDefMamoxo==0){
        ButtonDef.onclick=DefenseAddMamoxo              
        ButtonDef.style.visibility="visible";
    }else{
        ButtonDef.onclick=Nul
        ButtonDef.style.visibility="hidden";
    }    
}

function ActionGrodo(){
    AudioSelect.play();                        //lancement son atttaque
    AudioSelect.volume=0.1;        
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";              //affichage de selection  
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";   // Selection perso Grodo    
    nomGrodo.style.color= "green";
    lockGrodo.style.visibility= "visible";
    ButtonAttaque.onclick=AttaqueGrodo;     
    Indication.innerHTML="Choisissez une action"
    ButtonMagic.innerHTML="Illusion 25mp"         //application direction pour joueur
    if (UsedAttaqueGrodo==0){
        ButtonAttaque.onclick=AttaqueGrodo;
        ButtonAttaque.style.visibility="visible";
    }else{
        ButtonAttaque.onclick=Nul
        ButtonAttaque.style.visibility="hidden";
    }
    if (UsedAttaqueSpéGrodo==0){
        ButtonMagic.onclick=AttaqueSpéAskGrodo
        ButtonMagic.style.visibility="visible";
    }else{
        ButtonMagic.onclick=Nul
        ButtonMagic.style.visibility="hidden";
    }
    if (UsedDefGrodo==0){
        ButtonDef.onclick=DefenseAddGrodo
        ButtonDef.style.visibility="visible";
    }else{
        ButtonDef.onclick=Nul
        ButtonDef.style.visibility="hidden";
    }
}

function ActionBony(){
    AudioSelect.play();                //lancement son atttaque
    AudioSelect.volume=0.1;
    nomMamoxo.style.color= "white";                        //affichage de selection  
    lockMamoxo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";  // Selection perso Bony    
    nomBony.style.color= "green";
    lockBony.style.visibility= "visible";
    ButtonAttaque.onclick=AttaqueBony;                       //application direction pour joueur
    Indication.innerHTML="Choisissez une action"
    ButtonMagic.innerHTML="flèche perdue 25mp"
    if (UsedAttaqueBony==0){
        ButtonAttaque.onclick=AttaqueBony;
        ButtonAttaque.style.visibility="visible";
    }else{
        ButtonAttaque.onclick=Nul
        ButtonAttaque.style.visibility="hidden";
    }
    if (UsedAttaqueSpéBony==0){
        ButtonMagic.onclick=AttaqueSpéAskBony
        ButtonMagic.style.visibility="visible";
    }else{
        ButtonMagic.onclick=Nul
        ButtonMagic.style.visibility="hidden";
    }
    if (UsedDefBony==0){
        ButtonDef.onclick=DefenseAddBony
        ButtonDef.style.visibility="visible";
    }else{
        ButtonDef.onclick=Nul
        ButtonDef.style.visibility="hidden";
    }
}

function ActionKrakos(){
    AudioSelect.play();
    AudioSelect.volume=0.1;                             //lancement son atttaque
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    nomMamoxo.style.color= "white";                        //affichage de selection 
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";   // Selection perso Krakos  
    nomKrakos.style.color= "green"; 
    lockKrakos.style.visibility= "visible";
    Indication.innerHTML="Choisissez une action"         
    ButtonMagic.innerHTML="couteau vif 25mp"                        //application direction pour joueur
    if (UsedAttaqueKrakos==0){
        ButtonAttaque.onclick=AttaqueKrakos;
        ButtonAttaque.style.visibility="visible";
    }else{
        ButtonAttaque.onclick=Nul
        ButtonAttaque.style.visibility="hidden";
    }
    if (UsedAttaqueSpéKrakos==0){
        ButtonMagic.onclick=AttaqueSpéAskKrakos
        ButtonMagic.style.visibility="visible";
    }else{
        ButtonMagic.onclick=Nul
        ButtonMagic.style.visibility="hidden";
    }          
    if (UsedDefKrakos==0){
        ButtonDef.onclick=DefenseAddKrakos 
        ButtonDef.style.visibility="visible";
    }else{
        ButtonDef.onclick=Nul
        ButtonDef.style.visibility="hidden";
    }
}

//************************************************************************ */
//***************************Bouton attaque modif***************************/
function AttaqueMama(){
    AttaqueAsk()
    ButtonAttaque.onclick=AttaqueAsk;         // Bouton attaque Mamoxo    
    BlocageMamoxo.style.visibility="visible" 
    UsedDefMamoxo=0;
    UsedAttaqueSpéMamoxo=0;
    UsedAttaqueMamoxo=1;          
}

function AttaqueGrodo(){
    AttaqueAsk()
    ButtonAttaque.onclick=AttaqueAsk;                  
    BlocageGrodo.style.visibility="visible"   // Bouton attaque Grodo
    UsedDefGrodo=0;
    UsedAttaqueSpéGrodo=0;
    UsedAttaqueGrodo=1;
}

function AttaqueBony(){
    AttaqueAsk()
    ButtonAttaque.onclick=AttaqueAsk;
    BlocageBony.style.visibility="visible"     // Bouton attaque Bony
    UsedDefBony=0;
    UsedAttaqueSpéBony=0;
    UsedAttaqueBony=1;
}

function AttaqueKrakos(){
    AttaqueAsk()                         
    ButtonAttaque.onclick=AttaqueAsk;             // Bouton attaque Krakos
    BlocageKrakos.style.visibility="visible"
    UsedDefKrakos=0;
    UsedAttaqueSpéKrakos=0;
    UsedAttaqueKrakos=1;
}

//************************************************************************ */
//*******************************Attaque basique sur Mob********************/

function AttaqueDamagesurMonstreRadish(){
    AudioAttaque01.play()
    AudioAttaque01.currentTime=0.2;
    AudioAttaque01.volume=0.05;             //Son lancement
    animateDamage('mob1')             //animation
    RdmAttackHero = Math.floor(Math.random()*(maxAttaque-minAttaque+1))+minAttaque;         //attaque min max rdm
    PVRadish.innerHTML= PVRadishval -= RdmAttackHero;                                   //application des degats 
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";                //affichage de la suite de l'attaque
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";                        //Attaque basique sur Radish
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    ripposte+=1                                                                     //ajout de la riposte
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    Indication.innerHTML="Vous avez fait " + RdmAttackHero + " de dégat sur Radish";    //affichage indic apres 
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie"           //reset affichage attaque
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()                                    //verif des fonctions majeur
    SlobmarléMort()
    HatharedéMort()
    setTimeout(DebutIndic,2000);
}

function AttaqueDamagesurMonstreSlobmarlé(){
    AudioAttaque02.play()
    AudioAttaque02.currentTime=0.3;
    AudioAttaque02.volume=0.05;
    animateDamage('mob2')
    RdmAttackHero = Math.floor(Math.random()*(maxAttaque-minAttaque+1))+minAttaque;
    PVSlobmarlé.innerHTML= PVSlobmarléval -= RdmAttackHero;
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";                    //Attaque basique sur Slobmarlé
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    ripposte+=1
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    Indication.innerHTML="Vous avez fait " + RdmAttackHero + " de dégat sur Slobmarlé";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie"
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    setTimeout(DebutIndic,2000);
}

function AttaqueDamagesurMonstreHatharedé(){
    AudioAttaque01.play()
    AudioAttaque01.currentTime=0.2;
    AudioAttaque01.volume=0.05;
    animateDamage('mob3')
    RdmAttackHero = Math.floor(Math.random()*(maxAttaque-minAttaque+1))+minAttaque;
    PVHatharedé.innerHTML= PVHatharedéval -= RdmAttackHero;
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";                            //Attaque basique sur Hatharedé
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    ripposte+=1
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    Indication.innerHTML="Vous avez fait " + RdmAttackHero + " de dégat sur Hatharedé";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    setTimeout(DebutIndic,2000);
}

function AttaqueAsk(){
    AudioAttaqueSelect.play()                         //Attaque function quand bouton appuyer
    AudioAttaqueSelect.volume=0.05;
    Indication.innerHTML="Choisissez un ennemies";
    RadishImage.onclick=AttaqueDamagesurMonstreRadish;
    SlobmarléImage.onclick=AttaqueDamagesurMonstreSlobmarlé;
    HatharedéImage.onclick=AttaqueDamagesurMonstreHatharedé;
}
//************************************************************************ */
//***************************Attaque Spé ***********************************/
//**Mamoxo Spé****/
function AttaqueDamageSpésurMonstreRadishparMamoxo(){
    AudioFlame.play()
    AudioFlame.volume=0.4;                              //lancement son
    animateDamage('mob1')
    animateHeroAttack('MamoxoP')                //animation 
    RdmAttackHero = Math.floor(Math.random()*(maxAttaqueSpéMamoxo-minAttaqueSpéMamoxo+1))+minAttaqueSpéMamoxo;      //attaque Spé aléa 
    PVRadish.innerHTML= PVRadishval -= RdmAttackHero;                       //applique degat sur hp
    MagicMamoxo()                                       //baisse mana hero
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";                               //affichage suite attaque
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";        
    ripposte+=1                         //riposte ajoute
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;         //reset affichage
    HatharedéImage.onclick=Nul;
    Indication.innerHTML="Vous avez fait " + RdmAttackHero + " de dégat sur Radish";    //affichage indic degat
    verifRipposte()
    verifDefaite()          //function verif principale
    verifVictoire()
    ButtonMagic.innerHTML="magie"
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";    //reset affichage action
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()                //verif function principale
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    setTimeout(DebutIndic,2000);
}

function AttaqueDamageSpésurMonstreSlobmarléparMamoxo(){
    AudioFlame.play()
    AudioFlame.volume=0.4;
    animateDamage('mob2')
    animateHeroAttack('MamoxoP')
    RdmAttackHero = Math.floor(Math.random()*(maxAttaqueSpéMamoxo-minAttaqueSpéMamoxo+1))+minAttaqueSpéMamoxo;
    PVSlobmarlé.innerHTML= PVSlobmarléval -= RdmAttackHero;
    MagicMamoxo()
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    ripposte+=1
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    Indication.innerHTML="Vous avez fait " + RdmAttackHero + " de dégat sur Slobmarlé";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie"
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    setTimeout(DebutIndic,2000);
}

function AttaqueDamageSpésurMonstreHatharedéparMamoxo(){
    AudioFlame.play()
    AudioFlame.volume=0.4;
    animateDamage('mob3')
    animateHeroAttack('MamoxoP')
    RdmAttackHero = Math.floor(Math.random()*(maxAttaqueSpéMamoxo-minAttaqueSpéMamoxo+1))+minAttaqueSpéMamoxo;
    PVHatharedé.innerHTML= PVHatharedéval -= RdmAttackHero;
    MagicMamoxo()
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    ripposte+=1
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    Indication.innerHTML="Vous avez fait " + RdmAttackHero + " de dégat sur Hatharedé";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie";
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    setTimeout(DebutIndic,2000);
}

function AttaqueSpéAskMamoxo(){
    AudioMagicSelect.play();
    AudioMagicSelect.volume=0.2;
    Indication.innerHTML="Choisissez un ennemies";
    if (Manamamoxoval>=50){
        RadishImage.onclick=AttaqueDamageSpésurMonstreRadishparMamoxo;
        SlobmarléImage.onclick=AttaqueDamageSpésurMonstreSlobmarléparMamoxo;
        HatharedéImage.onclick=AttaqueDamageSpésurMonstreHatharedéparMamoxo;        //Attaque Spé bouton Mamoxo
        ButtonMagic.onclick=AttaqueSpéAskMamoxo;
        BlocageMamoxo.style.visibility="visible";
        UsedAttaqueSpéMamoxo=1;
        UsedDefMamoxo=0;
        UsedAttaqueMamoxo=0;
    }else{
        Indication.innerHTML="Mamoxo n'a pas assez de mana";
        setTimeout(Action,1000)
    }
}

//****************** */
//********Grodo Spé*/
function AttaqueDamageSpésurMonstreRadishparGrodo(){
    AudioPoison.play()
    AudioPoison.volume=0.4;
    animateDamage('mob1')
    animateHeroAttack('GrodoP')
    RdmAttackHero = Math.floor(Math.random()*(maxAttaqueSpé-minAttaqueSpé+1))+minAttaqueSpé;
    PVRadish.innerHTML= PVRadishval -= RdmAttackHero;
    MagicGrodo()
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    ripposte+=1
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    Indication.innerHTML="Vous avez fait " + RdmAttackHero + " de dégat sur Radish";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie"
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    setTimeout(DebutIndic,2000);
}

function AttaqueDamageSpésurMonstreSlobmarléparGrodo(){
    AudioPoison.play()
    AudioPoison.volume=0.4;
    animateDamage('mob2')
    animateHeroAttack('GrodoP')
    RdmAttackHero = Math.floor(Math.random()*(maxAttaqueSpé-minAttaqueSpé+1))+minAttaqueSpé;
    PVSlobmarlé.innerHTML= PVSlobmarléval -= RdmAttackHero;
    MagicGrodo()
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    ripposte+=1
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    Indication.innerHTML="Vous avez fait " + RdmAttackHero + " de dégat sur Slobmarlé";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie"
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    setTimeout(DebutIndic,2000);
}

function AttaqueDamageSpésurMonstreHatharedéparGrodo(){
    AudioPoison.play()
    AudioPoison.volume=0.4;
    animateDamage('mob3')
    animateHeroAttack('GrodoP')
    RdmAttackHero = Math.floor(Math.random()*(maxAttaqueSpé-minAttaqueSpé+1))+minAttaqueSpé;
    PVHatharedé.innerHTML= PVHatharedéval -= RdmAttackHero;
    MagicGrodo()
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    ripposte+=1
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    Indication.innerHTML="Vous avez fait " + RdmAttackHero + " de dégat sur Hatharedé";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie";
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    setTimeout(DebutIndic,2000);
}

function AttaqueSpéAskGrodo(){
    AudioMagicSelect.play();
    AudioMagicSelect.volume=0.2;
    Indication.innerHTML="Choisissez un ennemies";
    if (ManaGrodoval>=25){
        RadishImage.onclick=AttaqueDamageSpésurMonstreRadishparGrodo;
        SlobmarléImage.onclick=AttaqueDamageSpésurMonstreSlobmarléparGrodo;
        HatharedéImage.onclick=AttaqueDamageSpésurMonstreHatharedéparGrodo;
        ButtonMagic.onclick=AttaqueSpéAskGrodo;                                     //Attaque Spé bouton Grodo
        BlocageGrodo.style.visibility="visible";
        UsedAttaqueSpéGrodo=1;
        UsedDefGrodo=0;
        UsedAttaqueGrodo=0;
    }else{
        Indication.innerHTML="Grodo n'a pas assez de mana";
        setTimeout(Action,1000)
    }
}
//****************** */
//****Bony Spé*****/
function AttaqueDamageSpésurMonstreRadishparBony(){
    AudioArrow.play()
    AudioArrow.volume=0.1;
    animateDamage('mob1')
    animateHeroAttack('BonyP')
    RdmAttackHero = Math.floor(Math.random()*(maxAttaqueSpé-minAttaqueSpé+1))+minAttaqueSpé;
    PVRadish.innerHTML= PVRadishval -= RdmAttackHero;
    MagicBony()
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    ripposte+=1
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    Indication.innerHTML="Vous avez fait " + RdmAttackHero + " de dégat sur Radish";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie"
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    setTimeout(DebutIndic,2000);
}

function AttaqueDamageSpésurMonstreSlobmarléparBony(){
    AudioArrow.play()
    AudioArrow.volume=0.1;
    animateDamage('mob2')
    animateHeroAttack('BonyP')
    RdmAttackHero = Math.floor(Math.random()*(maxAttaqueSpé-minAttaqueSpé+1))+minAttaqueSpé;
    PVSlobmarlé.innerHTML= PVSlobmarléval -= RdmAttackHero;
    MagicBony()
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    ripposte+=1
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    Indication.innerHTML="Vous avez fait " + RdmAttackHero + " de dégat sur Slobmarlé";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie"
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    setTimeout(DebutIndic,2000);
}

function AttaqueDamageSpésurMonstreHatharedéparBony(){
    AudioArrow.play()
    AudioArrow.volume=0.1;
    animateDamage('mob3')
    animateHeroAttack('BonyP')
    RdmAttackHero = Math.floor(Math.random()*(maxAttaqueSpé-minAttaqueSpé+1))+minAttaqueSpé;
    PVHatharedé.innerHTML= PVHatharedéval -= RdmAttackHero;
    MagicBony()
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    ripposte+=1
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    Indication.innerHTML="Vous avez fait " + RdmAttackHero + " de dégat sur Hatharedé";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie";
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    setTimeout(DebutIndic,2000);
}

function AttaqueSpéAskBony(){
    AudioMagicSelect.play();
    AudioMagicSelect.volume=0.2;
    Indication.innerHTML="Choisissez un ennemies";
    if (ManaBonyval>=25){
        RadishImage.onclick=AttaqueDamageSpésurMonstreRadishparBony;
        SlobmarléImage.onclick=AttaqueDamageSpésurMonstreSlobmarléparBony;
        HatharedéImage.onclick=AttaqueDamageSpésurMonstreHatharedéparBony;           //Attaque Spé bouton Bony
        ButtonMagic.onclick=AttaqueSpéAskBony;
        BlocageBony.style.visibility="visible";
        UsedAttaqueSpéBony=1;
        UsedDefBony=0;
        UsedAttaqueBony=0;
    }else{
        Indication.innerHTML="Bony n'a pas assez de mana";
        setTimeout(Action,1000)
    }
}
//****************** */
//****Krakos Spé**** */
function AttaqueDamageSpésurMonstreRadishparKrakos(){
    AudioAttaque03.play()
    AudioAttaque03.currentTime=0.2;
    AudioAttaque03.volume=0.2;
    animateDamage('mob1')
    animateHeroAttack('KrakosP')
    RdmAttackHero = Math.floor(Math.random()*(maxAttaqueSpé-minAttaqueSpé+1))+minAttaqueSpé;
    PVRadish.innerHTML= PVRadishval -= RdmAttackHero;
    MagicKrakos()
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    ripposte+=1
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    Indication.innerHTML="Vous avez fait " + RdmAttackHero + " de dégat sur Radish";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie";
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    setTimeout(DebutIndic,2000);
}

function AttaqueDamageSpésurMonstreSlobmarléparKrakos(){
    AudioAttaque03.play()
    AudioAttaque03.currentTime=0.3;
    AudioAttaque03.volume=0.2;
    animateDamage('mob2')
    animateHeroAttack('KrakosP')
    RdmAttackHero = Math.floor(Math.random()*(maxAttaqueSpé-minAttaqueSpé+1))+minAttaqueSpé;
    PVSlobmarlé.innerHTML= PVSlobmarléval -= RdmAttackHero;
    MagicKrakos()
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    ripposte+=1
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    Indication.innerHTML="Vous avez fait " + RdmAttackHero + " de dégat sur Slobmarlé";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie";
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    setTimeout(DebutIndic,2000);
}

function AttaqueDamageSpésurMonstreHatharedéparKrakos(){
    AudioAttaque03.play()
    AudioAttaque03.currentTime=0.2;
    AudioAttaque03.volume=0.2;
    animateDamage('mob3')
    animateHeroAttack('KrakosP')
    RdmAttackHero = Math.floor(Math.random()*(maxAttaqueSpé-minAttaqueSpé+1))+minAttaqueSpé;                   
    PVHatharedé.innerHTML= PVHatharedéval -= RdmAttackHero;
    MagicKrakos()
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    ripposte+=1
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    Indication.innerHTML="Vous avez fait " + RdmAttackHero + " de dégat sur Hatharedé";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie";
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    setTimeout(DebutIndic,2000);
}

function AttaqueSpéAskKrakos(){
    AudioMagicSelect.play();
    AudioMagicSelect.volume=0.2;
    Indication.innerHTML="Choisissez un ennemies";
    if (ManaKrakosval>=25){
        RadishImage.onclick=AttaqueDamageSpésurMonstreRadishparKrakos;
        SlobmarléImage.onclick=AttaqueDamageSpésurMonstreSlobmarléparKrakos;  //Attaque Spé bouton Krakos
        HatharedéImage.onclick=AttaqueDamageSpésurMonstreHatharedéparKrakos;
        ButtonMagic.onclick=AttaqueSpéAskKrakos;
        BlocageKrakos.style.visibility="visible";
        UsedAttaqueSpéKrakos=1;
        UsedDefKrakos=0;
        UsedAttaqueKrakos=0;
    }else{
        Indication.innerHTML="Krakos n'a pas assez de mana"
        setTimeout(Action,1000)
    }
}

//****************** */
//************************************************************************ */
//***********************Bouton Defense*********************************** */
function DefenseAddMamoxo(){
    AudioShield.play()
    AudioShield.volume=0.05;
    DefenseMamaxo=1;                                //Ajoute 1 a la var qui detecte la defense
    UsedDefMamoxo=1;
    UsedAttaqueSpéMamoxo=0;
    UsedAttaqueMamoxo=0;
    Indication.innerHTML="Mamoxo se défend, ses Dégât subi seront divisés par deux"
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    ripposte+=1
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie";
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    BlocageMamoxo.style.visibility="visible"
    setTimeout(DebutIndic,2000);
}

function DefenseAddGrodo(){
    AudioShield.play()
    AudioShield.volume=0.05;
    DefenseGrodo=1;               //Ajoute 1 a la var qui detecte la defense
    UsedDefGrodo=1;
    UsedAttaqueSpéGrodo=0;
    UsedAttaqueGrodo=0;
    Indication.innerHTML="Grodo se défend, ses Dégât subi seront divisés par deux"
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    ripposte+=1
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie";
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    BlocageGrodo.style.visibility="visible"
    setTimeout(DebutIndic,2000);
}

function DefenseAddBony(){
    AudioShield.play()
    AudioShield.volume=0.05;
    DefenseBony=1;                     //Ajoute 1 a la var qui detecte la defense
    UsedDefBony=1;
    UsedAttaqueSpéBony=0;
    UsedAttaqueBony=0;
    Indication.innerHTML="Bony se défend, ses Dégât subi seront divisés par deux"
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    ripposte+=1
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie";
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    BlocageBony.style.visibility="visible"
    setTimeout(DebutIndic,2000);
}

function DefenseAddKrakos(){
    AudioShield.play()
    AudioShield.volume=0.05;
    DefenseKrakos=1;
    UsedDefKrakos=1;
    UsedAttaqueSpéKrakos=0;
    UsedAttaqueKrakos=0;
    Indication.innerHTML="Krakos se défend, ses Dégât subi seront divisés par deux"
    ButtonAttaque.onclick=Nul;
    ButtonMagic.onclick=Nul;
    ButtonDef.onclick=Nul;
    RadishImage.onclick=Nul;
    SlobmarléImage.onclick=Nul;
    HatharedéImage.onclick=Nul;
    ripposte+=1
    nomMamoxo.style.color= "white";
    lockMamoxo.style.visibility= "hidden";
    nomGrodo.style.color= "white";
    lockGrodo.style.visibility= "hidden";
    nomKrakos.style.color= "white";
    lockKrakos.style.visibility= "hidden";
    nomBony.style.color= "white";
    lockBony.style.visibility= "hidden";
    verifRipposte()
    verifDefaite()
    verifVictoire()
    ButtonMagic.innerHTML="magie";
    ButtonMagic.innerHTML="magie";
    ButtonMagic.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonDef.style.visibility="visible";
    MamoxoMort()
    GrodoMort()
    BonyMort()
    KrakosMort()
    RadishMort()
    SlobmarléMort()
    HatharedéMort()
    BlocageKrakos.style.visibility="visible"
    setTimeout(DebutIndic,2000);
}
//************************************************************************ */
//********************Fonction Defense********************************** */
function AjouteDefMamoxo(){
    console.log("Mamoxo0")
    if (DefenseMamaxo==1){              //verifie si le bouton defense a etait appuyer
        console.log("Mamoxo1")
        PVmamaxo.innerHTML = PVmamoxoval + Math.round((RdmAttackMonster/2));    //ajoute la moitier des degats pour diviser par 2 les degats ennemies
        setTimeout(MamoxoDeftxt,5000)
        setTimeout(DebutIndic,6000);        //indication
        console.log(PVmamaxo)
        console.log(RdmAttackMonster)
        DefenseMamaxo=0             //reset var def magie

    }
}

function AjouteDefGrodo(){
    console.log("Grodo0")   
    if (DefenseGrodo==1){
        console.log("Grodo1")
        PVGrodo.innerHTML= PVGrodoval +  Math.round((RdmAttackMonster/2));
        setTimeout(GrodoDeftxt,6000)
        setTimeout(DebutIndic,2000);
        DefenseGrodo=0
    }
}

function AjouteDefBony(){
    console.log("Bony0")
    if (DefenseBony==1){
        console.log("Bony1")
        PVBone.innerHTML= PVBony +  Math.round((RdmAttackMonster/2));
        setTimeout(BonyDeftxt,7000)
        setTimeout(DebutIndic,8000);
        DefenseBony=0
    }
}

function AjouteDefKrakos(){
    console.log("Krakos0")
    if (DefenseKrakos==1){
        console.log("Krakos0")
        PVKrakos.innerHTML= PVKrak +  Math.round((RdmAttackMonster/2));
        setTimeout(KrakosDeftxt,8000)
        setTimeout(DebutIndic,9000);
        DefenseKrakos=0
    }
}
//************************************************************************ */
//************************Mana Diminution********************************** */
function MagicMamoxo(){
    ManaMamoxo.innerHTML= Manamamoxoval -= 50 ;           //diminution mana  selon perso
}   

function MagicGrodo(){
    ManaGrodo.innerHTML= ManaGrodoval -= 25 ;           //diminution mana  selon perso
}

function MagicBony(){
    ManaBony.innerHTML= ManaBonyval -=  25 ;       //diminution mana  selon perso
}

function MagicKrakos(){
    ManaKrakos.innerHTML= ManaKrakosval -= 25 ;       //diminution mana  selon perso
}
//*********************Fonction Indique************************************ */
setTimeout(DebutIndic,4000);

function DebutIndic(){ 
    Indication.innerHTML="Choisissez quelle hero va jouer!"   //Function Indique basique  
}

function Action(){
    Indication.innerHTML="Choisissez une action"            //function Indique Action 
}
//************************************************************************ */
//******************Fonction Null*********************************** */
function Nul(){
    console.log("rien")                     //creation d'une fonction null pour l'appliquer sur le onclick
}
//************************************************************************ */
//***********************Fonction Attaque sur Hero****************************** */
function MonstreAttaque(){
    ripposte=0                              //reset ripposte
    BlocageKrakos.style.visibility="hidden"
    BlocageMamoxo.style.visibility="hidden"
    BlocageGrodo.style.visibility="hidden"
    BlocageBony.style.visibility="hidden"
    RdmDegaMonstre = Math.floor(Math.random()*4);
    RdmAttackMonster = Math.floor(Math.random()*60);
    AudioReplique.play()
    AudioReplique.volume=0.08;
    animateEnnemyAttack("mob1")
    animateEnnemyAttack("mob2")
    animateEnnemyAttack("mob3")
    console.log(PVmamaxo)
    ButtonDef.style.visibility="visible";
    ButtonAttaque.style.visibility="visible";
    ButtonMagic.style.visibility="visible";
    if (RdmDegaMonstre==0){
        if (PVmamoxoval<=0){            //verifie si les degats ne sont pas appliqué sur un hero deja mort
            RdmDegaMonstre+=1               //si c'est le cas alors les degats seront appliqués sur le hero d'apres
        }else{
            console.log(PVmamaxo)
            console.log("Mamoxo"+RdmAttackMonster)  
            PVmamaxo.innerHTML= PVmamoxoval -= RdmAttackMonster;       //application des degats sur hero
            AjouteDefMamoxo()
            animateDamage('MamoxoP')        //animation degat recu sur hero
            setTimeout(MamoxoDegattxt,1000);        
            setTimeout(DebutIndic,5000);
        }
    }

    if(RdmDegaMonstre==1){
        if (PVGrodo<=0){
            RdmDegaMonstre+=1
        }else{
            console.log("Grodoval"+RdmAttackMonster)
            PVGrodo.innerHTML= PVGrodoval -= RdmAttackMonster;
            AjouteDefGrodo()
            animateDamage('GrodoP')
            setTimeout(GrodoDegattxt,2000);
            setTimeout(DebutIndic,5000);
        }
    }

    if(RdmDegaMonstre==2 && PVBony>0){
        if (PVBony<=0){
            RdmDegaMonstre+=1
        }else{
            console.log("Bony"+RdmAttackMonster)
            PVBone.innerHTML= PVBony -= RdmAttackMonster;
            AjouteDefBony()
            animateDamage('BonyP')
            setTimeout(BonyDegattxt,3000);
            setTimeout(DebutIndic,5000);
        }
    }

    if(RdmDegaMonstre==3 && PVKrak>0){
        if (PVKrak<=0){
            RdmDegaMonstre-=3
        }else{
        console.log("Krakos"+RdmAttackMonster)
        PVKrakos.innerHTML= PVKrak -= RdmAttackMonster;
        AjouteDefKrakos()
        animateDamage('KrakosP')
        setTimeout(KrakosDegattxt,4000);
        setTimeout(DebutIndic,5000);
        }
    }
}
//************************************************************************ */
//********************Indique Degat pour chaque Hero*********************************** */
function MamoxoDegattxt(){
    Indication.innerHTML=" Mamox a recu " + RdmAttackMonster + " de dégat ";
}

function GrodoDegattxt(){
    Indication.innerHTML=" Grodo a recu " + RdmAttackMonster + " de dégat ";
}

function BonyDegattxt(){
    Indication.innerHTML=" Bony a recu " + RdmAttackMonster + " de dégat ";
}

function KrakosDegattxt(){
    Indication.innerHTML=" Krakos a recu " + RdmAttackMonster + " de dégat ";
}
function MamoxoDeftxt(){
    Indication.innerHTML="Mamoxo s'est defendu est a donc subi 50% de fois moins de degat"
}
function GrodoDeftxt(){
    Indication.innerHTML="Grodo s'est defendu est a donc subi 50% de fois moins de degat"
}
function BonyDeftxt(){
    Indication.innerHTML="Bony s'est defendu est a donc subi 50% de fois moins de degat"
}
function KrakosDeftxt(){
    Indication.innerHTML="Krakos s'est defendu est a donc subi 50% de fois moins de degat"
}
//************************************************************************ */
//************************Verif Mort Hero******************************** */
function MamoxoMort(){
    if (PVmamoxoval<=0){
        PVmamaxo.innerHTML= "0"             //verifie si hp>0 si non alors hp html du hero brider a 0 et enleve 1 a la ripposte
        ripposteRequitdimMax() 
        ripposteRequitdimMax = Nul ;  
    }
}

function GrodoMort(){
    if (PVGrodoval<=0){
        PVGrodo.innerHTML= "0"
        ripposteRequitdimGro()
        ripposteRequitdimGro = Nul ;      
    }
}

function BonyMort(){
    if (PVBony<=0){
        PVBone.innerHTML= "0"
        ripposteRequitdimBo() 
        ripposteRequitdimBo = Nul ;   
    }
}

function KrakosMort(){
    if (PVKrak<=0){
        PVKrakos.innerHTML= "0"
        ripposteRequitdimKra()
        ripposteRequitdimKra = Nul ;      
    }
}
//************************************************************************ */
//****************Verif mort Mob*************************************** */
function RadishMort(){
    if (PVRadishval<=0){            
        PVRadish.innerHTML= "0";                    //si pv mob<0 bride 0 hp monstre et affiche image mort et enleve 1 a monstre en vie requit
        mob1.style.visibility="hidden"; 
        MortRadish.style.visibility="visible";
        MonstrEnVieRequitRadish()
        MonstrEnVieRequitRadish = Nul;
    }
}

function SlobmarléMort(){
    if (PVSlobmarléval<=0){
        PVSlobmarlé.innerHTML= "0";
        mob2.style.visibility="hidden"; 
        MortSlobmarlé.style.visibility="visible";
        MonstrEnVieRequitSlobmarlé()
        MonstrEnVieRequitSlobmarlé= Nul;
    }
}

function HatharedéMort(){
    if (PVHatharedéval<=0){
        PVHatharedé.innerHTML= "0";
        mob3.style.visibility="hidden"; 
        MortHatharedé.style.visibility="visible";
        MonstrEnVieRequitHatharedé()
        MonstrEnVieRequitHatharedé = Nul;
    }
}
//************************************************************************ */
//**********************Monstre en Vie pour nbre attaque mob************** */
function MonstrEnVieRequitRadish(){
    MonstrEnVie -= 1                                        //enleve 1 a monstre en vie
}
function MonstrEnVieRequitSlobmarlé(){
    MonstrEnVie -= 1
}

function MonstrEnVieRequitHatharedé(){
    MonstrEnVie -= 1
}
//************************************************************************ */
//******************Ripposte requit pour savoir quand mob attaquera ***** */
function ripposteRequitdimMax(){
    MamoxoImage.style.visibility="hidden";                          //enleve 1 ripposte requit en cas de mort
    MortMamoxo.style.visibility="visible";
    RipposteRequit -= 1
}

function ripposteRequitdimGro(){
    GrodoImage.style.visibility="hidden";
    MortGrodo.style.visibility="visible";
    RipposteRequit -= 1
}

function ripposteRequitdimBo(){
    BonyImage.style.visibility="hidden";
    MortBony.style.visibility="visible";
    RipposteRequit -= 1
}

function ripposteRequitdimKra(){
    KrakosImage.style.visibility="hidden";
    MortKrakos.style.visibility="visible";
    RipposteRequit -= 1
}
//************************************************************************ */
//************************Verification de la ripposte********************* */
function verifRipposte(){
    if(ripposte==RipposteRequit){
        for (i=0;i<3;i++){
            MonstreAttaque()
            DefenseBony=0        //verif de la ripposte et lance la ripposte
            DefenseGrodo=0
            DefenseKrakos=0             //reset de la defense
            DefenseMamaxo=0
        }
    }
}
//************************************************************************ */
//*********************Fonction Pour chaque possibilité de finalité******* */
function verifDefaite(){
    if ((PVmamoxoval<=0) && (PVGrodoval<=0) && (PVBony<=0) && (PVKrak<=0)){                 //verification de defaite
        DefaiteTxt.style.visibility="visible";
        FondDefVic.style.visibility="visible";
        TextInfoDDV.innerHTML="Cliquer sur le Bouton 'Defaite' pour retenter votre chance !";
        TextInfoDDV.style.visibility="visible";
        AudioBattle.pause();
        AudioBattle.currentTime=0;                              //Affichage en consequence 
        AudioDef.play();
        AudioDef.volume=0.02;
        AudioButtonClick.play()
        AudioButtonClick.volume = 0.05;
    }
}

function verifVictoire(){
    if ((PVRadishval<=0) && (PVSlobmarléval<=0) && (PVHatharedéval<=0)){        //verification de victoire
        VictoireTxt.style.visibility="visible"; 
        FondDefVic.style.visibility="visible";
        TextInfoDDV.innerHTML="Cliquer sur le Bouton 'Victoire' pour relancer la partie !";
        TextInfoDDV.style.visibility="visible";
        AudioBattle.pause();
        AudioBattle.currentTime=0;                      //Affichage en consequence 
        AudioVic.play()
        AudioVic.volume=0.3;
        AudioButtonClick.play()
        AudioButtonClick.volume = 0.05;
    }
}

function verifEgalité(){
    if ((PVRadishval<=0) && (PVSlobmarléval<=0) && (PVHatharedéval<=0) && (PVmamoxoval<=0) && (PVGrodoval<=0) && (PVBony<=0) && (PVKrak<=0)) {   //verification de egalité
        EgalitéTxt.style.visibility="visible";
        DefaiteTxt.style.visibility="hidden";
        VictoireTxt.style.visibility="hidden";
        FondDefVic.style.visibility="visible";                //Affichage en consequence 
        TextInfoDDV.innerHTML="Cliquer sur le Bouton 'Egalité' pour relancer la partie !";
        TextInfoDDV.style.visibility="visible";
        AudioMenu.play()
        AudioMenu.volume=0.04;
    }
}
//************************************************************************ */
//*************************Fonction Bouton******************************** */
function Jouer(){
    PlayTxt.style.visibility="hidden";
    FondDefVic.style.visibility="hidden";
    TextInfoDDV.style.visibility="hidden";                      //function du bouton jouer du debut
    ButtonMenuOff.style.visibility="hidden";
    ButtonMenuOn.style.visibility="hidden";
    AudioMenu.pause()
    AudioBattle.play()
    AudioBattle.volume = 0.04;
    AudioBattle.loop=true;
    AudioButtonClick.play()
    AudioButtonClick.volume = 0.05;
}

function Restart(){
    location.reload();          //function qui refresh la page (utiliser dans les boutons de vic/def/egal)
}
//************************************************************************ */
//***********************Fonction Des animations**************************** */
function animateHeroAttack(HeroImgDiv){
    document.getElementById(HeroImgDiv).animate([           //animation pour chaque cas
        { transform: 'translateX(-20px)' },
    ], {
        duration: 500,
    });
}

function animateDamage(HeroImgDiv){
    document.getElementById(HeroImgDiv).animate([
        { transform: 'translateX(-10px)'},
        { transform: 'translateX(10px)'}
    ], {
        duration: 100,
    });
}


function animateEnnemyAttack(EnnemyImgDiv){
    document.getElementById(EnnemyImgDiv).animate([
        { transform: 'translateX(20px)' },
    ], {
        duration: 1000,
    });
}
//************************************************************************ */
//*********************Fonction de Son************************************ */


function MenuSoundOn(){
    AudioMenu.play()
    AudioMenu.volume=0.04;
    AudioMenu.loop=true;
    ButtonMenuOn.style.visibility="visible";            //function bouton mute demute du debut
    ButtonMenuOff.style.visibility="hidden";
    AudioButtonClick.play()
    AudioButtonClick.volume = 0.05;
}

function MenuSoundOff(){
    AudioMenu.pause()
    ButtonMenuOn.style.visibility="hidden";
    ButtonMenuOff.style.visibility="visible";
    AudioButtonClick.play()
    AudioButtonClick.volume = 0.05;
}
