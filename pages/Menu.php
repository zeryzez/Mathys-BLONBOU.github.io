<?php
include '../components/header.php';
?>

<div id='main-container'>
    <div id="title-container">
        <div id="title-texte-container">
            <p id="intro">Salut! Je m'appelle ...</p>
            <h1> Mathys BLONBOU</h1>
            <p>Je suis un <span> étudiant en informatique</span> passionné par le <span> développement web </span> et <span> d'application</span> <a href="#about"><button>...</button></a></p>
            <div id="title-info-container">
                <p><img src="../img/mailDark.svg" alt="" id="enveloppe">mathys2004.b@gmail.com</p>
                <p><img src="../img/gpsDark.svg" alt="" id="gps">Nancy (54000)</p>
            </div>
        </div>
        <div id="title-img-container">
            <img src="../img/Moi.JPG" alt="" id="moi">
        </div>
    </div>

    <div class="separatorDiv"></div>

    <div id="technologie">

        <h1>Mes Technologies</h1>

        <ul>
            <li><img src="../img/java.svg" alt=""><span class="ombre"></span></li>
            <li><img src="../img/javascript.svg" alt=""><span class="ombre"></span></li>
            <li><img src="../img/mysql.svg" alt=""><span class="ombre"></span></li>
            <li><img src="../img/php.svg" alt=""><span class="ombre"></span></li>
        </ul>

    </div>

    <div id="curriculum">
        <h1>Pour télécharger mon Curriculum Vitae</h1>
        <a href="../documents/cv.ppt">Cliquez ici</a>
    </div>
        

    <div id="projects-container">
        <h1>Mes Projets</h1>
        <div id="projet">
            
        </div>
    </div>

    <div class="separatorDiv"></div>

    <div id="about">
        <h1>A propos</h1>
        <div class="abouttxt">
            <h2>Mathys Blonbou, 20ans</h2>
            <p>Etudiant en <span> BUT 2 informatique </span>à l'université Nancy-Charlemagne, je souhaiterais me spécialisé dans le <span> developpement web et developpement d'application</span>. J'oriente mes études dans ces domaines qui m'ont toujours intéréssé a ce jour. Guidé par mon <span>désir d'apprendre et ma curiosité</span>  j'aime particulièrement participer au différent projet de groupe, mais aussi créer des projet personnel, dans le but <span> d'améliorer mes compétences</span></p>
            <p>L'informatique m'est apparu comme un évidence de par ma principale passion, les <span>jeux vidéo</span>. Ce choix fait c'est confirmé et m'a permis d'ajouter a ma liste de passions tels que <span>le cinéma, la musique et la cuisine, L'informatique</span> </p>
            <p>Cette derniere passions se traduit par un <span>apprentissage de différent langage , la réalisation de différent projet</span> (tels que ceux sité au dessus) et <span>la mise en place de defis personnels</span> (ex: <a href="https://leetcode.com/u/zeryzez/" target="_blank">Mon profil Leetcode</a>). </p>
            <p>Merci d'avoir visité mon portfolio , n'hesitez pas à me contacter</p>
        </div>
    </div>
    
    <div id="contact">
        <h1>Contact</h1>
        <div id="contact-container">
            <div id="form-contact">
                <form action="../components/contact.php" method="post">
                    Mail : <input type="text" name="mail" placeholder="Ton email">
                    <br>
                    Sujet : <input type="text" name="sujet" placeholder="Objet du mail">
                    <br>
                    Message : <textarea name="message" cols="70" rows="10" placeholder="Ton message"></textarea>
                    <br>
                    <input type="submit" name="envoyer" value="Envoyer">
                </form>
            </div>
            <div class="separatorVertical"></div>
            <div id="contact-info">
                <p>Me retrouver :</p>
                <ul>
                    <li>
                        <div style="position: relative; display: inline-block;">
                            <img src="../img/gmail.svg" id="copyButton" class="copy-btn"></button>
                            <div id="copyMessage" class="copy-message">Copié !</div>
                        </div>
                    </li>
                    <li><a href="https://github.com/zeryzez" target="_blank"><img src="../img/github.svg" alt=""></a></li>
                    <li><a href="https://www.linkedin.com/in/mathys-blonbou-225a50257/" target="_blank"><img src="../img/linkedin.svg" alt=""></a></li>
                </ul>
            </div>
        </div>
    </div>
    </div>

</div>
<script type="module" src="../script/projetGenerator.js"></script>

<?php
include '../components/footer.php';
?>
