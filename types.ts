// Fix: Import React to resolve 'Cannot find namespace React' error.
import React from 'react';

export interface Service {
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}