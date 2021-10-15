import classnames from 'classnames'
import css from './Container.module.css'

export default function Container({
  children,
  className,
  ...props
}) {
  const classList = classnames(css.root, className)

  return (
    <div className={classList} {...props}>
      {children}
    </div>
  )
}
