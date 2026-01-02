import './About.css'
function CircularImage() {
  const size = 350;
  const center = size / 2;      // 150
  const imageRadius = 150;   
const textRadius = 160;  
  const pathId = `circPath-${imageRadius}-${textRadius}`;
  const text = `Developer • Singer • Writer • Astrologer`;
  const pathD = `M ${center + textRadius} ${center}
                 A ${textRadius} ${textRadius} 0 1 1 ${center - textRadius} ${center}
                 A ${textRadius} ${textRadius} 0 1 1 ${center + textRadius} ${center}`;

  return (
    <div className="flex items-center justify-center mt-20">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="block"
        aria-hidden={false}
        role="img"
      >
        <defs>
          <clipPath id={`clip-${imageRadius}`}>
            <circle cx={center} cy={center} r={imageRadius} />
          </clipPath>

          <path id={pathId} d={pathD} fill="none" />
        </defs>
        <image
          href="/avni.jpg"
          x={center - imageRadius}
          y={center - imageRadius}
          width={imageRadius * 2}
          height={imageRadius * 2}
          clipPath={`url(#clip-${imageRadius})`}
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label="Profile image"
        />
        <circle
          cx={center}
          cy={center}
          r={imageRadius}
          fill="none"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth={2}
        />

        <g className="anim-style">
          <text
            fontSize={18}
            fontFamily="sans-serif"
            fill="black"
            style={{ dominantBaseline: "middle", textRendering: "optimizeLegibility" }}
          >
            <textPath href={`#${pathId}`} xlinkHref={`#${pathId}`} startOffset="50%" textAnchor="middle">
              {text}
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
}

export default CircularImage;
