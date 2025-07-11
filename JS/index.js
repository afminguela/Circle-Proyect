

async function requestProjectData() {
  try {
    const data = await fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects');
    const jsonResponse = await data.json()
    console.log(`los datos son ${jsonResponse}`);
    console.table(jsonResponse)
     return jsonResponse;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

requestProjectData();

async function keepDataOnLocalStorage() {

    
    const freshData = await requestProjectData();
    
    if (freshData) {
      localStorage.setItem('projectData', JSON.stringify(freshData));
      console.log('💾 Data Stored!!');
    } else{ 
        console.log(`Data unable to be stored on LocalStorage`);
    }
    
    return freshData;

}

const container = document.querySelector(".projects-container");
    container.innerHTML = "";

keepDataOnLocalStorage().then(projects => {
  if (projects) {
    console.log('Proyectos cargados:', projects);
     projects.reverse().slice(0,3).forEach((project) => {
      const article = document.createElement("article");
      article.innerHTML = `
        
          <a class="project-wrapper" href="./project.html?id=${project.uuid}">
            <img class="img-project" src="https://github.com/ironhack-jc/mid-term-api/blob/main/${project.uuid}.jpg?raw=true" alt="${project.name}">
            <div class="project-inner-card">
              <h4 class="project-title">${project.name}</h4>
              <p class="project-description">${project.description}</p>
              <a class="learn-more" href="./project.html?id=${project.uuid}">Learn more</a>
            </div>
          </a>
        
     
        `;

        article.className= "project-card";
      container.appendChild(article);
    });
  }
});