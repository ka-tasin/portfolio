import React from "react";
import Title from "../shared/Titile/Title";
import { FiMail, FiMapPin, FiLinkedin, FiSend } from "react-icons/fi";

const Contact = (): React.ReactElement => {
  return (
    <section id="contact" className="scroll-mt-16 bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <Title className="mb-3">
            Get In Touch
          </Title>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="border border-gray-200 p-8">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Contact Information */}
              <div className="lg:w-1/2">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                        <FiMail className="text-gray-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Email</p>
                        <a
                          href="mailto:kausar.ahmad.tasin01@gmail.com"
                          className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
                        >
                          kausar.ahmad.tasin01@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                        <FiLinkedin className="text-gray-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">LinkedIn</p>
                        <a
                          href="https://www.linkedin.com/in/kausar-ahmad-tasin/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 font-medium hover:text-gray-700 transition-colors"
                        >
                          Kausar Ahmad Tasin
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                        <FiMapPin className="text-gray-700" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Location</p>
                        <p className="text-gray-900 font-medium">Bogura, Bangladesh</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-1/2">
                <form
                  action="https://formsubmit.co/kausar.ahmad.tasin01@gmail.com"
                  method="POST"
                  className="space-y-5"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="hidden"
                    name="_redirect"
                    value="https://kausarahmadtasin-portfolio.vercel.app/thankYou"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 focus:outline-none focus:border-gray-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 focus:outline-none focus:border-gray-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 focus:outline-none focus:border-gray-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 focus:outline-none focus:border-gray-700 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <FiSend />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;