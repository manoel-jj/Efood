import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children?: string | JSX.Element | JSX.Element[] | number
  size?: 'small' | 'big'
  disabled?: boolean
  onPress?: () => void
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  size,
  disabled,
  onPress
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        size={size}
        disabled={disabled}
        onPress={onPress}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink title={title} to={to as string}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
