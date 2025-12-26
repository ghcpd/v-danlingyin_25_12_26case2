export const About = (): JSX.Element => (
  <div className="container-responsive space-y-10">
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-dusk">About GreenEarth</h1>
      <p className="text-dusk/80 leading-relaxed max-w-3xl">
        GreenEarth is a community-powered movement helping people protect the planet through education, action,
        and collaboration. We connect neighbors, students, and activists to initiatives that cut emissions, restore
        habitats, and build resilient cities.
      </p>
    </div>

    <section className="grid gap-8 md:grid-cols-3">
      <div className="glass-card p-6 space-y-3">
        <h2 className="text-xl font-semibold text-dusk">Mission</h2>
        <p className="text-dusk/75 leading-relaxed">
          Empower every community to take practical, measurable steps that safeguard climate, wildlife, and oceans.
        </p>
      </div>
      <div className="glass-card p-6 space-y-3">
        <h2 className="text-xl font-semibold text-dusk">Values</h2>
        <ul className="list-disc pl-5 space-y-2 text-dusk/75">
          <li>Equity-centered climate action</li>
          <li>Science-based decisions</li>
          <li>Local leadership and transparency</li>
        </ul>
      </div>
      <div className="glass-card p-6 space-y-3">
        <h2 className="text-xl font-semibold text-dusk">Environmental Goals</h2>
        <ul className="list-disc pl-5 space-y-2 text-dusk/75">
          <li>Plant 50,000 urban trees by 2027</li>
          <li>Restore 500 acres of critical habitat</li>
          <li>Divert 1,000 tons of waste from landfills</li>
        </ul>
      </div>
    </section>

    <section className="glass-card p-6 space-y-4">
      <h2 className="text-2xl font-bold text-dusk">How we work</h2>
      <p className="text-dusk/75 leading-relaxed">
        We partner with schools, NGOs, and local governments to launch initiatives that combine education with direct
        action. From citizen science to policy advocacy, every project is designed with measurable outcomes and open
        data so anyone can track progress.
      </p>
    </section>
  </div>
);
