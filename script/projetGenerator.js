const projects = [
  {
    title: "Projet 1",
    description: "Ceci est une description pour le projet 1.",
    image: "../img/projet1.png",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Projet 2",
    description: "Ceci est une description pour le projet 2.",
    image: "../img/projet2.png",
    technologies: ["PHP", "MySQL"],
  },
  {
    title: "Projet 2",
    description: "Ceci est une description pour le projet 2.",
    image: "../img/projet2.png",
    technologies: ["PHP", "MySQL"],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour générer un projet avec une image, un titre, une description et les technologies
  function generateProjects(numProjects) {
    const projectContainer = document.getElementById("projet");

    for (let i = 0; i < numProjects; i++) {
      // Créer un div pour le projet
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");

      const divImg = document.createElement("div");
      divImg.classList.add("divImg");

      const output = document.createElement("img");
      output.classList.add("output");
      output.src = "../img/outputDark.svg";

      const redirection = document.createElement("a");
      redirection.href = "#";
      redirection.appendChild(output);

      divImg.appendChild(redirection);
      // Ajouter une image

      projectDiv.appendChild(divImg);

      // Ajouter un titre
      const title = document.createElement("h3");
      title.textContent = `${projects[i].title}`;
      projectDiv.appendChild(title);

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
    }
  }

  generateProjects(3);
});
