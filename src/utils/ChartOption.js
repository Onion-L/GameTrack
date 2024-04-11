export default class ChartOption {
  getGaugeOption(chartData) {
    return {
      series: [
        {
          type: "gauge",
          startAngle: 180,
          endAngle: 0,
          center: ["50%", "75%"],
          radius: "90%",
          min: 0,
          max: 1,
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              width: 6,
              color: [
                [0.25, "#FF6E76"],
                [0.5, "#FDDD60"],
                [0.75, "#58D9F9"],
                [1, "#7CFFB2"],
              ],
            },
          },
          pointer: {
            icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
            length: "12%",
            width: 20,
            offsetCenter: [0, "-60%"],
            itemStyle: {
              color: "auto",
            },
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: "auto",
              width: 2,
            },
          },
          splitLine: {
            length: 20,
            lineStyle: {
              color: "auto",
              width: 5,
            },
          },
          axisLabel: {
            color: "#464646",
            fontSize: 20,
            distance: -60,
            rotate: "tangential",
            formatter: function (value) {
              if (value === 0.875) {
                return "A";
              } else if (value === 0.625) {
                return "B";
              } else if (value === 0.375) {
                return "C";
              } else if (value === 0.125) {
                return "D";
              }
              return "";
            },
          },
          title: {
            offsetCenter: [0, "-10%"],
            fontSize: 20,
          },
          detail: {
            fontSize: 30,
            offsetCenter: [0, "-35%"],
            valueAnimation: true,
            formatter: function (value) {
              return Math.round(value * 100) + "";
            },
            color: "inherit",
          },
          data: [
            {
              value: chartData,
              name: "Contribution",
            },
          ],
        },
      ],
    };
  }
  getRadarOption(indicator, chartData) {
    return {
      color: ["#67F9D8", "#FFE434"],

      legend: {},
      radar: [
        {
          indicator: indicator,
          center: ["50%", "50%"],
          radius: 120,
          startAngle: 90,
          splitNumber: 4,
          shape: "circle",
          axisName: {
            formatter: "【{value}】",
            color: "#428BD4",
          },
          splitArea: {
            areaStyle: {
              color: ["#77EADF", "#26C3BE", "#64AFE9", "#428BD4"],
              shadowColor: "rgba(0, 0, 0, 0.2)",
              shadowBlur: 10,
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(211, 253, 250, 0.8)",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(211, 253, 250, 0.8)",
            },
          },
        },
      ],
      series: [
        {
          type: "radar",
          emphasis: {
            lineStyle: {
              width: 4,
            },
          },
          data: [
            {
              value: chartData,
              name: "Data A",
            },
            {
              value: [6, 5, 3, 10, 15],
              name: "Data B",
              areaStyle: {
                color: "rgba(255, 228, 52, 0.6)",
              },
            },
          ],
        },
      ],
    };
  }
}
