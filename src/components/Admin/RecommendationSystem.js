import React, { useState } from "react";

const customerHistory = {
  rooms: [
    { id: 1, name: "Ocean View Suite", date: "2024-12-10", rating: 4.5 },
    { id: 2, name: "Mountain Cabin", date: "2024-11-25", rating: 4.0 },
  ],
  menuItems: [
    { id: 1, name: "Grilled Salmon", rating: 4.8 },
    { id: 2, name: "Vegetarian Pasta", rating: 4.2 },
  ],
};

const RecommendationSystem = () => {
  const [recommendedRooms, setRecommendedRooms] = useState([]);
  const [recommendedMenu, setRecommendedMenu] = useState([]);

  const suggestRooms = () => {
    const rooms = [
      { id: 1, name: "Ocean View Suite", description: "A luxurious oceanfront suite", rating: 4.8 },
      { id: 2, name: "Mountain Cabin", description: "A cozy cabin in the mountains", rating: 4.7 },
      { id: 3, name: "City Loft", description: "A modern loft in the heart of the city", rating: 4.5 },
    ];

    const recommendations = rooms.filter((room) =>
      customerHistory.rooms.some((history) => room.rating >= history.rating)
    );

    setRecommendedRooms(recommendations);
  };

  const suggestMenuItems = () => {
    const menuItems = [
      { id: 1, name: "Grilled Salmon", description: "Fresh salmon grilled to perfection", rating: 4.9 },
      { id: 2, name: "Vegetarian Pasta", description: "A healthy vegetarian pasta", rating: 4.6 },
      { id: 3, name: "Steak Frites", description: "A classic steak with fries", rating: 4.8 },
    ];

    const recommendations = menuItems.filter((item) =>
      customerHistory.menuItems.some((history) => item.rating >= history.rating)
    );

    setRecommendedMenu(recommendations);
  };

  return (
    <div className="container my-1">
      <h2 className="text-center mb-4">Personalized Recommendations</h2>
      <p className="text-muted text-center">Based on your history, we suggest the following rooms and menu items for your next visit:</p>

      <div className="row mb-5">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">Recommended Rooms</div>
            <div className="card-body">
              <button className="btn btn-secondary" onClick={suggestRooms}>Get Room Suggestions</button>
              <ul className="list-group mt-3">
                {recommendedRooms.length > 0 ? (
                  recommendedRooms.map((room) => (
                    <li key={room.id} className="list-group-item">
                      <h5>{room.name}</h5>
                      <p>{room.description}</p>
                      <span className="badge bg-success">{room.rating} / 5</span>
                    </li>
                  ))
                ) : (
                  <p>No room suggestions yet. Click the button to get recommendations.</p>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">Recommended Menu Items</div>
            <div className="card-body">
              <button className="btn btn-secondary" onClick={suggestMenuItems}>Get Menu Suggestions</button>
              <ul className="list-group mt-3">
                {recommendedMenu.length > 0 ? (
                  recommendedMenu.map((item) => (
                    <li key={item.id} className="list-group-item">
                      <h5>{item.name}</h5>
                      <p>{item.description}</p>
                      <span className="badge bg-warning">{item.rating} / 5</span>
                    </li>
                  ))
                ) : (
                  <p>No menu suggestions yet. Click the button to get recommendations.</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default RecommendationSystem;
