import "./src/styles/global.css"
import React from "react"
import { Provider } from 'react-redux'
import store from './src/store'

export const wrapRootElement = ({ element }) => (
    <Provider store={store}>{element}</Provider>
)