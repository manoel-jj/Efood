import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import lixeira from '../../assets/images/lixeira.png'

import * as S from './styles'
import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'

import Button from '../Button'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const [purchase, { isLoading, data, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      deliveryAdress: '',
      deliveryCity: '',
      zipCode: '',
      numberAdress: '',
      complementAdress: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('Campo obrigatório'),
      deliveryAdress: Yup.string().required('Campo obrigatório'),
      deliveryCity: Yup.string().required('Campo obrigatório'),
      zipCode: Yup.string()
        .min(8, 'O cep precisa ter 8 digitos')
        .required('Campo obrigatório'),
      numberAdress: Yup.number().required('Campo obrigatório'),
      complementAdress: Yup.string(),
      cardDisplayName: Yup.string()
        .min(5, 'O nome precisa ter no minimo 5 letras.')
        .required('Campo Obrigatório.'),
      cardNumber: Yup.string()
        .min(19, 'Numero de cartão invalido.')
        .max(19, 'Numero de cartão invalido.')
        .required('Campo Obrigatório.'),
      cardCode: Yup.string()
        .min(3, 'Código do cartão invalido.')
        .max(3, 'Código do cartão invalido.')
        .required('Campo Obrigatório.'),
      expiresMonth: Yup.number()
        .min(2, 'Mês inválido.')
        .required('Campo Obrigatório.'),
      expiresYear: Yup.number()
        .min(4, 'Ano inválido')
        .required('Campo Obrigatório.')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.fullName,
          adress: {
            description: values.deliveryAdress,
            city: values.deliveryCity,
            zipCode: values.zipCode,
            number: Number(values.numberAdress),
            complement: values.complementAdress
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })
  console.log(form)
  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const getTotalPrice = () => {
    return items.reduce((acc, price) => {
      return (acc += price.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const [errorIsVisible, setErrorIsVisible] = useState(false)
  const [payment, setPayment] = useState(false)
  const [goToDeliveryForm, setGoToDeliveryForm] = useState(false)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [dispatch, isSuccess])

  const checkout = () => {
    setGoToDeliveryForm(true)
  }
  const goToCart = () => {
    setGoToDeliveryForm(false)
  }

  const submit = () => {
    if (!form.dirty && form.isValid) {
      setErrorIsVisible(true)
    } else {
      setPayment(true)
    }
  }
  const backToDeliveryForm = () => {
    setGoToDeliveryForm(true)
    setPayment(false)
  }
  const finalized = () => {
    closeCart()
    setGoToDeliveryForm(false)
    setPayment(false)
  }
  const total = items.reduce((total, prato) => total + prato.preco, 0)

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {payment ? (
          <>
            {isSuccess && data ? (
              <S.ConclusionOrder>
                <h4>Pedido realizado - {data.orderId}</h4>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </p>
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </p>
                <p>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <Button
                  size="big"
                  type="button"
                  title="Clique aqui para concluir o pedido"
                  onClick={finalized}
                >
                  Concluir
                </Button>
              </S.ConclusionOrder>
            ) : (
              <S.Form onSubmit={form.handleSubmit}>
                <S.DeliveryText>
                  Pagamento - Valor a pagar {formatPrice(total)}
                </S.DeliveryText>
                <S.InputGroup>
                  <label htmlFor="cardDisplayName">Nome no cartão</label>
                  <input
                    id="cardDisplayName"
                    type="text"
                    name="cardDisplayName"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.cardDisplayName}
                    className={
                      checkInputHasError('cardDisplayName') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.CardContainer>
                  <S.InputGroup maxWidth="228px">
                    <label htmlFor="cardNumber">Número no cartão</label>
                    <InputMask
                      mask="9999 9999 9999 9999"
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.cardNumber}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="87px">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      mask="999"
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.cardCode}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                    />
                  </S.InputGroup>
                </S.CardContainer>
                <S.ExpirationCard>
                  <S.InputGroup>
                    <label htmlFor="expiresMonth">Mês de vecimento</label>
                    <InputMask
                      mask="99"
                      id="expiresMonth"
                      type="text"
                      name="expiresMonth"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.expiresMonth}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      mask="9999"
                      id="expiresYear"
                      type="text"
                      name="expiresYear"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.expiresYear}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </S.ExpirationCard>
                <S.CustomButton
                  type="submit"
                  onClick={() => form.handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? 'Finalizando compra...' : 'Finalizar pagamento'}
                </S.CustomButton>
                <Button
                  size="big"
                  type="button"
                  title="Voltar para a edição do endereço"
                  onClick={backToDeliveryForm}
                >
                  Voltar para a edição do endereço
                </Button>
              </S.Form>
            )}
          </>
        ) : (
          <>
            {goToDeliveryForm ? (
              <S.Form onSubmit={form.handleSubmit}>
                <S.DeliveryText>Entrega</S.DeliveryText>
                <div className="delivery-form">
                  <S.InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={form.values.fullName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('fullName') ? 'error' : ''}
                    />
                  </S.InputGroup>

                  <S.InputGroup>
                    <label htmlFor="deliveryAdress">Endereço</label>
                    <input
                      id="deliveryAdress"
                      type="text"
                      name="deliveryAdress"
                      value={form.values.deliveryAdress}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('deliveryAdress') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="deliveryCity">Cidade</label>
                    <input
                      id="deliveryCity"
                      type="text"
                      name="deliveryCity"
                      value={form.values.deliveryCity}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('deliveryCity') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.ZipCodeContainer>
                    <S.InputGroup>
                      <label htmlFor="zipCode">CEP</label>
                      <InputMask
                        mask="99999-999"
                        id="zipCode "
                        type="text"
                        name="zipCode"
                        value={form.values.zipCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('zipCode') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="numberAdress">Número</label>
                      <input
                        id="numberAdress"
                        type="text"
                        name="numberAdress"
                        value={form.values.numberAdress}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('numberAdress') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.ZipCodeContainer>
                  <S.InputGroup>
                    <label htmlFor="complementAdress">
                      Complemento (opcional)
                    </label>
                    <input
                      id="complementAdress"
                      type="text"
                      name="complementAdress"
                      value={form.values.complementAdress}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('complementAdress') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </div>
                <Button
                  size="big"
                  type="button"
                  title="Continuar para pagamento"
                  onClick={() => submit()}
                >
                  Finalizar a compra
                </Button>
                {errorIsVisible ? (
                  <p className="error-message">
                    Preencha os campos acima para continuar
                  </p>
                ) : (
                  ''
                )}
                <Button
                  size="big"
                  type="button"
                  title="Voltar para o carrinho"
                  onClick={goToCart}
                >
                  Voltar para o carrinho
                </Button>
              </S.Form>
            ) : (
              <>
                {items.length > 0 ? (
                  <div>
                    <ul>
                      {items &&
                        items.map((item) => (
                          <S.CartItem key={item.id}>
                            <img src={item.foto} />
                            <div>
                              <h3>{item.nome}</h3>
                              <p>{formatPrice(item.preco)}</p>
                              <S.Dumpster
                                onClick={() => removeItem(item.id)}
                                src={lixeira}
                              />
                            </div>
                          </S.CartItem>
                        ))}
                    </ul>
                    <S.Price>
                      Valor total <span>{formatPrice(getTotalPrice())}</span>
                    </S.Price>
                    <Button
                      type="button"
                      title={'Clique aqui para continuar'}
                      size="big"
                      onClick={checkout}
                    >
                      Continuar com a entrega
                    </Button>
                  </div>
                ) : (
                  <p className="empty-text">
                    O carrinho está vazio, adicione pelo menos um produto para
                    continuar com a compra
                  </p>
                )}
              </>
            )}
          </>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
