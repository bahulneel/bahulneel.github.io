// About Me content
import Head from 'next/head';

function Page() {
  return (
    <div className="mx-auto p-4 bg-secondary-lightGray">
      <Head>
        <title>About Me</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">I am a software architect and engineer with over 20 years of experience, working at the intersection of data platforms, web systems, and team leadership. I am drawn to problems where the right abstractions make the right thing easier — and to the long, patient work of finding those abstractions and giving them away.</p>
      <p className="mb-4">From mid-2024 through mid-2026, I led the architecture and delivery of a client platform from concept to launch-ready. That engagement is complete but unlaunched at the close of the contract; product specifics remain under NDA. What I can say is that it exercised a distributed offline-first graph store, Schema.org-oriented semantic modelling, early production work on mouldable interfaces, and planning-based interaction chains — ideas I have since published under the <a href="https://github.com/RelationalFabric">RelationalFabric</a> org — the DCSGS whitepaper on distributed graph storage, and libraries including <em>Canon</em> (lazy typing), <em>Howard</em> (claims in the Curry–Howard tradition), and <em>Suss</em> (reference implementation of the RaCSTS spec for propagator networks). Alongside these, I have been building <a href="https://github.com/bahulneel/agent-brain-trust">Agent Brain Trust</a> — expert collectives that turn AI assistants into a room with friction — and <em>RPL</em>, a Markdown-embedded reasoning framework that makes prompt reasoning inspectable.</p>
      <p className="mb-4">The thread running through all of it: I have a long-standing interest in workplace neurodiversity (ADHD diagnosed, ASD assessment pending) and I think the perspectives that come with it — relentless pattern-spotting, comfort sitting with ambiguity, a low tolerance for ceremonious abstractions — show up in how I work and what I build.</p>
      <p>Outside of contracted work, I write long-form pieces on Level Up Coding (see <a href="/writing">Writing</a>), maintain the open-source projects above, and am usually somewhere mid-conversation with the next idea.</p>
    </div>
  );
}

export default Page;
