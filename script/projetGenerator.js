import { projects } from "/constants/projects.js";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          block: "center",
        });
      }
    });
  });
  // Fonction pour générer un projet avec une image, un titre, une description et les technologies
  function generateprojects(numprojects) {
    const projectContainer = document.getElementById("projet");

    for (let i = 0; i < numprojects; i++) {
      // Créer un div pour le projet
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");

      const divImg = document.createElement("div");
      divImg.classList.add("divImg");

      // Ajouter une image
      const img = document.createElement("img");
      img.src = projects[i].image;
      img.alt = projects[i].title;
      img.classList.add("imgProjet");

      const video = document.createElement("video");
      video.src = projects[i].video;
      video.alt = projects[i].title;
      video.muted = true;
      video.loop = true;
      video.classList.add("vidProjet");

      divImg.appendChild(img);
      divImg.appendChild(video);

      projectDiv.appendChild(divImg);

      const divTitle = document.createElement("div");
      divTitle.classList.add("divTitle");

      // Ajouter un titre
      const title = document.createElement("h3");
      title.textContent = `${projects[i].title}`;

      const status = document.createElement("p");
      status.textContent = `${projects[i].status}`;
      status.classList.add("status");

      status.style.backgroundColor =
        projects[i].status === "Terminé" ? "#4a7d4d" : "#a8332a";

      divTitle.appendChild(title);
      divTitle.appendChild(status);

      projectDiv.appendChild(divTitle);

      // Ajouter une description
      const description = document.createElement("p");
      description.textContent = `${projects[i].description}.`;
      projectDiv.appendChild(description);

      // Ajouter une liste des technologies
      const techList = document.createElement("ul");
      const technologies = projects[i].technologies; // Remplace par tes technologies

      technologies.forEach((tech) => {
        const techItem = document.createElement("li");
        techItem.textContent = tech;
        techList.appendChild(techItem);
      });

      projectDiv.appendChild(techList);

      // Ajouter le conteneur projet dans le conteneur principal
      projectContainer.appendChild(projectDiv);

      // Ajouter l'événement hover pour chaque projet
      const mediaContainer = divImg;

      mediaContainer.addEventListener("mouseenter", () => {
        video.play();
      });

      mediaContainer.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
      });
    }
  }
  generateprojects(projects.length); // Créez 2 projets par exemple
  const projectDiv = document.querySelectorAll(".project");

  projectDiv.forEach((p) => {
    p.addEventListener("click", function () {
      const nomProjet = p.querySelector("h3").textContent;
      const index = rechDichoProjet(nomProjet);
      showproject(projects[index]);
    });
  });
});

// Fonction pour afficher les détails du projet en grand plan
function showproject(project) {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";

  // Création de l'overlay
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const projectDiv = document.createElement("div");

  projectDiv.classList.add("projectDivPL");

  // Ajout d'un événement pour fermer la vue quand on clique sur l'overlay
  overlay.addEventListener("click", function (event) {
    console.log(event.target);
    if (event.target === projectDiv || event.target === overlay) {
      overlay.remove();
      body.style.overflow = "auto";
    }
  });

  // Crée le conteneur principal
  const projetLong = document.createElement("div");
  projetLong.classList.add("projetLong");

  // Crée le div contenant le titre et le paragraphe
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("titleDivPL");

  // Crée et ajoute le titre (h1) et le premier paragraphe dans le titleDiv
  const title = document.createElement("h1");
  title.textContent = project.title;
  const titleStatus = document.createElement("p");
  titleStatus.textContent = project.status;
  titleStatus.style.backgroundColor =
    project.status === "Terminé" ? "#4a7d4d" : "#a8332a";

  titleDiv.appendChild(title);
  titleDiv.appendChild(titleStatus);

  // Ajoute titleDiv dans projetLong
  projetLong.appendChild(titleDiv);

  const divImg = document.createElement("div");
  divImg.classList.add("divImgPL");

  const redirection = document.createElement("a");
  redirection.href = project.github;
  redirection.target = "_blank";
  redirection.textContent = "Voir le code source";

  const output = document.createElement("img");
  output.src = "img/outputDark.svg";
  output.alt = "lien github";
  output.classList.add("outputPL");

  redirection.appendChild(output);

  divImg.appendChild(redirection);

  // Crée et ajoute l'image
  const image = document.createElement("img");
  image.src = project.image;
  image.alt = project.title;
  image.classList.add("imgPL");

  const video = document.createElement("video");
  video.src = project.video;
  video.alt = project.title;
  video.classList.add("videoPL");
  video.muted = true;

  divImg.appendChild(image);
  divImg.appendChild(video);

  projetLong.appendChild(divImg);

  const technologies = document.createElement("ul");
  technologies.classList.add("technologiesPL");

  project.technologies.forEach((tech) => {
    const techItem = document.createElement("li");
    techItem.textContent = tech;
    technologies.appendChild(techItem);
  });

  projetLong.appendChild(technologies);

  // Crée et ajoute le premier séparateur
  const separator1 = document.createElement("span");
  separator1.classList.add("separator");
  projetLong.appendChild(separator1);

  const description = document.createElement("p");
  description.textContent = project.descriptionLong;

  projetLong.appendChild(description);

  // Crée et ajoute le deuxième séparateur
  const separator2 = document.createElement("span");
  separator2.classList.add("separator");
  projetLong.appendChild(separator2);

  const date = document.createElement("p");
  date.textContent = "Date : " + project.date;

  projetLong.appendChild(date);

  const categorie = document.createElement("p");
  categorie.textContent = "Catégorie : " + project.categorie;

  projetLong.appendChild(categorie);

  // Crée et ajoute le bouton
  const button = document.createElement("button");
  button.textContent = "Fermer";
  button.addEventListener("click", function () {
    overlay.remove();
    body.style.overflow = "auto";
  });
  projetLong.appendChild(button);

  const mediaContainer = divImg;

  mediaContainer.addEventListener("mouseenter", () => {
    video.play();
  });

  mediaContainer.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });

  const projectContainer = document.getElementById("projects-container");

  projectDiv.appendChild(projetLong);
  overlay.appendChild(projectDiv);
  projectContainer.appendChild(overlay);
}

function rechDichoProjet(nomProjet) {
  let debut = 0;
  let fin = projects.length - 1;
  let milieu;
  let trouve = false;
  let index = -1;
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].title === nomProjet) {
      index = i;
      break;
    }
  }
  return index;
}

document
  .getElementById("copyButton")
  .addEventListener("click", copyToClipboard);

function copyToClipboard() {
  const textToCopy = "mathys2004.b@gmail.com";

  navigator.clipboard.writeText(textToCopy).then(() => {
    const message = document.getElementById("copyMessage");
    message.classList.add("show");

    setTimeout(() => {
      message.classList.remove("show");
    }, 1500);
  });
}

let btn = document.getElementById("darkLightMode");
btn.onclick = function () {
  document.body.classList.toggle("light-mode");

  let imgmode = document.getElementById("sunmoon");
  let linkedin = document.getElementById("linkedin");
  let github = document.getElementById("github");
  let mail = document.getElementById("enveloppe");
  let gps = document.getElementById("gps");
  let imgmoi = document.getElementById("moi");

  let imgChanges = [imgmode, linkedin, github, mail, gps];

  for (let element of imgChanges) {
    if (document.body.classList.contains("light-mode")) {
      element.src = element.src.replace("Dark", "Light");
      if (element === imgmode) {
        element.src = element.src.replace("sun", "moon");
      }
    } else {
      element.src = element.src.replace("Light", "Dark");
      if (element === imgmode) {
        element.src = element.src.replace("moon", "sun");
      }
    }

    if (element !== imgmoi) {
      element.style.opacity = 0;
      setTimeout(function () {
        element.style.opacity = 1;
      }, 300);
    }
  }
};
