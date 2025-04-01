'use client'
import React, { useState, useEffect } from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { Box, Autocomplete, TextField } from '@mui/material';
import type { ScatterItemIdentifier } from '@mui/x-charts';
import NorthWestIcon from '@mui/icons-material/NorthWest';


const FlightMap = () => {
  const [allBrands, setAllBrands] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [discs, setDiscs] = useState<any[]>([]);
  const [selectedDisc, setSelectedDisc] = useState<any | null>(null);


  // Fetch all brands for Autocomplete
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/brands');
        const data = await res.json();
        setAllBrands(data);
      } catch (err) {
        console.error('Failed to load brands', err);
      }
    };
    fetchBrands();
  }, []);

  // Fetch discs when brand is selected
  useEffect(() => {
    const fetchDiscsByBrand = async () => {
      if (!selectedBrand) return;
      try {
        const res = await fetch(`http://localhost:5000/api/brands/${encodeURIComponent(selectedBrand)}`);
        const data = await res.json();
        setDiscs(data);
      } catch (err) {
        console.error('Failed to fetch discs by brand', err);
      }
    };
    fetchDiscsByBrand();
  }, [selectedBrand]);

  // Transform discs into chart points
  const chartData = React.useMemo(() => {
    return discs
      .filter((disc) =>
        disc.speed != null &&
        disc.turn != null &&
        disc.fade != null &&
        !isNaN(Number(disc.speed)) &&
        !isNaN(Number(disc.turn)) &&
        !isNaN(Number(disc.fade))
      )
      .map((disc, index) => {
        const turn = Number(disc.turn);
        const fade = Number(disc.fade);
        const stabilityIndex = turn + fade;

        return {
          x: stabilityIndex,
          y: Number(disc.speed),
          z: stabilityIndex, // 💥 KEY LINE: this drives color
          id: disc._id || index,
          label: disc.name,
          speed: disc.speed,
          glide: disc.glide,
          turn,
          fade,
          category: disc.category,
          stability: disc.stability, // optional, still fine to keep
        };
      });

  }, [discs]);



  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '100vh', overflow: 'hidden' }}>
      {/* Left Side: Controls */}
      <Box sx={{ width: 300 }}>
        <Autocomplete
          disablePortal
          options={allBrands}
          value={selectedBrand}
          onChange={(event, newValue) => setSelectedBrand(newValue)}
          renderInput={(params) => (
            <TextField {...params} label="Select Manufacturer" variant="standard" />
          )}
        />
        {selectedDisc && (
          <Box sx={{ mt: 2, color: 'white' }}>
            <div>Disc Name: {selectedDisc.label}</div>
            <div>Speed: {selectedDisc.speed}</div>
            <div>Glide: {selectedDisc.glide}</div>
            <div>Turn: {selectedDisc.turn}</div>
            <div>Fade: {selectedDisc.fade}</div>
            <div>Stability: {selectedDisc.stability}</div>
            <div>Category: {selectedDisc.category}</div>
          </Box>
        )}
      </Box>

      {/* Right Side: Chart + Legend */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{ width: '100%', height: '100%' }}>
          <ScatterChart
            disableVoronoi
            series={[
              {
                id: 'discs',
                data: chartData,
                markerSize: 10,
                highlightScope: {
                  highlight: 'item',
                },
                valueFormatter: (point) => {
                  const matchingDisc = chartData.find(
                    (d) => d.x === point.x && d.y === point.y
                  );
                  return matchingDisc?.label ?? `(${point.x}, ${point.y})`;
                },
              },
            ]}
            xAxis={[{ label: 'Stability (Understable → Overstable)', min: -5, max: 6 }]}
            yAxis={[{ label: 'Speed', min: 0, max: 15 }]}
            zAxis={[
              {
                colorMap: {
                  type: 'continuous',
                  min: -5,
                  max: 5,
                  color: ['blue', 'red'],
                },
              },
            ]}
            grid={{ vertical: true, horizontal: true }}
            onItemClick={(event: React.MouseEvent, itemProps: ScatterItemIdentifier) => {
              const clickedDisc = chartData[itemProps.dataIndex];
              setSelectedDisc(clickedDisc);
            }}
          />
        </Box>

        {/* Color Legend */}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: 200,
                height: 12,
                background: 'linear-gradient(to right, blue, gray, red)',
                borderRadius: 1,
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 200, fontSize: '0.75rem', mt: 0.5, color: 'white' }}>
            <span>-5.0</span>
            <span>0</span>
            <span>6.0</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FlightMap;
