import { Component } from "react";
import "./Barchart.css";

interface Attribute {
  name: string;
  value: number;
  unit: string;
}

interface IBarChartProps {
  attributes: Attribute[];
}

class BarChart extends Component<IBarChartProps> {
  render() {
    const { attributes } = this.props;

    // find max val as scalar for barchart
    const maxValue = Math.max(...attributes.map((attr) => attr.value));

    return (
      <div className="bar-chart">
        {attributes.map((attr) => {
          const barHeight = (attr.value / maxValue) * 100;

          // if space place barchart label inside
          const labelInside = barHeight >= 35;

          return (
            <div
              key={attr.name}
              className="bar"
              style={{ height: `${barHeight}px` }}
            >
              <span
                // label positioning and colour based on space avail
                style={{
                  color: labelInside ? "white" : "black",
                  position: labelInside ? "relative" : "absolute",
                  bottom: labelInside ? "unset" : "30px",
                }}
              >
                {attr.value + attr.unit}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BarChart;
