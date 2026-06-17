interface LogoMarkProps {
  size?: number
  id?: string
}

export default function LogoMark({ size = 27, id = 'logo' }: LogoMarkProps) {
  const gradientId = `brandGrad-${id}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <polygon points="50,6 94,80 6,80" fill={`url(#${gradientId})`} />
      <polygon points="50,36 68,66 32,66" fill="#05070A" />
      <polygon points="61,52 80,52 94,80 50,80" fill={`url(#${gradientId})`} />
    </svg>
  )
}
