// Projects content
import Head from 'next/head';
import ProjectEntry from '../components/ProjectEntry';
import cv from '../public/cv.json';

const ACTIVE_STATUSES = new Set(['Active']);
const WIP_STATUSES = new Set(['Work in Progress']);
const OTHER_STATUS_ORDER = ['Early', 'Planned', 'Paused'];

function projectBucket(status) {
  if (ACTIVE_STATUSES.has(status)) return 'Active';
  if (WIP_STATUSES.has(status)) return 'WIP';
  return 'Others';
}

function Page() {
  const groupedProjects = cv.projects.reduce((acc, project) => {
    const { type, status } = project;
    const bucket = projectBucket(status);
    if (!acc[type]) acc[type] = { Active: [], WIP: [], Others: [] };
    acc[type][bucket].push(project);
    return acc;
  }, {});

  Object.values(groupedProjects).forEach((byBucket) => {
    byBucket.Others.sort(
      (a, b) => OTHER_STATUS_ORDER.indexOf(a.status) - OTHER_STATUS_ORDER.indexOf(b.status),
    );
  });

  return (
    <div className="mx-auto p-4 bg-secondary-lightGray" itemScope itemType="http://schema.org/Person" itemID={`${cv.basics.name}`}>
      <Head>
        <title>Projects</title>
      </Head>
      <p className="mb-6">
        Open source artefacts at different stages of maturity: shipped tools, early libraries, planned
        platform surfaces, and paused frameworks. Specifications and named patterns live under{' '}
        <a href="/research-design" className="content-link">Research &amp; Design</a>
        ; the longer argument is in{' '}
        <a href="/writing" className="content-link">Writing</a>.
      </p>
      {['Proprietary', 'Open Source']
        .filter((type) => groupedProjects[type])
        .map((type) => (
          <div key={type}>
            <h1 className="font-bold mb-4">{type} Projects</h1>
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
                      itemScope
                      itemType="http://schema.org/CreativeWork"
                      itemProp={{ title: 'name', subtitle: 'creativeWorkStatus', content: 'description' }}
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
