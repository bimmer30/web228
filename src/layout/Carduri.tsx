import { Row } from 'antd';
import Style from './Style';
const text = [
    {id: 1, title: "Card title 1", text: "text"
    },
    {id: 2, title: "Card title 2", text: "text"
    },
    {id: 3, title: "Card title 3", text: "text"
    },

]


function Carduri() {
    return (

        <Row gutter={16} >
            {
                text.map((element, i) => {
                    return (
                        <Style key={element.id} title={element.title} text={element.text}/>
                    )
                })
            }
        </Row>
    )
}

export default Carduri
