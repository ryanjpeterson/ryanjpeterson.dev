const projectsContainer = document.getElementById("projects-container");

const projects = [];
let dom = "";

async function callFirebase() {
  await db
    .collection("projects")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        projects.push(doc.data());
      });
    });

  updateProjects();
  projectsContainer.textContent = dom;
}

function updateProjects() {
  projects.forEach((project) => {
    let template = `<div class="project">
    <a class="project-link" href="${project.url}">
      <img
        class="project-img"
        src="${project.image}"
        alt="cover"
      />
      <div class="project-info">
        <h3 class="project-title" id="project-title">${project.title}</h3>
        <span id="project-description"
          >${project.description}</span
        >
        <span class="project-tools" id="project-tools">
          ${project.icons.forEach((icon) => {
            return `<i class="fab ${icon}"></i>
            `;
          })}
        </span>
      </div>
    </a>
  </div>
  `;

    console.log(template);
  });
}

callFirebase();
