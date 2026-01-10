import { FaGraduationCap } from "react-icons/fa";
import Title from "../shared/Titile/Title";

const Education = (): React.ReactElement => {
  return (
    <section
      id="education"
      className="scroll-mt-16 bg-white py-16 md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <Title className="mb-3">
            Education
          </Title>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="border border-gray-200 p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <FaGraduationCap className="text-2xl text-gray-900" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    B.Sc. in Computer Science & Engineering
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Pundra University of Science & Technology
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span>Bogura, Bangladesh</span>
                    <span className="hidden md:inline">•</span>
                    <span>2019 – 2023</span>
                  </div>
                </div>

                {/* Key Highlights */}
                {/* <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-900 mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">
                        Graduated with focus on software engineering and modern web technologies
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-900 mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">
                        Coursework included data structures, algorithms, database systems, and software architecture
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-900 mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">
                        Participated in programming competitions and technical workshops
                      </span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>

            {/* Location Section */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider">
                  University Location
                </h4>
                <span className="text-xs text-gray-500">Bogura, Bangladesh</span>
              </div>
              <div className="overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.286540626344!2d89.3490259!3d24.922306699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcff6dad46983f%3A0x32606b40b622acdb!2sPundra%20University%20of%20Science%20%26%20Technology%20(PUB)!5e0!3m2!1sen!2sbd!4v1744379913806!5m2!1sen!2sbd"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pundra University Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;