import { nobles } from '../../resources/cards.json';

const Nobles = ({ ...props } : { props?: any }) => (
  <section>
    <header>
      <h2>Nobles:</h2>
    </header>

    <article>
      {JSON.stringify(nobles)}
    </article>
  </section>
)

export default Nobles;