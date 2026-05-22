interface StatItem {
  id: number;
  value: string;
  label: string;
  highlight?: boolean;
}

const stats: StatItem[] = [
  {
    id: 1,
    value: "500+",
    label: "PROJECTS DELIVERED",
  },
  {
    id: 2,
    value: "98%",
    label: "CLIENT SATISFACTION",
    highlight: true,
  },
  {
    id: 3,
    value: "15x",
    label: "AVERAGE ROI",
  },
  {
    id: 4,
    value: "24/7",
    label: "GLOBAL SUPPORT",
  },
];

const Stats = () => {
  return (
    <div
      className="
            mt-16
            grid
            grid-cols-2
            md:grid-cols-4
            gap-10
          "
    >
      {stats.map((item) => (
        <div key={item.id} className="text-center md:text-left">
          <h3
            className={`
                  text-4xl
                  md:text-5xl
                  font-bold
                  ${item.highlight ? "text-[#F7B32B]" : "text-primary"}
                `}
          >
            {item.value}
          </h3>

          <p
            className="
                  mt-3
                  text-xs
                  md:text-sm
                  uppercase
                  tracking-[0.25em]
                  text-muted
                "
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
