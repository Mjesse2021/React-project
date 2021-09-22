import React from 'react';
import Navigation from"../Component/Navigation";
import Logo from"../Component/Logo";

// chaque page que tu va utilisé ici comme par exemple navigation, tu dois l'importe d'abord comme en haut

const About = () => {
    return (
        <div>
            <Navigation/>
            <Logo/>
            <h1>About us</h1>
            <br/>
            <p>This is a simple exemple of about page in react framework</p><br/>
            <p>La problématique est comprise comme étant l’ensemble des faits constants et des questions 
                qu’on se pose autour d’un problème ou d’une situation donnée . Pour ce travail, les questions
                 à soulever cadrent avec le constat fait dans la gestion des dossiers au sein de L’institut
                  ELISE .  Actuellement, l’informatique constitue une approche et une ressource excellente pour une gestion  facile
                  et méthodique des activités surtout  dans la comptabilité, la gestion des entrées et sorties, la
                    transmission de l’information, la paie des agents, la perception des frais scolaires dans de
                    mieux éducatifs, les transactions bancaires etc…
                    Etant donné que, la société actuelle est plongée dans un changement brusque à cause de la technologie
                    qui ne cesse de se développer et que, nombreuses personnes et institutions sont appelées à s’y conformer.
                    Il est remarqué malheureusement que certaines des institutions de la république démocratique du Congo
                    ne sont pas encore informatisées, tel est le cas du complexe scolaire ELISEE où nous avons mené nos
                        recherches.
            </p> 
             <br/>
            <p>
                Le modelé organisationnel des traitements permet de décrire d’une façon générale puis d’une façon
                minutieuse les choix à effectuer en matière d’organisation et de fonctionnement de services, les 
                modes d’automatisation retenus, les postes de travail et les tâches associées. Il précise les 
                ressources humaines et matérielles mobilisées avec leur organisation dans le temps et dans l’espace
                et exprime comment les règles de gestion sont employée dans l’organisation
            
            </p>

                      
        </div>
    );
};

export default About;