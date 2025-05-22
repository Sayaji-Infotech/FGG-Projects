"use client"

import { Phone, Mail, Globe, Send, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mldbkbko");

  if (state.succeeded) {
    return (
      <section className="py-20">
        <div className="container mx-auto text-center px-4 md:px-6">
          <h1 className="text-4xl font-bold mb-4 text-green-600">Thank you!</h1>
          <p className="text-lg text-gray-700">Your message has been successfully sent. We'll get back to you shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary mb-3">Contact Us</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Get in Touch</h1>
          <div className="w-[50%] h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Contact Details */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-orange-400 rounded-t-xl -mt-8 -mx-8 mb-8"></div>

            <h2 className="text-2xl font-bold text-gray-800 mb-8">Contact Details</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-600 text-sm">Phone Number</h3>
                  <a href="tel:+918153825000" className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors">
                    +91 81538 25000
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-50 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-gray-600 text-sm">Email Address</h3>
                  <a href="mailto:contact@fggprojects.com" className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors">
                    contact@fggprojects.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-50 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-gray-600 text-sm">Website</h3>
                  <a href="https://www.fggprojects.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors">
                    www.fggprojects.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 mt-6">
                <div className="bg-orange-50 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-gray-600 text-sm">Office Location</h3>
                  <p className="text-lg font-semibold text-gray-800">
                    224-225, Second Floor,<br />
                    Vihav Excellus,<br />
                    Vasna Bhayli Main Road,<br />
                    Vadodara - 391410
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-orange-400 rounded-t-xl -mt-8 -mx-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  placeholder="Enter your Name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  placeholder="Enter your Email"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  placeholder="How can we help you?"
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-orange-400 rounded-t-xl -mt-8 -mx-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Location</h2>
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6339288404333!2d73.1325396751181!3d22.29185267969267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc73d35659cbf%3A0xb61ec337692ab303!2sVihav%20excules!5e0!3m2!1sen!2sin!4v1747918676643!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
