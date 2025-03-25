import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

interface Category {
  id: number
  name: string
}

export interface Product {
  category: Category

  id: number
  name: string
  price: number
  offer: boolean
  path: string
  url: string
  category_id: number
  createdAt: string
  updatedAt: string
}

export interface CartItem extends Product {
  quantity: number
}

interface CartContextProps {
  cart: CartItem[]
  putProductInCart: (product: Product) => void
  increaseProduct: (itemId: number) => void
  decreaseProduct: (itemId: number) => void
}

const CartContext = createContext({} as CartContextProps)

const updateLocalStorage = async (product: Product[]) => {
  localStorage.setItem('hardware:cartInfo', JSON.stringify(product))
}

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([])

  const putProductInCart = async (product: Product) => {
    setCart((state) => {
      const findProduct = state.find((item) => {
        return item.id === product.id
      })

      if (findProduct) {
        const updateProduct = state.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        })

        updateLocalStorage(updateProduct)

        return updateProduct
      }

      return [...state, { ...product, quantity: 1 }]
    })
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = localStorage.getItem('hardware:cartInfo')
      if (clientCartData) {
        setCart(JSON.parse(clientCartData))
      }
    }

    loadUserData()
  }, [])

  const increaseProduct = async (itemId: number) => {
    setCart((state) => {
      const updateIncrease = state.map((item) => {
        return item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      })
      updateLocalStorage(updateIncrease)

      return updateIncrease
    })
  }

  const deleteProductCart = async (itemId: number) => {
    const productFiltered = cart.filter((product) => product.id !== itemId)
    setCart(productFiltered)
    updateLocalStorage(productFiltered)
  }

  const decreaseProduct = async (itemId: number) => {
    const indexProduct = cart.findIndex((product) => product.id === itemId)

    if (cart[indexProduct].quantity > 1) {
      const newProduct = cart.map((product) => {
        return product.id === itemId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })

      setCart(newProduct)
      updateLocalStorage(newProduct)
    } else {
      deleteProductCart(itemId)
    }
  }

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cart,
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
