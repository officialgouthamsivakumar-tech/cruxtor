import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Shield, Cog, Zap, Waves, Droplets, Box, Bolt, Download, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                CRUXSTOR<br />
                <span className="text-blue-400">Advanced Screening & Sand Processing Systems</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0">
                Precision-engineered industrial equipment for efficient material processing, 
                separation, and quality assurance in manufacturing operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  View Products
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1684610366499-34848a736d4f?w=1200&h=800&fit=crop&auto=format"
                alt="Bulldozer with building in the background - CRUXSTOR Equipment"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CRUXTOR Philosophy Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-yellow-400 italic">
                European Process Thinking.<br />
                Indian Engineering Execution.
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  We develop advanced material processing systems focused on separation accuracy, 
                  consistent output, and operational efficiency. Our technology collaboration brings 
                  European know-how into robust, serviceable systems manufactured in India.
                </p>
                
                <p>
                  We focus where conventional crushing ends — screening intelligence and process control. 
                  Our engineering approach prioritises precision separation over brute force, ensuring 
                  consistent particle size distribution and material quality that meets the most demanding 
                  specifications.
                </p>
                
                <p>
                  Every system is designed with operational reality in mind: ease of maintenance, energy 
                  efficiency, and the ability to adapt to varying input materials whilst maintaining output 
                  quality. This is process engineering, not just equipment supply.
                </p>
              </div>
            </div>

            {/* Right Side - Key Features */}
            <div className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Waves className="text-slate-900" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Multi-Frequency Technology</h3>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplets className="text-slate-900" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Dry & Wet Systems</h3>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Box className="text-slate-900" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Single-Chassis Design</h3>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bolt className="text-slate-900" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Energy Efficient</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Engineering Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - Text and Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Text Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-yellow-400">
                Looking for Clean Material, Controlled Gradation, and Reliable Output?
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
                <p>
                  CRUXTOR engineers design solutions by first understanding your material characteristics, 
                  output requirements, and operational constraints. We provide engineering consultation, 
                  equipment supply, and technical support for new sand plants, upgrades, and separation 
                  challenges.
                </p>
                
                <p>
                  Process engineering determines profitability. Let's discuss how we can help you find 
                  the right solution for your specific needs.
                </p>
              </div>

              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 italic">
                Precision Separation. Intelligent Processing.
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=1200&fit=crop"
                alt="Engineer reviewing blueprints and equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-6xl sm:text-7xl font-bold text-white mb-4">90%</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Separation Efficiency</h3>
              <p className="text-gray-400 text-lg">
                Typical partition curve performance across size fractions
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl sm:text-7xl font-bold text-white mb-4">30%</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Energy Reduction</h3>
              <p className="text-gray-400 text-lg">
                Compared to conventional multi-stage screening systems
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl sm:text-7xl font-bold text-white mb-4">{"24/7"}</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Technical Support</h3>
              <p className="text-gray-400 text-lg">
                Engineering assistance available for process optimisation
              </p>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold rounded-lg transition-colors duration-200 text-lg"
            >
              <FileText className="mr-2" size={24} />
              Contact Us for Process Study
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-yellow-400 hover:bg-yellow-400 hover:text-slate-900 text-yellow-400 font-semibold rounded-lg transition-colors duration-200 text-lg"
            >
              <Download className="mr-2" size={24} />
              Download Technical Brochures
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose CRUXSTOR?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-leading solutions backed by decades of engineering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Durable & Reliable</h3>
              <p className="text-gray-600">
                Built to withstand the toughest industrial environments with premium materials and engineering.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Cog className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Precision Engineering</h3>
              <p className="text-gray-600">
                State-of-the-art manufacturing processes ensuring optimal performance and accuracy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">High Efficiency</h3>
              <p className="text-gray-600">
                Maximize productivity with energy-efficient systems designed for optimal throughput.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Comprehensive technical support and maintenance services from installation to ongoing operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Product Line
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your screening and processing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
                  alt="Vibrating Screens"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Vibrating Screens</h3>
                <p className="text-gray-600 mb-4">
                  High-capacity vibrating screens for efficient material separation and sizing across various industries.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-blue-600 mr-2" size={18} />
                    Multi-deck configurations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-blue-600 mr-2" size={18} />
                    Custom mesh sizes
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-blue-600 mr-2" size={18} />
                    Heavy-duty construction
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?w=800&h=600&fit=crop"
                  alt="Sand Processing Systems"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Sand Processing Systems</h3>
                <p className="text-gray-600 mb-4">
                  Complete sand processing solutions including washing, dewatering, and classification systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-blue-600 mr-2" size={18} />
                    Water recycling systems
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-blue-600 mr-2" size={18} />
                    Automated controls
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-blue-600 mr-2" size={18} />
                    Energy efficient design
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621f6b7f?w=800&h=600&fit=crop"
                  alt="Custom Solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Custom Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Tailored screening and processing systems designed to meet your specific operational requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-blue-600 mr-2" size={18} />
                    Engineering consultation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-blue-600 mr-2" size={18} />
                    Custom fabrication
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="text-blue-600 mr-2" size={18} />
                    Turnkey installation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Explore All Products
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Equipment in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See our screening and sand processing systems operating in industrial environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=800&fit=crop"
                alt="Vibrating Screen Equipment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?w=600&h=800&fit=crop"
                alt="Sand Washing Plant"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621f6b7f?w=600&h=800&fit=crop"
                alt="Dewatering System"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=800&fit=crop"
                alt="Screening Plant Operations"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Upgrade Your Processing Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our team today for a free consultation and custom quote
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

