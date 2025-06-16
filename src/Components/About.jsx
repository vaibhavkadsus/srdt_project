import React from 'react'

function About() {
  return (
    <div className="bg-gray-50 text-gray-800">
    <div className="container mx-auto p-6 md:p-12 space-y-12">
      <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center">
        About Sai Rural Development Trust
      </h1>

      <section className="space-y-4 max-w-4xl mx-auto">
        <p>
          <strong>Sai Rural Development Trust (SRDT)</strong>, established under the
          Mumbai Public Trust Act, 1950, has been working tirelessly for years to
          improve the lives of farmers, farm workers, communities, and women SHGs. :contentReference[oaicite:18]{index=18}
        </p>
        <p>
          Our expertise spans project planning and execution across multiple sectors,
          capacity building, training, baseline surveys, and needs assessments. :contentReference[oaicite:19]{index=19}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <img
          src="https://sairuraldevelopmenttrust.com/images/banner-img.jpg"
          alt="SRDT Activity"
          className="rounded-lg shadow-md"
        />
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-green-700">Our Vision</h2>
            <p>
              To provide resources and opportunities to underprivileged individuals,
              groups, and communities, empowering them to live with dignity and contribute
              meaningfully to society. :contentReference[oaicite:20]{index=20}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-green-700">Our Mission</h2>
            <p>
              To be a foundation for social change and inclusion, promoting integration
              and holistic development of underprivileged individuals, groups, and communities. :contentReference[oaicite:21]{index=21}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-green-700">Our Core Values</h2>
        <ul className="list-disc list-inside columns-2 gap-4">
          {["Responsibility","Accountability","Transparency","Innovation",
            "Equality","Participation","Creativity"].map(v => <li key={v}>{v}</li>)}
        </ul>
      </section>

      <section className="bg-green-50 rounded-xl shadow-md p-8 text-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Message from the Chairman
        </h2>
        <p className="font-medium italic">
          “It’s our duty and responsibility to give back to society. With our team’s
          dedication and support, we are building a brighter future for all.”
        </p>
        <p className="mt-2 font-bold">— Mr. Ram Santram Mise, Chairman</p>
      </section>

      <section className="bg-gray-100 rounded-lg shadow p-6 space-y-2 max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-gray-800">Contact & Office</h2>
        <p>📍 Masnerwadi, Tq. Gangakhed, Dist. Parbhani – 431514, Maharashtra</p>
        <p>📧 sairuraldevelopmenttrust@gmail.com</p>
        <p>📞 99‑2024‑1110</p>
      </section>
    </div>
  </div>
);
  
}

export default About