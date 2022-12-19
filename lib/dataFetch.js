import skills from "../content/skillsData";

export function getPinnedSkills() {
  return skills.filter((skill) => skill.pinned);
}

export function getProjects() {
  return projects.reverse(); // reversing it so that we get the latest project first as I add new project at the end of the array.
}
