import { FormEvent, useState } from 'react'

import { EstiloBotao, EstiloCampo, EstiloForm } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <EstiloForm onSubmit={aoEnviarForm}>
      <EstiloCampo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <EstiloBotao type="submit">Pesquisar</EstiloBotao>
    </EstiloForm>
  )
}
export default FormVagas
