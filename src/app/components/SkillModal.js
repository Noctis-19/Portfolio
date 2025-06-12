
export default function SkillModal({ name, percentage }) {
    const r = 50;
    const startColor = "#3F1891";
    const endColor = "#15c1ff";
    const innerCircleWidth = 12;

    return (
        <div className="flex flex-col items-center">
            <svg width="170" height="170" viewBox="0 0 120 120">
                <defs>
                    <linearGradient id="circle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={startColor} />
                        <stop offset="100%" stopColor={endColor} />
                    </linearGradient>
                </defs>

                <circle 
                    cx="60" cy="60" r={r}
                    stroke="url(#circle-grad)"
                    strokeWidth={innerCircleWidth}
                    fill="none"
                    strokeDasharray={2 * Math.PI * r} /* "339.292" 2 * pi * r */
                    strokeDashoffset={(1 - (percentage/100)) * 2 * Math.PI * r} /* "101.787" (1 - 0.7) * 339.292 pour 70% */
                    strokeLinecap="round"
                    transform="rotate(30 60 60)"
                />

                <text className="cursor-default" x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="24" fill="#FFFFFF">{percentage}%</text>
            </svg>
            <h5>{name}</h5>
        </div>
    )
}