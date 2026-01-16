function Card(props) {
  var name = props.data.name;
  var role = props.data.role;
  return React.createElement("div", { className: "card" },
    React.createElement("h2", null, name),
    React.createElement("p", null, role)
  );
}

export default function App() {
  var user = { name: "Sarah", role: "Engineer" };
  return React.createElement("div", null,
    React.createElement(Card, { data: user })
  );
}
