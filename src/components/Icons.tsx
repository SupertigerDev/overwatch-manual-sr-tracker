export default function Icons(props: {name: string}) {
  return <img src={`/${props.name}.svg`} alt="" />
}