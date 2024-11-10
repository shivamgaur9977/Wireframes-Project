import React from "react";

const BloodTable = () => {
  const data = {
    RBC: [
      { type: "Angled Cells", count: 222, percentage: "67%" },
      { type: "Borderline Ovalocytes", count: 50, percentage: "20%" },
      { type: "Burr Cells", count: 87, percentage: "34%" },
      { type: "Fragmented Cells", count: 2, percentage: "0.12%" },
      { type: "Ovalocytes", count: "", percentage: "" },
      { type: "Rounded RBC", count: "", percentage: "" },
      { type: "Teardrops", count: "", percentage: "" },
    ],
    WBC: [
      { type: "Basophil", count: 222, percentage: "67%" },
      { type: "Eosinophil", count: 50, percentage: "20%" },
      { type: "Lymphocyte", count: 87, percentage: "34%" },
      { type: "Monocyte", count: 2, percentage: "0.12%" },
    ],
    Platelets: [
      { type: "Count", count: 222, percentage: "" },
      { type: "Percentage", count: 222, percentage: "" },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        {/* RBC Table */}
        <thead>
          <tr>
            <th colSpan="3" style={styles.sectionHeader}>RBC</th>
          </tr>
          <tr style={styles.headerRow}>
            <th style={styles.headerCell}>Type</th>
            <th style={styles.headerCell}>Count</th>
            <th style={styles.headerCell}>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.RBC.map((item, index) => (
            <tr key={index} style={styles.dataRow}>
              <td style={styles.dataCell}>{item.type}</td>
              <td style={styles.dataCell}>{item.count}</td>
              <td style={styles.dataCell}>{item.percentage}</td>
            </tr>
          ))}
        </tbody>

        {/* WBC Table */}
        <thead>
          <tr>
            <th colSpan="3" style={styles.sectionHeader}>WBC</th>
          </tr>
          <tr style={styles.headerRow}>
            <th style={styles.headerCell}>Type</th>
            <th style={styles.headerCell}>Count</th>
            <th style={styles.headerCell}>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.WBC.map((item, index) => (
            <tr key={index} style={styles.dataRow}>
              <td style={styles.dataCell}>{item.type}</td>
              <td style={styles.dataCell}>{item.count}</td>
              <td style={styles.dataCell}>{item.percentage}</td>
            </tr>
          ))}
        </tbody>

        {/* Platelets Table */}
        <thead>
          <tr>
            <th colSpan="3" style={styles.sectionHeader}>Platelets</th>
          </tr>
        </thead>
        <tbody>
          {data.Platelets.map((item, index) => (
            <tr key={index} style={styles.dataRow}>
              <td style={styles.dataCell}>{item.type}</td>
              <td style={styles.dataCell}>{item.count}</td>
              <td style={styles.dataCell}>{item.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  sectionHeader: {
    backgroundColor: "#cce8d0", // Light green for section headers
    textAlign: "center",
    padding: "10px",
    fontWeight: "bold",
    border: "1px solid #ccc",
  },
  headerRow: {
    backgroundColor: "#f0f0f0", // Light grey for header row
  },
  headerCell: {
    padding: "8px",
    border: "1px solid #ccc",
    fontWeight: "bold",
    textAlign: "center",
  },
  dataRow: {
    backgroundColor: "#ffffff",
  },
  dataCell: {
    padding: "8px",
    border: "1px solid #ccc",
    textAlign: "center",
  },
};

export default BloodTable;
