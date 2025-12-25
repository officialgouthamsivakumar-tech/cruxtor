import { Award, Users, TrendingUp, Target, Clock, Globe } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "35+", icon: Clock },
    { label: "Projects Completed", value: "500+", icon: Target },
    { label: "Countries Served", value: "45+", icon: Globe },
    { label: "Expert Engineers", value: "50+", icon: Users },
  ];

  const values = [
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in manufacturing and quality control, ensuring every system meets rigorous performance criteria.",
      icon: Award,
    },
    {
      title: "Innovation",
      description: "Continuous research and development drives our product evolution, incorporating the latest technologies and best practices.",
      icon: TrendingUp,
    },
    {
      title: "Customer Focus",
      description: "Your success is our priority. We work closely with clients to understand their needs and deliver solutions that exceed expectations.",
      icon: Users,
    },
    {
      title: "Reliability",
      description: "Built to last, our systems are engineered for durability and minimal downtime, maximizing your operational efficiency.",
      icon: Target,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Leading the industry in advanced screening and sand processing solutions 
            with innovation, quality, and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 1989, CRUXSTOR began as a 
                  small engineering firm with a big vision: to revolutionize material processing 
                  through innovative design and superior craftsmanship.
                </p>
                <p>
                  Over the past three decades, we have grown into a recognized leader in the 
                  industrial screening and sand processing industry. Our commitment to quality, 
                  innovation, and customer satisfaction has driven us to continuously improve our 
                  products and expand our capabilities.
                </p>
                <p>
                  Today, we serve clients across 45+ countries, from small local operations to 
                  large multinational corporations. Our comprehensive product line and expert 
                  engineering services help businesses maximize efficiency, reduce operational costs, 
                  and achieve their production goals.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                To provide world-class screening and sand processing solutions that empower 
                our clients to achieve operational excellence while maintaining the highest 
                standards of quality, safety, and environmental responsibility.
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be the global leader in advanced material processing technologies, 
                recognized for innovation, reliability, and exceptional customer value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-blue-600" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Design & Engineering</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom system design</li>
                <li>• CAD modeling and simulation</li>
                <li>• Process optimization</li>
                <li>• Technical consulting</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Manufacturing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• State-of-the-art facilities</li>
                <li>• Quality assurance programs</li>
                <li>• Custom fabrication</li>
                <li>• Component sourcing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Service & Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Installation services</li>
                <li>• Maintenance programs</li>
                <li>• Training and documentation</li>
                <li>• 24/7 technical support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

