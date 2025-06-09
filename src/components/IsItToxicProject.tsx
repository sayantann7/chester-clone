
import React from 'react';

const IsItToxicProject: React.FC = () => {
  const toxicPlants = [
    { name: "Caladl Philodendron", status: "Monstera deliciosa", toxicity: "85%" },
    { name: "Cyclads", status: "Cycas are robust species", toxicity: "85%" },
    { name: "Cyclamen", status: "Cyclamen spp.", toxicity: "85%" },
    { name: "Daffodil", status: "Narcissus spp.", toxicity: "85%" },
    { name: "Dahlia", status: "Dahlia dentata", toxicity: "85%" },
    { name: "Daisy", status: "Chrysanthemum species", toxicity: "85%" },
    { name: "Day Lilies (Hemerocallis)", status: "Hemerocallis spp.", toxicity: "" },
    { name: "Deadly Nightshade", status: "Solanum spp.", toxicity: "85%" },
    { name: "Desert Azalea", status: "Adenium obesum", toxicity: "85%" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="project-card">
        <div className="p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              🌿
            </div>
            <h1 className="text-3xl font-crimson font-semibold">Is It Toxic To?</h1>
          </div>
          
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for toxic plants..."
              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          
          <div className="space-y-2">
            {toxicPlants.map((plant, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-border/30 last:border-b-0">
                <div>
                  <span className="font-medium text-foreground">{plant.name}</span>
                  <span className="text-muted-foreground ml-2 text-sm">{plant.status}</span>
                </div>
                {plant.toxicity && (
                  <span className="text-orange-600 font-medium text-sm">{plant.toxicity}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsItToxicProject;
