import axios from 'axios';

export const loadData = ({commit}) => {
    axios.get('data.json')
        .then(data => {
                const stocks = data.data.stocks;
                const funds = data.data.funds;
                const stockPortfolio = data.data.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                }

                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio);
        })
};
