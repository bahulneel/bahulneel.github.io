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
        I have been building software since 1999, long enough to have watched several good ideas get
        forgotten and then rediscovered under new names. My work sits where data platforms, web systems,
        and team leadership meet. The part that holds my attention is narrower: the recurring cost of code
        that has to interrogate the shape of its data at every boundary, and what becomes possible once it
        does not.
      </p>
      <p className="mb-4">
        From June 2024 to May 2026 I led architecture and delivery of a client platform, from concept to
        launch ready. The engagement closed complete but unlaunched, and the specifics stay under NDA.
        What I can say is what it forced me to build: a distributed offline first graph store, Schema.org
        oriented semantic modelling, early production work on mouldable interfaces, and planning based
        interaction chains that surface the prerequisite actions instead of blocking the user.
      </p>
      <p className="mb-4">
        Those ideas are public now.{' '}
        <a href="https://github.com/RelationalFabric">RelationalFabric</a> carries the DCSGS whitepaper on
        distributed graph storage and the libraries that came out of the same thinking: <em>Canon</em> for
        lazy typing, <em>Howard</em> for claims in the Curry–Howard tradition, and <em>Suss</em> as the
        reference implementation of RaCSTS for propagator networks. Alongside them sits{' '}
        <a href="https://github.com/bahulneel/agent-brain-trust">Agent Brain Trust</a>, a set of expert
        collectives that turn an AI assistant into a room with friction, and <em>RPL</em>, a Markdown
        embedded reasoning framework that makes a model's reasoning inspectable rather than inferred. Most
        recently I have been arguing that technical debt has no recorded artefact form, and drafting one.
      </p>
      <p className="mb-4">
        The thread through all of it is a long standing interest in workplace neurodiversity. I am ADHD
        diagnosed with an ASD assessment pending, and the traits that come with that, relentless pattern
        spotting, comfort sitting with ambiguity, a low tolerance for ceremonious abstraction, are not
        incidental to the work. They are most of the method.
      </p>
      <p>
        I write the long form version of all this on Level Up Coding and Medium. If you want the argument
        rather than the summary, start with <a href="/writing">Writing</a>.
      </p>
      <ProfileLinks className="mt-6" />
    </div>
  );
}

export default Page;
