import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Filter, Droplets, Settings, Wrench } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Vibrating Screens",
      description: "High-performance vibrating screens for precise material separation and sizing. Available in various configurations and screen sizes.",
      icon: Filter,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      features: [
        "Linear and circular motion options",
        "Multiple deck configurations",
        "Heavy-duty construction",
        "Low maintenance design",
        "Customizable screen mesh",
        "High throughput capacity"
      ],
      applications: ["Mining", "Aggregates", "Recycling", "Food Processing"]
    },
    {
      id: 2,
      title: "Sand Washing Systems",
      description: "Complete sand washing solutions with integrated water recycling for efficient and environmentally responsible operations.",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?w=800&h=600&fit=crop",
      features: [
        "Integrated water recycling",
        "Automated control systems",
        "Multi-stage washing process",
        "Dewatering screens included",
        "Low water consumption",
        "High recovery rates"
      ],
      applications: ["Construction", "Concrete Production", "Glass Manufacturing", "Foundry"]
    },
    {
      id: 3,
      title: "Dewatering Screens",
      description: "Advanced dewatering screens for efficient water removal from sand and aggregate materials, reducing moisture content significantly.",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621f6b7f?w=800&h=600&fit=crop",
      features: [
        "High-capacity dewatering",
        "Reduced moisture content",
        "Durable polyurethane panels",
        "Minimal maintenance required",
        "Customizable configurations",
        "Energy efficient operation"
      ],
      applications: ["Sand Processing", "Aggregate Production", "Coal Preparation", "Mineral Processing"]
    },
    {
      id: 4,
      title: "Screening Plants",
      description: "Complete portable and stationary screening plants designed for maximum efficiency and versatility in material processing.",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      features: [
        "Portable and stationary options",
        "Multiple screen deck options",
        "Integrated conveyors",
        "Fuel-efficient engines",
        "Quick setup and teardown",
        "Remote control capabilities"
      ],
      applications: ["Quarry Operations", "Construction Sites", "Mining Projects", "Recycling Facilities"]
    },
    {
      id: 5,
      title: "Custom Screening Solutions",
      description: "Tailored screening systems designed to meet your specific requirements, from design to installation and maintenance.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621f6b7f?w=800&h=600&fit=crop",
      features: [
        "Custom engineering design",
        "Material-specific optimization",
        "Turnkey installation",
        "Training and support",
        "Ongoing maintenance",
        "Performance guarantees"
      ],
      applications: ["Specialized Processing", "Unique Material Handling", "High-Volume Operations", "Regulated Industries"]
    },
    {
      id: 6,
      title: "Control & Automation Systems",
      description: "Advanced control systems and automation solutions for optimizing your screening and processing operations.",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?w=800&h=600&fit=crop",
      features: [
        "PLC-based control systems",
        "Touchscreen interfaces",
        "Remote monitoring",
        "Data logging and analytics",
        "Alarm and notification systems",
        "Integration capabilities"
      ],
      applications: ["Automated Plants", "Remote Operations", "Quality Control", "Process Optimization"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop"
              alt="Industrial Equipment Background"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive range of advanced screening and sand processing systems 
            engineered for reliability, efficiency, and performance.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={product.id}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64 w-full bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-blue-600" size={28} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">
                          {product.title}
                        </h2>
                        <p className="text-gray-600">{product.description}</p>
                      </div>
                    </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <CheckCircle className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <h3 className="text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">
                      Applications:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Standard Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All our systems are built to industry standards with options for customization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Construction</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Heavy-duty steel frames</li>
                <li>• Corrosion-resistant coatings</li>
                <li>• Premium-grade components</li>
                <li>• Weatherproof enclosures</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Performance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• High throughput capacity</li>
                <li>• Efficient material separation</li>
                <li>• Low energy consumption</li>
                <li>• Minimal maintenance downtime</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 24/7 technical support</li>
                <li>• Comprehensive warranties</li>
                <li>• Spare parts availability</li>
                <li>• On-site service options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our engineering team can design and build a system tailored to your specific requirements
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Request a Quote
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

