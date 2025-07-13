
window.addEventListener("load", async () => {
    try {
       
        const rawData = localStorage.getItem('projectData');
        const data = rawData ? JSON.parse(rawData) : null;
        
        if (!data) {
            console.error('No project data found in localStorage');
            window.location.href = "./404.html";
            return;
        }
        
        const mainProjectId = getQuerystringId();
        let mainProjectIndex = data.findIndex(
            (project) => project.uuid == mainProjectId
        );
        
        if (mainProjectIndex < 0) {
            window.location.href = "./404.html";
            return;
        }

        const mainProject = data[mainProjectIndex];
        addMainProject(mainProject);

       
        const otherProjectsData = [...data];
        otherProjectsData.splice(mainProjectIndex, 1);
        const otherProjects = otherProjectsData.slice(0, 3).reverse();
        addOtherProjects(otherProjects);
        
    } catch (error) {
        console.error('Error loading project data:', error);
        window.location.href = "./404.html";
    }
});

function getQuerystringId() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    return params.id;
}

function addMainProject(project) {
    if (!project) {
        return;
    }

    const projectHTML = `
          <h1 class="title">${project.name}</h1>
          <div class="subtitle">
          <span class="project-description-brief">${project.description}</span>
  
          <span class="project-completed">Completed on
              <span class="completed-data">${project.completed_on}</span>
          </span>
          </div>
          <div class="project-img-div">
          <img class="project-img" src="${project.image}" alt="Screenshot of ${project.name} project showing ${project.description}"
      loading="lazy"
      />
          </div>
  
          <article class="project-description">
              ${project.content}
          </article>
      `;

    const projectElement = document.getElementById("project");
    projectElement.innerHTML = projectHTML;
}

function addOtherProjects(projects) {
    let articlesHTML = "";

    projects.forEach((project) => {
        articlesHTML += jsonProjectToOtherHtmlArticle(project);
    });

    const container = document.querySelector("div.projects-container");
    container.innerHTML = articlesHTML;
}

function jsonProjectToOtherHtmlArticle(project) {
    if (!project) {
        return;
    }

    const projectHTML = `
          <article class="project-card">
              <a class="project-wrapper" href="./project.html?id=${project.uuid}">
                  <img class="img-other-project" src="${project.image}" alt="${project.name} image" />
                  <div class="project-inner-card">
                  <h4 class="project-card-title">${project.name}</h4>
                  <p>${project.description}</p>
                  <a class="learn-more" href="./project.html?id=${project.uuid}">Learn more</a>
                  </div>
              </a>
          </article>
      `;

    return projectHTML;
}
