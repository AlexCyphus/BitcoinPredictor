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

    const advice = currentDataPoint < 20 ? "BUY 📈" : currentDataPoint > 90 ? "SELL 📉" : "Hold tight..."

    // give advice
    const adviceEl: HTMLElement = document.getElementById('advice')
    adviceEl.innerText = advice.toUpperCase()
    adviceEl.classList.add(advice === "BUY 📈" ? 'buy' : advice === "Hold tight..." ? 'hold' : 'sell')
    
    const sentimentEl: HTMLElement = document.getElementById('sentiment')
    sentimentEl.innerText = dataPoints[0].value_classification.toLocaleUpperCase()
    sentimentEl.classList.add(advice === "BUY 📈" ? 'buy' : 'sell')

    
    }
)