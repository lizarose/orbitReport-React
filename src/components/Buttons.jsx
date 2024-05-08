import satData from "./satData";
import style from './styling.css'

const Buttons = ({ filterByType, setSat, displaySats }) => {
  
  return (
    <div className="flex-container">
      {/* map over displaySats to create button for each orbit type */}
      {displaySats.map((sat, id) => (
        <div>
        <button onClick={() => filterByType(sat)} key={id}>{sat} Orbit</button>
        </div>
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
  )
}

export default Buttons;