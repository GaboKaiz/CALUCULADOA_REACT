import '../components/Integrantes.css';
import adeliz from '../assets/adeliz.png';
import casimiro from '../assets/casimiro.png';
import norbert from '../assets/norbert.png';
import luis from '../assets/luis.png';
import gabo from '../assets/gabo.png';

function Integrantes() {
  const teamMembers = [
    {
      name: 'ADELIZ ACOSTA ROJAS',
      photo: adeliz,
    },
    {
      name: 'JHAN ROLANDO ANTONIO CASIMIRO',
      photo: casimiro,
    },
    {
      name: 'ARIEL LEO NORBERTO MONTALVO',
      photo: norbert,
    },
    {
      name: 'LUIS ANGEL FLORES CRUZ',
      photo: luis,
    },
    {
      name: 'IAN GABRIEL ZUÑIGA SOLANO',
      photo: gabo,
    },
  ];

  return (
    <div className="integrantes-container">
      <h1 className="integrantes-title">Nuestro Equipo</h1>
      <div className="integrantes-grid">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="integrante-card"
            style={{ '--index': index }}
          >
            <img src={member.photo} alt={member.name} className="integrante-photo" />
            <h3 className="integrante-name">{member.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Integrantes;