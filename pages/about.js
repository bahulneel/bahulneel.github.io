// About Me content
import Head from 'next/head';
import ProfileLinks from '../components/ProfileLinks';

function Page() {
  return (
    <div className="mx-auto p-4 bg-secondary-lightGray">
      <Head>
        <title>About Me</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        I have been building software since 1999, long enough to watch good ideas get forgotten and
        rediscovered under new names. What keeps me interested is narrower: the cost of code that must
        interrogate data shape at every boundary, and what becomes possible when it does not. I tend to
        write the specification and the argument first, then build the architecture and libraries that
        make the argument testable.
      </p>
      <p className="mb-4">
        From June 2024 to May 2026 I led architecture and delivery of a confidential client platform, from
        concept to launch ready. The engagement closed complete but unlaunched; the specifics stay under
        NDA. What is public is the thinking it produced: a distributed graph store specification (DCSGS),
        semantic modelling, mouldable interfaces, and planning based interaction chains that surface
        prerequisite actions instead of blocking the user.
      </p>
      <p className="mb-4">
        The open source side of that work runs through{' '}
        <a href="https://github.com/RelationalFabric">RelationalFabric</a>. Canon is the usable library
        for lazy typing, still evolving. Howard and Suss carry the claims and propagator network ideas at
        an earlier stage, in the order the writing describes. The Relational Fabric platform name covers a
        wider surface not yet assembled.{' '}
        <a href="https://github.com/bahulneel/agent-brain-trust">Agent Brain Trust</a> and{' '}
        <em>RPL</em> sit on a parallel track: inspectable reasoning and AI rooms that refuse to skip the
        useful steps.
      </p>
      <p className="mb-4">
        The thread through all of it is a long standing interest in workplace neurodiversity. I am ADHD
        diagnosed with an ASD assessment pending, and the traits that come with that, relentless pattern
        spotting, comfort sitting with ambiguity, a low tolerance for ceremonious abstraction, are not
        incidental to the work. They are most of the method.
      </p>
      <p>
        The long form version lives on Level Up Coding and Medium. If you want the argument rather than
        the summary, start with <a href="/writing">Writing</a>.
      </p>
      <ProfileLinks className="mt-6" />
    </div>
  );
}

export default Page;
