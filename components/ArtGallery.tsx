import React from 'react'


const images = ['/1.png', '2.png', '3.png', '4.png', '5.png', '6.png']

export default function ArtGallery() {
    return (
        <section id="publications" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#171717] mb-12 sm:mb-20 text-balance">
                Art Gallery
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="group overflow-hidden "
                    >
                        <img
                            src={img}
                            alt={`Artwork ${index + 1}`}
                            className="
                w-full h-full object-cover object-top
                transition-all duration-500 ease-out
                group-hover:scale-110
                grayscale group-hover:grayscale-0
              "
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
