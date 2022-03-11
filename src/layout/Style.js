import { Card, Col } from 'antd'
function Style({title, text}) {

    return (

        <Col span={8}>
            <div style={{ paddingBottom: '8px',paddingTop:'8px'}}>
                <Card title={title} bordered={false}>
                    {text}
                </Card>
            </div>
        </Col>

    )
}

export default Style