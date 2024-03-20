// Components Import
import Card from "./components/card/Card";
import PieChart from "./components/chart/PieChart";

// Utils Import
import { pieChartData } from "./utils/chart-data/pieChartData";

// CSS Imports
import "./App.css";

function App() {
  const mainContentComponent = () => <PieChart chartData={pieChartData} />;

  return (
    <div className="app-container">
      <Card
        title="Sub-Category"
        description="The assets are distributed between equity and cash & equivalents."
        content={mainContentComponent}
      />
    </div>
  );
}

export default App;
