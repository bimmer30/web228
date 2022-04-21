import { Row } from 'antd';
import Style from './Style';
const text = [
    {id: 1, title: "Card title 1", text: "text"
    },
    {id: 2, title: "Card title 2", text: "text"
    },
    {id: 3, title: "Card title 3", text: "text"
    },
    {id: 4, title: "Card title 4", text: "text"
    },
    {id: 5, title: "Card title 5", text: "text"
    },
    {id: 6, title: "Card title 6", text: "text"
    },
    {id: 7, title: "Card title 7", text: "text"
    },
    {id: 8, title: "Card title 8", text: "text"
    },
    {id: 9, title: "Card title 9", text: "text"
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
