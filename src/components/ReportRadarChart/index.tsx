import Chart from "@/components/Base/Chart";
import { ChartData, ChartOptions } from "chart.js/auto";
import { getColor } from "@/utils/colors";
import { selectColorScheme } from "@/stores/colorSchemeSlice";
import { selectDarkMode } from "@/stores/darkModeSlice";
import { useAppSelector } from "@/stores/hooks";
import { useMemo } from "react";

interface MainProps extends React.ComponentPropsWithoutRef<"canvas"> {
  width?: number | "auto";
  height?: number | "auto";
}

function Main({ width = "auto", height = "auto", className = "" }: MainProps) {
  const props = {
    width: width,
    height: height,
    className: className,
  };
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const data: ChartData = useMemo(() => {
    return {
      labels: [
        "Quality Metrics",
        "Resource Allocation",
        "Staffing Levels",
        "Patient Demographics",
        "Operational Efficiency",
        "Financial Performance",
      ],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 90, 56, 55, 40],
          fill: true,
          borderWidth: 1,
          backgroundColor: getColor("primary", 0.2),
          borderColor: getColor("primary", 0.6),
          pointBackgroundColor: getColor("primary", 0.6),
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: getColor("primary", 0.6),
        },
        {
          label: "My Second Dataset",
          data: [28, 48, 40, 19, 27, 100],
          fill: true,
          borderWidth: 1,
          backgroundColor: getColor("info", 0.2),
          borderColor: getColor("info", 0.6),
          pointBackgroundColor: getColor("info", 0.6),
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: getColor("info", 0.6),
        },
      ],
    };
  }, [colorScheme, darkMode]);

  const options: ChartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          ticks: {
            stepSize: 40,
            color: darkMode
              ? getColor("slate.400")
              : getColor("slate.500", 0.9),
            backdropColor: "transparent",
          },
          pointLabels: {
            font: {
              size: 11,
            },
            color: darkMode
              ? getColor("slate.400")
              : getColor("slate.500", 0.9),
          },
          grid: {
            color: darkMode
              ? getColor("slate.700", 0.7)
              : getColor("slate.200", 0.7),
          },
        },
      },
    };
  }, [colorScheme, darkMode]);

  return (
    <Chart
      type="radar"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
    />
  );
}

export default Main;
