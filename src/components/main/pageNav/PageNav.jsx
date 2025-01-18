import "./PageNav.css";

const PageNav = () => {
  let items = [];
  for (let i = 0; i < 5; i++) {
    items.push(i);
  }

  return (
    <div className="PageNav-container">
      <div className="PageNav-items">
        <p>&lt;&lt;</p>
      </div>
      {items.map((item) => (
        <div className="PageNav-content" key={item.index}>
          <div className="PageNav-items">
            <p>{item + 1}</p>
          </div>
        </div>
      ))}
      <div className="PageNav-items">
        <p>&gt;&gt;</p>
      </div>
    </div>
  );
};

export default PageNav;
