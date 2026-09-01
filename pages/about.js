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
        I see abstractions easily, and I notice when two from different places describe the same thing.
        That is the through line, not a technique I switch on. Studying physics at university taught me
        where the instinct comes from and why it is worth trusting: physics describes the universe as well
        as it does because of the abstractions it builds models from, and because it replaces a model
        when a better one appears. A model is a provisional claim about how something works, assembled
        out of abstractions. The discipline is in improving it, not defending it. I have looked at
        software that way since 1999.
      </p>
      <p className="mb-4">
        I am a software architect and engineer. I build systems that have to survive contact with reality,
        and I have led teams doing that work across data platforms, web systems, and technical leadership.
        The abstractions are worth nothing until something real is standing on them, and I have spent most
        of a career making sure they do.
      </p>
      <p className="mb-4">
        I read a long way outside software: military doctrine, formal logic, philosophy of science, design.
        The collisions between those worlds and whatever I am building are where the genuinely new
        abstractions tend to appear. Naming them is a side effect of seeing them clearly enough to build
        from, not a campaign against the status quo. I am fine with how things are; I would just rather
        people could disagree with me in specifics than nod along with something unnamed.
      </p>
      <p className="mb-4">
        When the thinking needs room, I publish it: specifications, patterns, open source libraries, and
        long form pieces. The site holds the shorter version; Level Up Coding and Medium hold the
        arguments. If you want the argument rather than the summary, start with{' '}
        <a href="/writing">Writing</a>.
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
        I was diagnosed with ADHD in mid life, with an ASD assessment pending. I am public about it on
        purpose. The diagnosis arrived after most of a career spent explaining my own working methods
        without the vocabulary for them. The masked version of me is slower and worse, and the traits
        people are quietly asked to hide, the pattern spotting, the depth of focus, the wide reading, the
        inability to accept an abstraction on faith, are part of what makes me a distinctive hire, not
        something to manage around.
      </p>
      <ProfileLinks className="mt-6" />
    </div>
  );
}

export default Page;
