import Link from 'next/link'
import classnames from 'classnames'
import { Text, Wrapper } from 'components'
import css from './GlobalHeader.module.css'

export default function GlobalHeader({
  className,
  ...props
}) {
  const classList = classnames(css.root, className)

  return (
    <header className={classList} {...props}>
      <Wrapper padding={Wrapper.normal}>
        <Text as="h1" size={Text.xl}>
          <Link href="/"><a>kram.codes</a></Link>
        </Text>
      </Wrapper>
    </header>
  )
}
