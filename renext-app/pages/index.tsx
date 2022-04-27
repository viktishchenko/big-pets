import { useState } from 'react'
import { Button, Htag, P, Tag } from '../components'

export default function Home(): JSX.Element {
	const [counter, setCounter] = useState(0)
  return (
	<>
		<Htag tag='h1' >{counter}</Htag>
		<Button onClick={()=>{setCounter(x=>x+1)}} appearance='primary' arrow='right' >Button</Button>
		<Button appearance='ghost' arrow='down'  >Button</Button>
		<P size='l'>Large</P>
		<P size='m'>Medium</P>
		<P size='s'>Small</P>
		<Tag size='s'>Ghost</Tag>
		<Tag size='m' color='red'>Red</Tag>
		<Tag color='green'>Green</Tag>
		<Tag color='gray'>Gray</Tag>
		<Tag color='primary'>Primary</Tag>
	</>
  )
}
