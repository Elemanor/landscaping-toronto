import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DollarSign, TrendingUp, Info } from 'lucide-react';

const pricingCategories = [
  {
    title: "Patios",
    range: "$25-45/sq.ft",
    factors: ["Material selection", "Base depth requirements", "Access to backyard", "Existing surface removal"],
    typical: "500 sq.ft patio: $12,500-22,500"
  },
  {
    title: "Driveways",
    range: "$30-50/sq.ft",
    factors: ["80mm pavers required", "Excavation depth", "Drainage needs", "Permeable vs standard"],
    typical: "600 sq.ft driveway: $18,000-30,000"
  },
  {
    title: "Retaining Walls",
    range: "$45-75/sq.ft face",
    factors: ["Wall height", "Soil conditions", "Engineering required", "Material choice"],
    typical: "100 sq.ft wall: $4,500-7,500"
  }
];

export function Pricing() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Guide</h2>
          <p className="text-xl text-gray-600">
            Transparent pricing ranges — final quotes after site visit
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {pricingCategories.map((category, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-50 rounded-bl-full" />
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {category.title}
                  <DollarSign className="h-5 w-5 text-green-600" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-green-600">{category.range}</p>
                  <p className="text-sm text-gray-500">installed</p>
                </div>
                
                <Accordion type="single" collapsible>
                  <AccordionItem value="factors" className="border-0">
                    <AccordionTrigger className="text-sm py-2">
                      What affects price?
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="text-sm space-y-1">
                        {category.factors.map((factor, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {factor}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-gray-600">
                    <strong>Typical:</strong> {category.typical}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">What's Included in Our Pricing</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <ul className="space-y-1">
                    <li>✓ Site preparation & excavation</li>
                    <li>✓ Granular base materials</li>
                    <li>✓ All pavers/blocks & sand</li>
                    <li>✓ Edge restraints & spikes</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>✓ Utility locate requests</li>
                    <li>✓ Permit applications (where needed)</li>
                    <li>✓ Site cleanup & disposal</li>
                    <li>✓ 5-year installation warranty</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">
            * Prices shown are estimates for standard conditions. Complex sites, poor access, or special requirements may affect final pricing.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}