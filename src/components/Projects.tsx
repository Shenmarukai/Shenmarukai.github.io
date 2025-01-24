import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      title: "Bewusstsein Labs",
      description: "An organization dedicated to developing complex and performant algorithms for robotics.",
      links: [
        { name: "const-expr-bounds", url: "https://github.com/BewusstseinLabs/const-expr-bounds" },
        { name: "memory", url: "https://github.com/BewusstseinLabs/memory" },
        { name: "linear-algebra", url: "https://github.com/BewusstseinLabs/linear-algebra" },
        { name: "geometric-algebra", url: "https://github.com/BewusstseinLabs/geometric-algebra" },
        { name: "calculus", url: "https://github.com/BewusstseinLabs/calculus" },
        { name: "probability", url: "https://github.com/BewusstseinLabs/probability" },
        { name: "kinematics", url: "https://github.com/BewusstseinLabs/kinematics" },
        { name: "kinetics", url: "https://github.com/BewusstseinLabs/kinetics" },
        { name: "dynamics", url: "https://github.com/BewusstseinLabs/dynamics" },
        { name: "graphs", url: "https://github.com/BewusstseinLabs/graphs" },
        { name: "neural-networks", url: "https://github.com/BewusstseinLabs/neural-networks" },
        { name: "control", url: "https://github.com/BewusstseinLabs/control" },
        { name: "robotics", url: "https://github.com/BewusstseinLabs/robotics" },
        { name: "bewusstsein", url: "https://github.com/BewusstseinLabs/bewusstsein" },
      ]
    },
    {
      title: "OpenJE",
      description: "An organization dedicated to reverse engineering the unreleased Fallout: Van Buren tech demo.",
      links: [
        { name: "openje-re", url: "https://github.com/OpenJE/openje-re" },
        { name: "openje", url: "https://github.com/OpenJE/openje" },
        { name: "openvb", url: "https://github.com/OpenJE/openvb" },
      ]
    }
  ];

  return (
    <section className="card">
      <h2>Current Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}

export default Projects;
