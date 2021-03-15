import ReactDOM from 'react-dom'
import App from './app'

const Index = () => {
    return (
        <div className="container">
            <App />
        </div>
    )
}
ReactDOM.render(
    <Index />,
    document.getElementById('root')
)