"use client"

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary mb-3">Legal</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <div className="w-[50%] h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-8 ">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className=" leading-relaxed">
                We collect information that you provide directly to us, including but not limited to your name, email address, phone number, and any other information you choose to provide when contacting us or using our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className=" leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations. We may also use your information to send you updates about our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className=" leading-relaxed">
                We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, subject to confidentiality obligations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className=" leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className=" leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your information. To exercise these rights, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
              <p className=" leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Changes to This Policy</h2>
              <p className=" leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
              <p className=" leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: contact@fggprojects.com
                <br />
                Phone: +91 81538 25000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 