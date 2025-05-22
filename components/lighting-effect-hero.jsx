'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const JointVentureAnimation = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const animationRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [allLinesConnected, setAllLinesConnected] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Company data
  const companies = [
    { 
      id: 1, 
      name: 'Stallion Structure', 
      description: 'Structural engineering and design excellence',
      logo: '/static/stallion_structures.png'
    },
    { 
      id: 2, 
      name: 'Shree Guru Infracon', 
      description: 'Infrastructure development specialists',
      logo: '/static/shree_guru_company.png'
    },
    { 
      id: 3, 
      name: 'KeraTech', 
      description: 'Innovative construction technology',
      logo: '/static/kera_tech.png'
    },
  ];

  const jointVenture = {
    name: 'FGG Projects',
    description: 'Joint venture excellence in construction',
    logo: '/static/FGG-Logo.jpg'
  };

  // Check for mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through the section
      let progress = 0;
      
      if (containerTop <= windowHeight * 0.8 && containerTop + containerHeight >= windowHeight * 0.2) {
        // Map the scroll position to a progress value between 0 and 1
        progress = 1 - ((containerTop - windowHeight * 0.2) / (containerHeight + windowHeight * 0.6));
        progress = Math.max(0, Math.min(1, progress));
      } else if (containerTop + containerHeight < windowHeight * 0.2) {
        progress = 1; // Past the section
      }
      
      setScrollProgress(progress);
      
      // Check if all lines are connected
      if (progress >= 0.9 && !allLinesConnected) {
        setAllLinesConnected(true);
      } else if (progress < 0.9 && allLinesConnected) {
        setAllLinesConnected(false);
      }
      
      // Update line paths
      updateLinePaths(progress);
    };

    const updateLinePaths = (progress) => {
      if (!svgRef.current) return;
      
      const lines = [
        svgRef.current.querySelector('#line-1'),
        svgRef.current.querySelector('#line-2'),
        svgRef.current.querySelector('#line-3')
      ];
      
      lines.forEach((line, index) => {
        if (!line) return;
        
        const length = line.getTotalLength();
        if (length) {
          // Set the stroke-dasharray to the total length
          line.style.strokeDasharray = `${length}`;
          
          // Calculate the stroke-dashoffset based on progress
          // Stagger the start of each line animation
          const lineProgress = Math.max(0, Math.min(1, (progress * 3) - index * 0.5));
          line.style.strokeDashoffset = length * (1 - lineProgress);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    // Set up ResizeObserver to handle layout changes
    const resizeObserver = new ResizeObserver(() => {
      calculatePaths();
      handleScroll();
    });
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
    };
  }, [scrollProgress, allLinesConnected]);

  // Animate dots - one way only (from companies to joint venture)
  useEffect(() => {
    const animateDots = () => {
      if (!svgRef.current) return;
      
      const lines = [
        svgRef.current.querySelector('#line-1'),
        svgRef.current.querySelector('#line-2'),
        svgRef.current.querySelector('#line-3')
      ];
      
      const dots = [
        svgRef.current.querySelector('#dot-1'),
        svgRef.current.querySelector('#dot-2'),
        svgRef.current.querySelector('#dot-3')
      ];
      
      const now = Date.now();
      
      lines.forEach((line, index) => {
        if (!line || !dots[index]) return;
        
        const length = line.getTotalLength();
        if (length) {
          // Only animate if the line is at least partially visible
          const lineProgress = Math.max(0, Math.min(1, (scrollProgress * 3) - index * 0.5));
          
          if (lineProgress > 0) {
            // Make dot visible once line starts drawing
            dots[index].style.opacity = 1;
            
            // Calculate position along the path
            // Use time-based animation for smooth continuous movement
            // The dot will move from top to bottom (company to joint venture) on mobile
            // or left to right on desktop
            const speed = 3000; // Time in ms to travel the full path
            const dotProgress = ((now % speed) / speed) * lineProgress;
            const point = line.getPointAtLength(Math.min(dotProgress * length, length - 1));
            
            dots[index].setAttribute('cx', point.x);
            dots[index].setAttribute('cy', point.y);
          } else {
            dots[index].style.opacity = 0;
          }
        }
      });
      
      animationRef.current = requestAnimationFrame(animateDots);
    };
    
    animationRef.current = requestAnimationFrame(animateDots);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scrollProgress]);

  // Calculate SVG paths
  const calculatePaths = () => {
    if (!svgRef.current || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const leftCards = document.querySelectorAll('.company-card');
    const rightCard = document.querySelector('.joint-venture-card');
    
    if (!rightCard || leftCards.length !== 3) return;
    
    const rightCardRect = rightCard.getBoundingClientRect();
    
    // Different path calculation for mobile and desktop
    if (isMobile) {
      // For mobile: Connect from bottom of horizontally arranged cards to top of joint venture card
      leftCards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const startX = cardRect.left + cardRect.width / 2 - containerRect.left;
        const startY = cardRect.bottom - containerRect.top;
        
        const rightX = rightCardRect.left + ((index + 1) * rightCardRect.width / 4) - containerRect.left;
        const rightY = rightCardRect.top - containerRect.top;
        
        const line = svgRef.current.querySelector(`#line-${index + 1}`);
        if (!line) return;
        
        // Create a path that goes vertically down, then curves to the joint venture card
        const midY = startY + (rightY - startY) * 0.5;
        
        const path = `M ${startX},${startY} 
                      L ${startX},${midY} 
                      Q ${startX},${rightY - 20} ${rightX},${rightY}`;
        
        line.setAttribute('d', path);
        
        // Initialize the line with full dashoffset (invisible)
        const length = line.getTotalLength();
        line.style.strokeDasharray = `${length}`;
        line.style.strokeDashoffset = `${length}`;
      });
    } else {
      // For desktop: Connect from right side of cards to left side of joint venture card with curves
      const rightX = rightCardRect.left - containerRect.left;
      const rightY = rightCardRect.top + rightCardRect.height / 2 - containerRect.top;
      
      leftCards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const startX = cardRect.right - containerRect.left;
        const startY = cardRect.top + cardRect.height / 2 - containerRect.top;
        
        const line = svgRef.current.querySelector(`#line-${index + 1}`);
        if (!line) return;
        
        // Create path with a simple curve
        const path = `M ${startX},${startY} Q ${(startX + rightX) / 2},${startY} ${rightX},${rightY}`;
        
        line.setAttribute('d', path);
        
        // Initialize the line with full dashoffset (invisible)
        const length = line.getTotalLength();
        line.style.strokeDasharray = `${length}`;
        line.style.strokeDashoffset = `${length}`;
      });
    }
  };

  // Calculate SVG paths when component mounts and on window resize
  useEffect(() => {
    // Calculate paths after a short delay to ensure DOM is ready
    const timer = setTimeout(calculatePaths, 100);
    
    window.addEventListener('resize', calculatePaths);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculatePaths);
    };
  }, [isMobile]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full bg-white py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">A Joint Venture Between</h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Bringing together expertise and experience to deliver exceptional construction projects
        </p> */}
        
        {/* Desktop: Vertical cards on left, Joint venture on right */}
        {/* Mobile: Horizontal cards on top, Joint venture below */}
        <div className={`${isMobile ? 'flex-col' : 'flex-col md:flex-row'} flex justify-between items-center`}>
          {/* Company cards */}
          <div className={`${isMobile ? 'flex flex-row justify-between mb-16' : 'w-full md:w-5/12 space-y-8 mb-16 md:mb-0'}`}>
            {companies.map((company, index) => (
              <div 
                key={company.id}
                className={`company-card relative bg-white rounded-lg p-4 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg ${
                  isMobile ? 'w-[30%]' : 'w-full'
                }`}
                id={`card-${index + 1}`}
              >
                <div className={`${isMobile ? 'flex-col items-center text-center' : 'flex items-center'}`}>
                  <div className={`${isMobile ? 'mx-auto mb-2' : 'mr-3'} relative w-16 h-16 rounded-lg overflow-hidden bg-gray-50`}>
                    <Image 
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
                    <p className={`text-xs text-gray-600 ${isMobile ? 'hidden' : ''}`}>{company.description}</p>
                  </div>
                </div>
                {/* <div className="mt-3 text-center">
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                    Learn more →
                  </button>
                </div> */}
              </div>
            ))}
          </div>
          
          {/* SVG lines container */}
          <div className="absolute inset-0 pointer-events-none">
            <svg ref={svgRef} className="w-full h-full" preserveAspectRatio="none">
              {/* Line from first card to joint venture card */}
              <path 
                d="M 0,0 C 0,0 0,0 0,0" 
                id="line-1"
                className="transition-all duration-1000 ease-in-out"
                stroke="url(#blue-orange-gradient)" 
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Line from second card to joint venture card */}
              <path 
                d="M 0,0 C 0,0 0,0 0,0" 
                id="line-2"
                className="transition-all duration-1000 ease-in-out"
                stroke="url(#blue-orange-gradient)" 
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Line from third card to joint venture card */}
              <path 
                d="M 0,0 C 0,0 0,0 0,0" 
                id="line-3"
                className="transition-all duration-1000 ease-in-out"
                stroke="url(#blue-orange-gradient)" 
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Animated dots */}
              <circle 
                id="dot-1" 
                cx="0" 
                cy="0" 
                r="5" 
                fill="url(#blue-orange-gradient)" 
                opacity="0"
                className="dot-animation"
              />
              
              <circle 
                id="dot-2" 
                cx="0" 
                cy="0" 
                r="5" 
                fill="url(#blue-orange-gradient)" 
                opacity="0"
                className="dot-animation"
              />
              
              <circle 
                id="dot-3" 
                cx="0" 
                cy="0" 
                r="5" 
                fill="url(#blue-orange-gradient)" 
                opacity="0"
                className="dot-animation"
              />
              
              {/* Gradient definition */}
              <defs>
                <linearGradient id="blue-orange-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" /> {/* blue-500 */}
                  <stop offset="100%" stopColor="#F97316" /> {/* orange-500 */}
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Joint venture card */}
          <div className={`${isMobile ? 'w-full' : 'w-full md:w-5/12'}`}>
            <div className="md:mt-16">
              <div 
                className={`joint-venture-card relative bg-white rounded-lg p-6 shadow-md transition-all duration-1000 ${
                  allLinesConnected ? 'border-gradient shadow-glow' : 'border border-gray-100'
                }`}
                id="right-card"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-50 mr-4">
                    <Image 
                      src={jointVenture.logo}
                      alt={jointVenture.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{jointVenture.name}</h3>
                    <p className="text-sm text-gray-600">{jointVenture.description}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm">
                  Our joint venture combines decades of expertise in structural engineering, 
                  infrastructure development, and construction technology to deliver 
                  exceptional projects that exceed client expectations.
                </p>
                
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm">
                  View Projects
                </button>
                
                <div 
                  className={`absolute inset-0 rounded-lg transition-opacity duration-1000 ${
                    allLinesConnected ? 'opacity-100' : 'opacity-0'
                  }`} 
                  id="glow-effect"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .border-gradient {
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
        }
        
        .border-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: -2px;
          border-radius: inherit;
          background: linear-gradient(to right, #3B82F6, #F97316);
          z-index: -1;
        }
        
        .shadow-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3), 0 0 30px rgba(249, 115, 22, 0.2);
        }
        
        #glow-effect {
          background: linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(249, 115, 22, 0.05));
          pointer-events: none;
          border-radius: 0.5rem;
        }
        
        .dot-animation {
          filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.8));
          transition: opacity 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default JointVentureAnimation;
