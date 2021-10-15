import classnames from 'classnames'
import css from './Text.module.css'

export default function Text({
  as: Tag = 'p',
  size = Text.md,
  weight = Text.regular,
  className,
  children,
  ...props
}) {
  const classList = classnames(css.root, size, weight, className)

  return (
    <Tag className={classList} {...props}>
      {children}
    </Tag>
  )
}

Text.regular = css.regular
Text.bold = css.bold
Text.xs = css.xs
Text.sm = css.sm
Text.md = css.md
Text.lg = css.lg
Text.xl = css.xl
