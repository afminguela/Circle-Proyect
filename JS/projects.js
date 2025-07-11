function getProjectsFromLocalStorage() {
  try {
    const data = localStorage.getItem('projectData');
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error leyendo Local Storage:', error);
    return null;
  }
}
