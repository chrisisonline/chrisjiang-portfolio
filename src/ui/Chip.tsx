export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-nowrap rounded-full bg-primary-10 px-3 py-1 text-sm text-primary">
      {children}
    </span>
  )
}
