import React, { Component } from "react";
import "./Dashboard.css";
import BarChart from "../../components/Barchart/Barchart";
import AttributeTable from "../../components/AttributeTable/AttributeTable";

interface DataItem {
  title: string;
  attributes: Array<{ name: string; value: number; unit: string }>;
}

interface IDashBoardState {
  data: DataItem[];
  currentIndex: number;
}

class Dashboard extends Component<{}, IDashBoardState> {
  state: IDashBoardState = {
    data: [],
    currentIndex: 0,
  };

  componentDidMount() {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentIndex: parseInt(event.target.value) });
  };

  render() {
    const { data, currentIndex } = this.state;

    // catch no data, could show a loader here
    if (data.length === 0) return <div>Loading</div>;

    const currentItem = data[currentIndex];

    // destruct entry elements
    const { attributes, title } = currentItem;

    return (
      <div className="dashboard-container">
        {currentItem && (
          <>
            <h1>{title}</h1>
            <div className="content">
              <AttributeTable attributes={attributes} />
              <BarChart attributes={attributes} />
            </div>
            <input
              type="range"
              min="0"
              max={data.length - 1}
              value={currentIndex}
              onChange={this.handleRangeChange}
            />
          </>
        )}
      </div>
    );
  }
}

export default Dashboard;
