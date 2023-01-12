import projectsFake from "../data";

const ProjectDetailPage = ({ data: { projectId } }) => {
    // find
    const currentProject = projectsFake.find((project) => project.id == projectId);
    if (!currentProject) return `Loading...`;
    return /*html*/ `<h1>Project Detail Page</h1>
        ${currentProject.name}
        <hr />
        
        ${
            currentProject.teams
                ? `
                    <h2>Teams</h2>
                    <ul>
                        ${currentProject.teams.map((member) => `<li>${member.name}</li>`).join("")}
                    <ul>
                    `
                : ""
        }
        
    `;
};

export default ProjectDetailPage;