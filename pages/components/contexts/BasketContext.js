
import React, {useContext, createContext, useState, Component} from "react"

const {Provider, Consumer} = createContext()



class BasketContextProvider extends Component {
    state = {
        basket: ["carrera", "apollo", "triban"]
    }
    
    setBasket = (newItem) => {
        this.setState(prevItems => {
            console.log(this.state.basket)
            return {
                // basket: prevItems.basket.push(newItem)
                basket: [...this.state.basket, newItem]

            }
        })
    }

    // setBasket = () => {
    //    return console.log("add to basket button pressed")
    // }

    
    render() {
        return (
            <Provider value={{basket: this.state.basket, setBasket: this.setBasket}}>
                {this.props.children}
            </Provider>
        )
    }
}
export {BasketContextProvider, Consumer as BasketContextConsumer}