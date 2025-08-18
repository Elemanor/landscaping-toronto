import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, ExternalLink } from 'lucide-react';

const faqs = [
  {
    question: "Do I need a tree permit to remove that maple?",
    answer: "If the tree is protected by diameter (30cm+ for private trees, 7.5cm+ for City trees) or location (ravine, natural feature), yes — you'll need to apply to the City before removal. We can help determine if your tree is protected and handle the permit application.",
    link: "https://www.toronto.ca/services-payments/building-construction/tree-ravine-protection-permits/",
    linkText: "City of Toronto Tree Permits"
  },
  {
    question: "Can I widen my driveway with interlock?",
    answer: "You can, but check zoning first. The City regulates driveway width and location even though no building permit is required. Maximum widths vary by lot frontage. We'll verify your property's zoning requirements before starting.",
    link: "https://www.toronto.ca/home/311-toronto-at-your-service/find-service-information/article/?kb=kA06g000001cwPeCAI",
    linkText: "Toronto Driveway Widening Rules"
  },
  {
    question: "Is a pool fence required?",
    answer: "Yes. All pools and hot tubs require a pool enclosure permit and compliant fencing per Chapter 447. The fence must be at least 1.5m high with self-closing, self-latching gates. You need a zoning certificate first.",
    link: "https://www.toronto.ca/services-payments/building-construction/apply-for-a-building-permit/building-permit-application-guides/small-residential-project-guides/pool-fence-enclosures/",
    linkText: "Pool Fence Requirements"
  },
  {
    question: "Do you call before digging?",
    answer: "Always. Ontario One Call locates are mandatory by law. We request locates 5 business days before any excavation. This free service marks underground utilities to prevent damage and ensure safety.",
    link: "https://ontarioonecall.ca/homeowners/",
    linkText: "Ontario One Call Information"
  },
  {
    question: "What's the difference between 60mm and 80mm pavers?",
    answer: "Thickness depends on traffic type. 60mm pavers are perfect for patios, walkways, and foot traffic areas. 80mm pavers are required for driveways and any vehicular traffic. This is an ICPI (Interlocking Concrete Pavement Institute) standard we always follow.",
    link: null,
    linkText: null
  },
  {
    question: "Do you offer permeable paving options?",
    answer: "Yes! Permeable interlocking concrete pavers (PICP) reduce stormwater runoff and can help meet Toronto Green Standard requirements. They're ideal for driveways and can even reduce the need for drainage solutions.",
    link: null,
    linkText: null
  },
  {
    question: "What if my property is in a TRCA regulated area?",
    answer: "Properties near valleys, ravines, or waterways may fall under TRCA (Toronto and Region Conservation Authority) jurisdiction. Landscaping work like grading, retaining walls, or large patios may need a TRCA permit. We'll check your property and handle the application if needed.",
    link: "https://trca.ca/planning-permits/landscaping/",
    linkText: "TRCA Landscaping Permits"
  },
  {
    question: "How long does a typical patio or driveway project take?",
    answer: "Most residential patios (400-600 sq.ft) take 3-5 days from excavation to completion. Driveways typically take 4-7 days. This includes proper base preparation, installation, and cleanup. Weather and site complexity can affect timeline.",
    link: null,
    linkText: null
  },
  {
    question: "What warranty do you provide?",
    answer: "We provide a 5-year warranty on installation workmanship. This covers settling, separation, or installation defects. Paver manufacturers typically warranty their products for 20+ years against defects. We'll provide all warranty documentation upon completion.",
    link: null,
    linkText: null
  },
  {
    question: "Can you match my existing interlock?",
    answer: "Usually yes. We work with all major manufacturers (Unilock, Permacon, Techo-Bloc) and can often source discontinued patterns. If exact matching isn't possible, we'll suggest complementary options that blend well.",
    link: null,
    linkText: null
  }
];

export function FAQ() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
            <HelpCircle className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Clear answers about permits, standards, and our process
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg border shadow-sm"
            >
              <AccordionTrigger className="px-6 hover:no-underline">
                <span className="text-left font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-gray-600 mb-3">{faq.answer}</p>
                {faq.link && (
                  <a 
                    href={faq.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                  >
                    {faq.linkText}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <h3 className="font-semibold text-green-900 mb-2">Have a Different Question?</h3>
          <p className="text-green-800 mb-4">
            Call us at 647-495-3588 or email info@yourlandscaping.ca
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}