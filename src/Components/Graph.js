// Import React and Chart.js components for creating and rendering graphs
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../Context/ThemeContext';

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Graph component definition
const Graph = ({ graphData }) => {
  // Access the current theme using the useTheme hook
  const { theme } = useTheme();

  // Render the Line chart with the provided graph data
  return (
    <div>
      <Line
        data={{
          labels: graphData.map((i) => i[0]),
          datasets: [
            {
              data: graphData.map((i) => i[1]),
              label: 'wpm',
              borderColor: theme.textColor,
            },
          ],
        }}
      />
    </div>
  );
};

// Export the Graph component
export default Graph;
