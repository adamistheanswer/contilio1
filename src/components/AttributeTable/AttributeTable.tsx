import { Component } from "react";
import "./AttributeTable.css";

interface Attribute {
  name: string;
  value: number;
  unit: string;
}

interface AttributeTableProps {
  attributes: Attribute[];
}

class AttributeTable extends Component<AttributeTableProps> {
  render() {
    const { attributes } = this.props;

    return (
      <table className="attributes-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {attributes.map((attr) => (
            <tr key={attr.name}>
              <td>{attr.name}</td>
              <td>
                {attr.value} {attr.unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default AttributeTable;
