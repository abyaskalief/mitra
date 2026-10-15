import React from 'react';
import { ProjectGallerySection } from './ProjectGallerySection';

export const GalleryPage: React.FC = () => {
  return (
    <div className="bg-[#F3F5F7] min-h-screen">
      <ProjectGallerySection showAllLink={false} />
    </div>
  );
};
