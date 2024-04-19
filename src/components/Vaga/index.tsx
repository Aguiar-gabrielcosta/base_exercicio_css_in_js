import { EstiloVaga, EstiloVagaLink, EstiloVagaTitulo } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <EstiloVaga>
    <EstiloVagaTitulo>{props.titulo}</EstiloVagaTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <EstiloVagaLink href="#">Ver detalhes e candidatar-se</EstiloVagaLink>
  </EstiloVaga>
)

export default Vaga
