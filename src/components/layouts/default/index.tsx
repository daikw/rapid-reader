interface IDefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout: React.SFC<IDefaultLayoutProps> = (
  props: IDefaultLayoutProps
) => {
  return (
    <div>
      <header>header</header>
      {props.children}
      <footer>footer</footer>
    </div>
  )
}

export default DefaultLayout
