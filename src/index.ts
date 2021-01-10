import axios from "axios"

console.log('hello')

const data = axios.get('https://api.alternative.me/fng/?limit=2')

interface DataPoint {
    value: string,
    value_classification: string,
    timestamp: string,
    time_until_update: string
}

type DataPoints = Array<DataPoint>

data.then((data): void => {
    // parse weirdly formatted data
    let dataPoints: DataPoints = data.data.data
    let currentDataPoint: number = parseInt(dataPoints[0].value)

    // get html elems 
    const adviceEl: HTMLElement = document.getElementById('advice')
    const sentimentEl: HTMLElement = document.getElementById('sentiment')

    // give advice
    const advice = currentDataPoint < 20 ? "BUY 📈" : currentDataPoint > 90 ? "SELL 📉" : "Hold tight..."
    adviceEl.innerText = advice
    adviceEl.classList.add(advice === "BUY 📈" ? 'buy' : 'sell')
    sentimentEl.classList.add(advice === "BUY 📈" ? 'buy' : 'sell')

    sentimentEl.innerText = dataPoints[0].value_classification.toLocaleUpperCase()
    }
)