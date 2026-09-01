// About Me content — independent prose from the front-page intro
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
        Studying physics taught me that the real power is not in the equations but in the abstractions
        underneath them, and in the models those abstractions assemble. Physics gets the universe right by
        treating every model as provisional: improve it, replace it, never defend it past its usefulness. A
        model, for me, is a claim about how something works, held together by abstractions. That way of
        looking never left; it is still how I hold large systems in view, and why I keep catching two
        abstractions from unrelated fields wearing the same shape.
      </p>
      <p className="mb-4">
        I have been a software architect and engineer for most of my working life, leading teams through
        data platforms, web systems, and technical leadership roles. The abstractions only earn their keep
        when something real is standing on them, and most of a career has gone into making sure they do.
      </p>
      <p className="mb-4">
        I was diagnosed with ADHD in mid-life, with an ASD assessment pending. I am public about it on
        purpose. The diagnosis arrived after years of explaining my own working methods without the words
        for them. The masked version of me is slower and worse. Pattern spotting, depth of focus, wide
        reading, and an inability to accept an abstraction on faith are not side effects to manage around;
        they are part of why I am a distinctive hire.
      </p>
      <p className="mb-4">
        I read a long way outside software: military doctrine, formal logic, philosophy of science, design.
        New abstractions usually arrive at the collision between those worlds and whatever I am building.
        Naming them is what happens when I can see them clearly enough to build from, not a campaign against
        the status quo. I am fine with how things are; I would just rather people could disagree with me in
        specifics than nod along with something unnamed.
      </p>
      <p className="mb-4">
        Early in my career someone quoted a line to me, author forgotten: &quot;code was the thing that got
        in the way of making software&quot;. It has stayed with me. Building since the turn of the century,
        and designing for nearly as long, the work that held up best kept moving toward that sentiment:
        better abstractions, and more of the power sitting in models rather than in the code that happens to
        express them.
      </p>
      <p className="mb-4">
        Lately the industry has tried to jump straight to the end with AI-assisted coding, and the cracks
        are showing. Between what that career taught me and the promise of vibe-coding there are steps we
        skipped. That is the ground I am claiming: between the promise of AI and the code that will actually
        get the job done. I am setting up shop there, to carry an idea through to a release without all that
        messing about with code, but with code.
      </p>
      <p className="mb-4">
        From June 2024 to May 2026 I led architecture and delivery of a confidential client platform, from
        concept to launch-ready. The engagement closed complete but unlaunched; the specifics stay under
        NDA. What is public is the thinking it produced: a distributed graph store specification (DCSGS),
        semantic modelling, mouldable interfaces, and planning-based interaction chains that surface
        prerequisite actions instead of blocking the user.
      </p>
      <p className="mb-4">
        The open source side of that work runs through{' '}
        <a href="https://github.com/RelationalFabric">RelationalFabric</a>. Canon is the usable library for
        lazy typing, still evolving. Howard and Suss carry the claims and propagator network ideas at an
        earlier stage, in the order the writing describes. The Relational Fabric platform name covers a
        wider surface not yet assembled.{' '}
        <a href="https://github.com/bahulneel/agent-brain-trust">Agent Brain Trust</a> and <em>RPL</em> sit
        on a parallel track: inspectable reasoning and AI rooms that refuse to skip the useful steps.
      </p>
      <p className="mb-4">
        When the thinking needs room, I publish it: specifications, patterns, open source libraries, and
        long-form pieces. The site holds the shorter version; Level Up Coding and Medium hold the arguments.
        If you want the argument rather than the summary, start with <a href="/writing">Writing</a>.
      </p>
      <ProfileLinks className="mt-6" />
    </div>
  );
}

export default Page;
