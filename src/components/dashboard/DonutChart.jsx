import React, { useState, useEffect } from 'react';

const DonutChart = ({ 
  data, 
  size = 200, 
  strokeWidth = 20, 
  centerText, 
  showAnimation = true,
  className = ""
}) => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [hoveredSegment, setHoveredSegment] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Responsive size calculations
  const responsiveSize = isMobile ? Math.min(size * 0.8, 160) : size;
  const responsiveStrokeWidth = isMobile ? Math.max(strokeWidth * 0.7, 15) : strokeWidth;

  // Calculate the radius and circumference with responsive values
  const radius = (responsiveSize / 2) - responsiveStrokeWidth;
  const circumference = 2 * Math.PI * radius;
  const center = responsiveSize / 2;

  // Normalize the data to ensure percentages add up to 100
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  const normalizedData = data.map(item => ({
    ...item,
    percentage: (item.value / totalValue) * 100
  }));

  // Animation effect
  useEffect(() => {
    if (showAnimation) {
      const timer = setTimeout(() => {
        setAnimationProgress(1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setAnimationProgress(1);
    }
  }, [showAnimation]);

  // Generate path data for each segment
  const generateSegments = () => {
    let cumulativePercentage = 0;
    
    return normalizedData.map((item, index) => {
      const segmentPercentage = item.percentage * animationProgress;
      const startAngle = (cumulativePercentage / 100) * 360 - 90; // Start from top
      const endAngle = ((cumulativePercentage + segmentPercentage) / 100) * 360 - 90;
      
      cumulativePercentage += item.percentage;
      
      const startAngleRad = (startAngle * Math.PI) / 180;
      const endAngleRad = (endAngle * Math.PI) / 180;
      
      const x1 = center + radius * Math.cos(startAngleRad);
      const y1 = center + radius * Math.sin(startAngleRad);
      const x2 = center + radius * Math.cos(endAngleRad);
      const y2 = center + radius * Math.sin(endAngleRad);
      
      const largeArcFlag = segmentPercentage > 50 ? 1 : 0;
      
      const pathData = segmentPercentage === 0 ? '' : 
        `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
      
      return {
        ...item,
        pathData,
        isHovered: hoveredSegment === index,
        index
      };
    });
  };

  const segments = generateSegments();

  return (
    <div className={`relative inline-block ${className}`}>
      <svg 
        width={responsiveSize} 
        height={responsiveSize} 
        viewBox={`0 0 ${responsiveSize} ${responsiveSize}`}
        className="drop-shadow-sm w-full h-auto max-w-full"
        style={{ maxWidth: isMobile ? '160px' : `${size}px` }}
      >
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth={responsiveStrokeWidth}
          className="transition-all duration-300"
        />
        
        {/* Data segments */}
        {segments.map((segment, index) => (
          <g key={index}>
            {/* Main segment */}
            <path
              d={segment.pathData}
              fill={segment.color}
              className={`
                transition-all duration-500 ease-out cursor-pointer
                ${segment.isHovered ? 'opacity-90 drop-shadow-md' : 'opacity-100'}
              `}
              onMouseEnter={() => !isMobile && setHoveredSegment(index)}
              onMouseLeave={() => !isMobile && setHoveredSegment(null)}
              onTouchStart={() => isMobile && setHoveredSegment(index)}
              onTouchEnd={() => isMobile && setTimeout(() => setHoveredSegment(null), 2000)}
              style={{
                transformOrigin: `${center}px ${center}px`,
                transform: segment.isHovered ? (isMobile ? 'scale(1.05)' : 'scale(1.02)') : 'scale(1)'
              }}
            />
            
            {/* Hover highlight ring */}
            {segment.isHovered && (
              <circle
                cx={center}
                cy={center}
                r={radius + responsiveStrokeWidth / 4}
                fill="none"
                stroke={segment.color}
                strokeWidth={isMobile ? "3" : "2"}
                opacity={isMobile ? "0.4" : "0.3"}
                className="animate-pulse"
              />
            )}
          </g>
        ))}
        
        {/* Inner circle for donut effect */}
        <circle
          cx={center}
          cy={center}
          r={radius - responsiveStrokeWidth}
          fill="white"
          className="drop-shadow-sm"
        />
      </svg>
      
      {/* Center text */}
      {centerText && (
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            width: (radius - responsiveStrokeWidth) * 2,
            height: (radius - responsiveStrokeWidth) * 2
          }}
        >
          <div className="text-center px-2">
            <div className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-gray-800 leading-tight`}>
              {centerText.main}
            </div>
            {centerText.sub && (
              <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-500 mt-1 ${isMobile ? 'hidden' : ''}`}>
                {centerText.sub}
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Tooltip for hovered segment */}
      {hoveredSegment !== null && (
        <div className={`
          absolute z-10 pointer-events-none
          ${isMobile 
            ? 'bottom-full left-1/2 transform -translate-x-1/2 mb-2' 
            : 'top-0 left-full ml-4'
          }
          bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg
        `}>
          <div className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>
            {segments[hoveredSegment].name}
          </div>
          <div className={`${isMobile ? 'text-xs' : 'text-xs'} text-gray-300`}>
            {segments[hoveredSegment].value.toLocaleString()} ({segments[hoveredSegment].percentage.toFixed(1)}%)
          </div>
          {/* Tooltip arrow */}
          <div className={`
            absolute w-2 h-2 bg-gray-800 rotate-45
            ${isMobile 
              ? 'top-full left-1/2 transform -translate-x-1/2 -mt-1' 
              : 'top-1/2 -left-1 transform -translate-y-1/2'
            }
          `}></div>
        </div>
      )}
    </div>
  );
};

export default DonutChart;