import React from 'react'
import Link from 'next/link'
import { Building2, Phone, Wrench, Users, FileText, Shield } from 'lucide-react'
import Image from 'next/image'
const SiteFooter = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/companies", label: "Our Partners" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/teams", label: "Our Team" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-blue-900 text-gray-300">
      <div className="max-w-screen-xl px-4 sm:px-6 mx-auto">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 py-12">
          {/* <div className="p-5">
            
            <h3 className="font-bold text-xl text-white mb-4">FGG Projects</h3>
            <p className="text-sm text-gray-400">
              Building excellence through innovation and dedication. Your trusted partner in construction and development.
            </p>
          </div> */}



          <div className="flex flex-col items-center justify-center py-8 px-4 ">
                  <div className="relative h-16 w-16 mb-3">
                    <Image
                      src="/static/FGG Logo cc.svg"
                      alt="Company Logo"
                      fill
                      // className="object-contain rounded-full shadow-sm"
                      priority
                    />
                  </div>
                  <h2 className="text-xl font-bold text-white text-center">FGG Projects</h2>
                  
                  <p className="text-sm mt-1 text-center">Building excellence through innovation and dedication. Your trusted partner in construction and development.
                  </p>
                </div>
          
          <div className="p-5">
            <div className="text-sm uppercase text-blue-300 font-bold mb-4">Quick Links</div>
            <div className="space-y-3">
              {navItems.map(({ href, label }) => (
                <Link 
                  key={href}
                  href={href}
                  className="block text-gray-400 hover:text-blue-300 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-5">
            <div className="text-sm uppercase text-blue-300 font-bold mb-4">Legal</div>
            <div className="space-y-3">
              <Link href="/terms" className="block text-gray-400 hover:text-blue-300 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="block text-gray-400 hover:text-blue-300 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="p-5">
            <div className="text-sm uppercase text-blue-300 font-bold mb-4">Contact us</div>
            <div className="space-y-3">
              <p className="text-gray-400">
                224-225, Second Floor,<br />
                Vihav Excellus,<br />
                Vasna Bhayli Main Road,<br />
                Vadodara - 391410
              </p>
              <a href="tel:+918153825000" className="block text-gray-400 hover:text-blue-300 transition-colors">
                +91 81538 25000
              </a>
              <a href="mailto:contact@fggprojects.com" className="block text-gray-400 hover:text-blue-300 transition-colors">
                contact@fggprojects.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} FGG Projects. All rights reserved.
            </div>

            <div className="text-sm text-gray-400">
              Made with ❤️ by<a href='https://www.sayajiinfotech.com/' target='_blank' className='hover:text-white'> Sayaji Infotech</a>.
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter