const generateValues = () => Math.floor(Math.random() * 50) + 1;

// Sample data for the dashboard
const analyticsData = [
  { id: 1, name: "Apple", value: generateValues() },
  { id: 2, name: "Banana", value: generateValues() },
  { id: 3, name: "Cherry", value: generateValues() },
  { id: 4, name: "Date", value: generateValues() },
  { id: 5, name: "Fig", value: generateValues() },
  { id: 6, name: "Grapes", value: generateValues() },
  { id: 7, name: "Lemon", value: generateValues() },
  { id: 8, name: "Mango", value: generateValues() },
  { id: 9, name: "Orange", value: generateValues() },
  { id: 10, name: "Peach", value: generateValues() },
  { id: 11, name: "Pear", value: generateValues() },
  { id: 12, name: "Plum", value: generateValues() },
  { id: 13, name: "Raspberry", value: generateValues() },
  { id: 14, name: "Strawberry", value: generateValues() },
  { id: 15, name: "Blueberry", value: generateValues() },
  { id: 16, name: "Blackberry", value: generateValues() },
  { id: 17, name: "Kiwi", value: generateValues() },
  { id: 18, name: "Pineapple", value: generateValues() },
  { id: 19, name: "Watermelon", value: generateValues() },
  { id: 20, name: "Cantaloupe", value: generateValues() },
];

module.exports = { analyticsData };
