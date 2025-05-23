"use client"

export default function TermsPage() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary mb-3">Legal</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 ">Terms & Conditions</h1>
          <div className="w-[50%] h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-8 ">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold  mb-4">1. Acceptance of Terms</h2>
              <p className=" leading-relaxed">
                By accessing and using FGG Projects' website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold  mb-4">2. Use of Services</h2>
              <p className=" leading-relaxed">
                Our services are provided for legitimate business purposes only. You agree to use our services in compliance with all applicable laws and regulations. Any unauthorized use of our services is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold  mb-4">3. Intellectual Property</h2>
              <p className=" leading-relaxed">
                All content, including but not limited to text, graphics, logos, and images on our website, is the property of FGG Projects and is protected by intellectual property laws. Unauthorized use of any content is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold  mb-4">4. Privacy Policy</h2>
              <p className=" leading-relaxed">
                Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold  mb-4">5. Limitation of Liability</h2>
              <p className=" leading-relaxed">
                FGG Projects shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold  mb-4">6. Changes to Terms</h2>
              <p className=" leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on our website. Your continued use of our services after such modifications constitutes your acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold  mb-4">7. Contact Information</h2>
              <p className=" leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
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