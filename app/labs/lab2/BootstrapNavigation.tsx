import Button from 'react-bootstrap/Button';

export default function BootstrapNavigation() {
  return (
    <div>
      <div id="wd-css-navigating-with-tabs">
        <h2>Tabs</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#/labs/lab2/Active">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/labs/lab2/Link1">Link 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/labs/lab2/Link2">Link 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#/labs/lab2/Disabled">Disabled</a>
          </li>
        </ul>
      </div>

      <div id="wd-css-navigating-with-cards">
        <h2>Cards</h2>
        <div className="card" style={{ width: "18rem" }}>
          <img src="/images/stacked.jpg" className="card-img-top" alt="Starship" />
          <div className="card-body">
            <h5 className="card-title">Stacking Starship</h5>
            <p className="card-text">
              Stacking the most powerful rocket in history. Mars or bust!
            </p>
            <Button variant="primary">Boldly Go</Button>
          </div>
        </div>
      </div>
    </div>
  );
}