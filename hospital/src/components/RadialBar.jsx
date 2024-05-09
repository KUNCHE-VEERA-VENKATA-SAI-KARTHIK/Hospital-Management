import React, { Component } from "react";
import Chart from "react-apexcharts";

class RadialBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [73, 49],
      options: {
        colors: ["#8C93B8", "#76D2D3"],
        labels: ["Prepared <B>73%</B>", "Received <B>49%</B>"],
        legend: {
          show: true,
          showForSingleSeries: false,
          showForNullSeries: true,
          showForZeroSeries: true,
          position: "right",
          horizontalAlign: "center",
          floating: false,
          fontSize: "14px",
          fontFamily: "Helvetica, Arial",
          width: undefined,
          height: undefined,
          formatter: undefined,
          offsetX: 0,
          offsetY: 50,
          labels: {
            colors: undefined,
            useSeriesColors: false
          },
          markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: "#8C93B8",
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
          },
          itemMargin: {
            horizontal: 20,
            vertical: 5
          },
          onItemClick: {
            toggleDataSeries: true
          },
          onItemHover: {
            highlightDataSeries: true
          }
        },
        plotOptions: {
          radialBar: {
            size: undefined,
            inverseOrder: false,
            startAngle: 0,
            endAngle: 360,
            offsetX: 0,
            offsetY: 0,
            hollow: {
              margin: 5,
              size: "50%",
              background: "transparent",
              image: undefined,
              imageWidth: 150,
              imageHeight: 150,
              imageOffsetX: 0,
              imageOffsetY: 0,
              imageClipped: true,
              position: "front",
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5
              }
            },
            track: {
              show: true,
              startAngle: undefined,
              endAngle: undefined,
              background: "#D8D8D8",
              strokeWidth: "97%",
              opacity: 1,
              margin: 5,
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5
              }
            },
            dataLabels: {
              show: true,
              name: {
                show: false,
                fontSize: "22px",
                fontFamily: undefined,
                color: undefined,
                offsetY: -10
              },
              value: {
                show: true,
                fontSize: "16px",
                fontFamily: undefined,
                color: undefined,
                offsetY: 16,
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        }
      }
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          width="400"
        />
      </div>
    );
  }
}

export default RadialBar;
