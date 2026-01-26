import { useState } from 'react';
import ImageCard from './ImageCard';
import Lightbox from './Lightbox';
import GalleryFilter from './GalleryFilter';

export default function Gallery() {
    const [filters, setFilters] = useState({ work: true, personal: false });
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // Gallery data using existing assets as placeholders
    const galleryImages = [
        {
            id: 1,
            src: './assets/dck-img1.png',
            title: 'dck - AI Flashcard App',
            description: 'Desktop flashcard application with AI-powered card generation using Grok API. Built with Electron, TypeScript, and React for seamless cross-platform experience.',
            category: 'work',
            time: '2024-12-15',
            links: { 
                github: 'https://github.com/Zentoboo/dck', 
                demo: 'https://youtu.be/8vpD2yrPBEQ' 
            }
        },
        {
            id: 2,
            src: './assets/dck-img2.png',
            title: 'dck - Study Interface',
            description: 'Interactive study session interface with spaced repetition algorithm and AI-powered hint system for optimal learning.',
            category: 'work',
            time: '2024-12-15',
            links: { 
                github: 'https://github.com/Zentoboo/dck', 
                demo: 'https://youtu.be/8vpD2yrPBEQ' 
            }
        },
        {
            id: 3,
            src: './assets/gadpa-live-use1.jpg',
            title: 'gadpa.live - Debate Platform',
            description: 'Real-time debate management system for GADPA 2025 Congress. Features live scoring, timer management, and audience engagement tools.',
            category: 'work',
            time: '2024-10-20',
            links: { 
                github: 'https://github.com/Zentoboo/gadpa-debate', 
                demo: 'https://youtu.be/L7we37LRnig' 
            }
        },
        {
            id: 4,
            src: './assets/gadpa-live-img1.png',
            title: 'gadpa.live - Admin Dashboard',
            description: 'Comprehensive admin dashboard for debate management with real-time updates and analytics.',
            category: 'work',
            time: '2024-10-20',
            links: { 
                github: 'https://github.com/Zentoboo/gadpa-debate', 
                demo: 'https://youtu.be/L7we37LRnig' 
            }
        },
        {
            id: 5,
            src: './assets/gadpa-live-img2.png',
            title: 'gadpa.live - Live Debate View',
            description: 'Public view for live debates with real-time scoring and participant information.',
            category: 'work',
            time: '2024-10-20',
            links: { 
                github: 'https://github.com/Zentoboo/gadpa-debate', 
                demo: 'https://youtu.be/L7we37LRnig' 
            }
        },
        {
            id: 6,
            src: './assets/ppim-student-management.jpg',
            title: 'PPIM Portal - Student Management',
            description: 'Comprehensive student management system for PPIM with MySQL database and PHP backend implementation.',
            category: 'work',
            time: '2024-11-10',
            links: {}
        },
        {
            id: 7,
            src: './assets/ppim-ppi-campus-member-management.jpg',
            title: 'PPIM Portal - Campus Management',
            description: 'Campus member management interface with role-based access control and detailed reporting features.',
            category: 'work',
            time: '2024-11-10',
            links: {}
        },
        {
            id: 8,
            src: './assets/profile-picture.jpg',
            title: 'Team GADPA 2024',
            description: 'Amazing GADPA team after successfully organizing the 2024 Congress. Great memories with incredible people.',
            category: 'personal',
            time: '2024-10-15',
            links: {}
        },
        {
            id: 9,
            src: './assets/codecraft-2023.png',
            title: 'XMUM CodeCraft 2023 Champions',
            description: 'First place winners at XMUM CodeCraft 2023 competition. Team effort and late nights paid off!',
            category: 'personal',
            time: '2023-11-20',
            links: {}
        }
    ];

    // Filter images based on active filters
    const filteredImages = galleryImages.filter(img => 
        (filters.work && img.category === 'work') || 
        (filters.personal && img.category === 'personal')
    );

    const openLightbox = (index) => {
        setSelectedImageIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
    };

    const goToPrevious = () => {
        setSelectedImageIndex((prev) => 
            prev === 0 ? filteredImages.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setSelectedImageIndex((prev) => 
            (prev + 1) % filteredImages.length
        );
    };

    const selectedImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

    return (
        <div className="relative min-h-screen">

            <div className="relative z-10">
                {/* Header */}
                <div className="max-w-4xl px-12 mx-auto py-16">
                    <h1 className="text-4xl font-bold mb-4">gallery</h1>
                    <p className="text-gray-600 dark:text-zinc-400">
                        A collection of my work and personal moments. Click any image to view details.
                    </p>
                </div>

                {/* Filter */}
                <GalleryFilter 
                    filters={filters} 
                    onFilterChange={setFilters} 
                />

                {/* Gallery Grid */}
                <div className="max-w-8xl px-12 mx-auto pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 transition-opacity duration-200">
                        {filteredImages.map((image, index) => (
                            <ImageCard
                                key={image.id}
                                image={image}
                                onClick={() => openLightbox(index)}
                            />
                        ))}
                    </div>

                    {filteredImages.length === 0 && (
                        <div className="text-center py-12 text-gray-500 dark:text-zinc-500">
                            No images found in this category.
                        </div>
                    )}
                </div>

                {/* Lightbox */}
                <Lightbox
                    image={selectedImage}
                    images={filteredImages}
                    onClose={closeLightbox}
                    onNext={goToNext}
                    onPrevious={goToPrevious}
                />
            </div>
        </div>
    );
}