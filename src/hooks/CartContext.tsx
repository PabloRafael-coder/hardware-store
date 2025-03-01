import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export interface Cart {
  id: number
  name: string
  offer: boolean
  path: string
  price: number
  quantity: number
  url: string
  createdAt: string
  updatedAt: string
}

interface CartContextProps {
  cartProducts: Cart[]
  putProductInCart: (product: Cart) => void
  increaseProduct: (itemId: number) => void
  decreaseProduct: (itemId: number) => void
}

const CartContext = createContext({} as CartContextProps)

const updateLocalStorage = async (product: Cart[]) => {
  localStorage.setItem('hardware:cartInfo', JSON.stringify(product))
}

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<Cart[]>([])

  const putProductInCart = async (product: Cart) => {
    const cartIndex = cartProducts.findIndex((prod) => prod.id === product.id)
    let newCartProducts = []

    if (cartIndex >= 0) {
      newCartProducts = cartProducts

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 0
      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }

    updateLocalStorage(newCartProducts)
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = localStorage.getItem('hardware:cartInfo')
      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }

    loadUserData()
  }, [])

  const increaseProduct = async (itemId: number) => {
    const addProduct = cartProducts.map((product) => {
      return itemId === product.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCartProducts(addProduct)
    updateLocalStorage(addProduct)
  }

  const deleteProductCart = async (itemId: number) => {
    const productFiltered = cartProducts.filter(
      (product) => product.id !== itemId,
    )
    setCartProducts(productFiltered)
    updateLocalStorage(productFiltered)
  }

  const decreaseProduct = async (itemId: number) => {
    const indexProduct = cartProducts.findIndex(
      (product) => product.id === itemId,
    )

    if (cartProducts[indexProduct].quantity > 1) {
      const newProduct = cartProducts.map((product) => {
        return product.id === itemId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })

      setCartProducts(newProduct)
      updateLocalStorage(newProduct)
    } else {
      deleteProductCart(itemId)
    }
  }

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }
  return context
}
