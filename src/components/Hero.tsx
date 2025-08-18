import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Phone, Calendar, Image, Shield, Award, CheckCircle, HardHat } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16 px-4 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                <Shield className="w-3 h-3 mr-1" />
                WSIB Insured
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200">
                <Award className="w-3 h-3 mr-1" />
                Licensed Contractors
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                <HardHat className="w-3 h-3 mr-1" />
                Structural Engineers
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Toronto Basement Construction — Underpinning, Waterproofing & Finishing
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              From foundation to finish. <strong>Licensed contractors</strong> and <strong>structural engineers</strong>. 
              Building permits, inspections, and utility coordination handled. Serving Toronto & GTA since 2010.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Book Your Free Basement Consultation</DialogTitle>
                    <DialogDescription>
                      We'll assess your basement, discuss your vision, and provide a detailed quote.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
                    <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
                    <input type="tel" placeholder="Phone" className="w-full p-3 border rounded-lg" />
                    <input type="text" placeholder="Property Address" className="w-full p-3 border rounded-lg" />
                    <textarea placeholder="Brief description of your basement project" className="w-full p-3 border rounded-lg h-24" />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Submit Request</Button>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button size="lg" variant="outline">
                <Image className="mr-2 h-5 w-5" />
                View Portfolio
              </Button>
              
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-5 w-5" />
                437-545-0067
              </Button>
            </div>
            
            {/* Permits & Standards Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                What We Handle For You
              </h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• <strong>Building Permits:</strong> All City of Toronto permits & drawings</li>
                <li>• <strong>Engineering:</strong> Structural drawings & calculations</li>
                <li>• <strong>Inspections:</strong> Foundation, framing, plumbing, electrical</li>
                <li>• <strong>Waterproofing:</strong> Interior/exterior systems with warranty</li>
                <li>• <strong>Underpinning:</strong> Bench footing & traditional methods</li>
                <li>• <strong>Ontario Building Code:</strong> Full OBC compliance</li>
              </ul>
            </div>
          </div>
          
          {/* Image/Visual Content */}
          <div className="lg:col-span-5">
            <div className="relative">
              <img 
                src="/api/placeholder/600/500" 
                alt="Professional basement construction in Toronto" 
                className="rounded-xl shadow-2xl w-full"
                width="600"
                height="500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-lg p-4">
                <p className="text-sm font-semibold mb-1">Recent Project: The Annex</p>
                <p className="text-xs text-gray-600">Full basement underpinning & luxury finishing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}