import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageSquare, Palette, FileCheck, Construction, CheckCircle 
} from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "Consult",
    description: "On-site consultation & measurements",
    details: "Free visit to discuss your vision and assess the space"
  },
  {
    icon: Palette,
    title: "Design & Quote",
    description: "Concept design + itemized quote",
    details: "3D renderings available for complex projects"
  },
  {
    icon: FileCheck,
    title: "Permits/Locates",
    description: "Permits & utility locates",
    details: "Tree permits, TRCA approvals, Ontario One Call"
  },
  {
    icon: Construction,
    title: "Build (ICPI)",
    description: "Build to ICPI standard",
    details: "Proper base, compaction, edge restraint"
  },
  {
    icon: CheckCircle,
    title: "Walkthrough",
    description: "Walkthrough, care guide & warranty",
    details: "Maintenance instructions and warranty documentation"
  }
];

export function Process() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design-Build Process</h2>
          <p className="text-xl text-gray-600">
            From first sketch to final stone — transparent, professional, on-time
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                        <Icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-300 mb-2">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                      <p className="text-xs text-gray-500">{step.details}</p>
                    </div>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-gray-300">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-2">Why Our Process Works</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-green-800">
            <div>
              <strong>Clear Communication:</strong> Regular updates at each stage
            </div>
            <div>
              <strong>No Surprises:</strong> Fixed quotes with detailed breakdown
            </div>
            <div>
              <strong>Quality Control:</strong> Inspections at critical points
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}