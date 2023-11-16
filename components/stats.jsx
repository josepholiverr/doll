import Counter from "@/components/counter"

export default function Stats() {
  const stats = [
    {
      number: 476,
      suffix: "K",
      text: "idk"
    },
    {
      number: 1.44,
      suffix: "K",
      text: "idk"
    },
    {
      number: 10.5,
      suffix: "M+",
      text: "Followers in our network"
    },
    {
      number: 192,
      suffix: "K",
      text: "idk"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="max-w-sm mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-4 md:-mx-5 md:gap-0 items-start md:max-w-none">
        {stats.map((stat, index) => (
          <div key={index} className="relative text-center md:px-5">
            <h4 className="font-inter-tight text-2xl md:text-3xl font-bold tabular-nums mb-2">
              <Counter number={stat.number} />
              {stat.suffix}
            </h4>
            <p className="text-sm text-zinc-500">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
