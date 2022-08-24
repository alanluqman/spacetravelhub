import '../css/Display.css';

export default function Display() {
  return (
    <div className="container">
      <div className="display-section">
        <h1>My Missions</h1>
        <table>
          <tbody>
            <tr>
              <td>Mission 1</td>
            </tr>
            <tr>
              <td>Mission 2</td>
            </tr>
            <tr>
              <td>Mission 3</td>
            </tr>
            <tr>
              <td>Mission 4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="display-section">
        <h1>My Rockets</h1>
        <table>
          <tbody>
            <tr>
              <td>Rocket 1</td>
            </tr>
            <tr>
              <td>Rocket 2</td>
            </tr>
            <tr>
              <td>Rocket 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
