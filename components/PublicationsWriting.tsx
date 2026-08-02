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
    <section id="publications" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
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
              <Link
                key={index}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="pb-2 border-b border-[#e5e5e5] hover:border-[#4338ca] transition-colors space-y-4">
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
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Medium Articles */}
        <div id="writing">
          <h3 className="font-mono text-sm uppercase tracking-widest text-[#737373] mb-8">
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
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#737373] mt-1 min-w-fit">
                    article
                  </span>
                  <p className="font-sans text-base text-[#171717] group-hover:text-[#4338ca] transition-colors">
                    {blog.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
