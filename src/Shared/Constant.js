import {RxCounterClockwiseClock} from "react-icons/rx"
import {DiReact} from "react-icons/di"
import {GiBodyHeight} from "react-icons/gi"
import {TiWeatherCloudy} from "react-icons/ti"
export const navbar=[
    {
        route:"/",
        name:"counter",
        icons:<RxCounterClockwiseClock />,
    },
    {
        route:"/useeffect",
        name:"useeffect",
        icons:<DiReact />,
    },
    {
        route:"/bmi",
        name:"BMI",
        icons:<GiBodyHeight />
    },
    {
        route:"/weather",
        name:"Weather",
        icons:<TiWeatherCloudy />
    },
]