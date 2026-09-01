function StatCard({
  title,
  value,
  icon,
  color = "blue",
}) {
  const colors = {
    blue: {
      bg: "bg-blue-50",
      icon: "bg-blue-100 text-blue-600",
      value: "text-blue-700",
    },
    green: {
      bg: "bg-green-50",
      icon: "bg-green-100 text-green-600",
      value: "text-green-700",
    },
    red: {
      bg: "bg-red-50",
      icon: "bg-red-100 text-red-600",
      value: "text-red-700",
    },
    yellow: {
      bg: "bg-yellow-50",
      icon: "bg-yellow-100 text-yellow-600",
      value: "text-yellow-700",
    },
  };

  const theme = colors[color] || colors.blue;

  return (
    <div
      className={`flex items-center gap-4 rounded-xl border border-gray-200 p-5 shadow-sm transition hover:shadow-md ${theme.bg}`}
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${theme.icon}`}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-sm font-medium text-gray-500">
          {title}
        </p>

        <h2 className={`mt-1 text-2xl font-bold ${theme.value}`}>
          {value}
        </h2>
      </div>
    </div>
  );
}

export default StatCard;
