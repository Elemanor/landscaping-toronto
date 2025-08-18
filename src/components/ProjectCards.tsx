import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Home, Hammer, Droplets, Building, DoorOpen, Zap, PaintBucket, Ruler
} from 'lucide-react';

const projects = [
  {
    icon: Hammer,
    title: "Basement Underpinning",
    description: "Lower your basement floor for more headroom",
    standard: "8-9ft ceiling height achieved",
    badge: "Most Popular",
    color: "blue"
  },
  {
    icon: Droplets,
    title: "Waterproofing Systems",
    description: "Interior & exterior waterproofing solutions",
    standard: "Lifetime transferable warranty",
    badge: "Essential",
    color: "cyan"
  },
  {
    icon: Building,
    title: "Foundation Repair",
    description: "Crack repair, structural reinforcement",
    standard: "Engineer-certified solutions",
    badge: null,
    color: "gray"
  },
  {
    icon: DoorOpen,
    title: "Walkout Basements",
    description: "Create separate entrance & rental units",
    standard: "Fire code compliant",
    badge: "ROI+",
    color: "green"
  },
  {
    icon: Home,
    title: "Complete Finishing",
    description: "Full basement renovations & legal suites",
    standard: "Turnkey solutions",
    badge: null,
    color: "purple"
  },
  {
    icon: Zap,
    title: "Electrical & Plumbing",
    description: "Full rough-in for basement suites",
    standard: "ESA & permit ready",
    badge: null,
    color: "yellow"
  },
  {
    icon: PaintBucket,
    title: "Moisture & Mold",
    description: "Remediation & prevention systems",
    standard: "Health Canada guidelines",
    badge: null,
    color: "red"
  },
  {
    icon: Ruler,
    title: "Structural Work",
    description: "Beams, posts, load-bearing walls",
    standard: "P.Eng stamped drawings",
    badge: "Engineered",
    color: "indigo"
  }
];

export function ProjectCards() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Basement Construction Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every project includes structural engineering, permits, inspections, and warranty. 
            We handle everything from foundation to finish.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className={`p-3 rounded-lg bg-${project.color}-50 group-hover:bg-${project.color}-100 transition-colors`}>
                      <Icon className={`h-6 w-6 text-${project.color}-600`} />
                    </div>
                    {project.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {project.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3">
                    {project.description}
                  </CardDescription>
                  <p className="text-xs font-medium text-gray-700 bg-gray-50 p-2 rounded">
                    ✓ {project.standard}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            All projects include: Permits • Engineering • Inspections • 
            Project management • Clean-up • Warranty
          </p>
        </div>
      </div>
    </section>
  );
}