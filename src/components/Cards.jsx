import Card from './Card';

export default function Cards({ characters }) {
   let pintarCartas = characters.map((elements, i) => <Card key={i}
      name={elements.name}
      species={elements.species}
      gender={elements.gender}
      image={elements.image}
      onClose={() => window.alert('Emulamos que se cierra la card')} />)
   return (<div style={{
      display: 'flex',
      justifyContent: 'space-evenly',
   }}>
      {pintarCartas}
   </div>);
}
