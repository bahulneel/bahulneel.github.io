// Projects content
import Head from 'next/head';
import ProjectEntry from '../components/ProjectEntry';
import cv from '../public/cv.json';

function Page() {
  // Group projects by type and status, with active projects first
  const groupedProjects = cv.projects.reduce((acc, project) => {
    const { type, status } = project;
    if (!acc[type]) acc[type] = { Active: [], WIP: [], Others: [] };
    acc[type][status === 'Active' ? 'Active' : status === 'Work in Progress' ? 'WIP' : 'Others'].push(project);
    return acc;
  }, {});

  return (
    <div className="mx-auto p-4 bg-secondary-lightGray" itemscope itemType="http://schema.org/Person" itemID={`${cv.basics.name}`}>
      <Head>
        <title>Projects</title>
      </Head>
      {['Commercial', 'Open Source'].map((type) => (
        <div key={type}>
          <h1 className="text-3xl font-bold mb-4">{type} Projects</h1>
          {['Active', 'WIP', 'Others'].map((status) => (
            groupedProjects[type][status].length > 0 && (
              <div key={status}>
                {groupedProjects[type][status].map((project, index) => (
                  <ProjectEntry
                    key={index}
                    title={project.title}
                    description={project.description}
                    repoLink={project.repoLink}
                    status={project.status}
                    type={project.type}
                    link={project.link}
                    highlights={project.highlights}
                  />
                ))}
              </div>
            )
          ))}
        </div>
      ))}
    </div>
  );
}

export default Page;
