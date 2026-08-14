'use client'

import Link from 'next/link'

const publications = [
  {
    type: 'Publication',
    title: 'Greenwashing Detection in Corporate ESG Reports through Neurosymbolic AI & Counterfactual Reasoning',
    description: 'Future Technologies Conference 2026',
    year: '2026',
    methodologies: ['Neuro-Symbolic AI', 'Counterfactual Reasoning', 'Causality', 'Ontology Design', 'RAG'],
    technologies: ['Mistral 7B', 'Claude Sonnet 4', 'GPT-4o', 'Python', 'FAISS', 'LangChain', 'Ollama'],
    link: '#',
    downloadUrl: '/Synapse_Cam_Ready_V5.pdf',
    downloadName: 'Synapse_Cam_Ready_V5.pdf',
  },
]

const blogs = [
  {
    title: 'GraphQL vs REST: Are We Fetching Too Much or Too Little?',
    link: 'https://medium.com/@kaveesha.20210431/why-integrating-a-graphql-server-with-next-js-gives-rest-arest-or-not-1775bd07f80a',
  },
  {
    title: 'Let\'s escalate from beginner to intermediate in GraphQL',
    link: 'https://medium.com/@kaveesha.20210431/lets-escalate-from-beginner-to-intermediate-in-graphql-part-i-8eb4f87db08e',
  },
  {
    title: 'Understanding dynamic routing in NextJS',
    link: 'https://medium.com/@kaveesha.20210431/understanding-dynamic-routing-in-next-js-b5031437b77a',
  },
  {
    title: 'Building a RESTful Task Manager API with MERN Stack',
    link: 'https://medium.com/@kaveesha.20210431/building-a-restful-task-manager-api-with-node-express-andmongodb-in-4-steps-e55d33f33d4f',
  },
  {
    title: 'Keys, Ciphers and Code Breakers: A Guide to Cryptography',
    link: 'https://medium.com/@kaveesha.20210431/keys-ciphers-and-codebreakers-guide-to-cryptography-3282bdbfc4b2',
  },
]

export default function PublicationsWriting() {
  return (
    <section id="publications" className="py-20 sm:py-32 px-10 sm:px-10 lg:px-12 max-w-6xl mx-auto">
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#171717] mb-12 sm:mb-20 text-balance">
        Publications & Writing
      </h2>

      <div className="space-y-12 sm:space-y-16">
        {/* Publications */}
        <div>
          <h3 className="font-mono text-sm uppercase tracking-widest text-[#737373] mb-8">
            Publications
          </h3>
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div key={index} className="group pb-2 border-b border-[#e5e5e5] hover:border-[#4338ca] transition-colors space-y-4">
                <Link
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 lg:gap-6">
                    <div className='flex flex-col'>
                      <h4 className="font-serif text-base sm:text-lg lg:text-xl font-light text-[#171717] group-hover:text-[#4338ca] transition-colors flex-1">
                        {pub.title}
                      </h4>
                      <p className="font-mono text-[10px] sm:text-xs py-2 text-[#737373] mt-2 sm:mt-0 flex-shrink-0">
                        {pub.description}
                      </p>
                    </div>
                    <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#737373] mt-2 sm:mt-0 flex-shrink-0">
                      {pub.year}
                    </p>
                  </div>
                </Link>
                {pub.downloadUrl && (
                  <a
                    href={pub.downloadUrl}
                    download={pub.downloadName ?? true}
                    className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#737373] hover:text-[#4338ca] transition-colors pb-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download PDF
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Medium Articles */}
        <div id="writing">
          <h3 className="font-mono text-sm uppercase tracking-widest text-[#737373] mb-8 pt-8">
            Medium Articles
          </h3>
          <div className="space-y-3">
            {blogs.map((blog, index) => (
              <Link
                key={index}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-start  rounded-lg hover:bg-gray-50 transition-colors py-3 border rounded-none">

                  <p className="font-sans text-xs text-[#171717] group-hover:text-[#4338ca] transition-colors px-4">
                    {blog.title}
                  </p>
                  <div className='flex-grow'></div>
                  <div className='pr-4 group-hover:text-[#4338ca]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
