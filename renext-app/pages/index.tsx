import { Button, Htag, P } from '../components'

export default function Home(): JSX.Element {
  return (
	<>
		<Htag tag='h1' >Текст</Htag>
		<Button appearance='primary' arrow='right' >Button</Button>
		<Button appearance='ghost' arrow='down'  >Button</Button>
		<P size='l'>Large</P>
		<P size='m'>Medium</P>
		<P size='s'>Small</P>
	</>
  )
}
