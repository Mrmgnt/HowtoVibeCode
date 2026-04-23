import React from 'react';
import { Icon } from '../atoms/Icon';

interface ConceptCardProps {
  iconName: string;
  title: string;
  description: string;
}

export const ConceptCard: React.FC<ConceptCardProps> = ({ iconName, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
        <Icon name={iconName} className="text-2xl font-light" />
      </div>
      <h3 className="font-h3 text-h3 text-primary mb-3">{title}</h3>
      <p className="font-body-md text-body-md text-secondary">{description}</p>
    </div>
  );
};
