import React, {Component} from 'react';
import Order from './Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                console.log(response.data)
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push(
                        {
                            id: key,
                            ...response.data[key]
                        }
                    );
                }
                this.setState({
                    loading: false,
                    orders: fetchedOrders
                })

            }).catch(err => {
            this.setState({loading: false})
        })
    }

    render() {

        return (
            <div>
                {this.state.orders.map(order=>{
                    return(
                        <Order ingredients={order.ingredients} key={order.id} price={+order.price}/>
                    )
                })}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);