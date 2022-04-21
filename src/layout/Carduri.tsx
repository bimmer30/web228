
import {Breadcrumb, Row} from 'antd';
import {Style} from './Style';
import {useRootStore} from "../index";
import {IContentModel} from "../interface/Interfaces";

export  const  Carduri = () => {
    const {texts} = useRootStore()
    console.log(">>root_store",texts)
    return (

        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Row gutter={16} >
                {texts.map((text:IContentModel) => {
                    return (
                        <Style key={text.id} content={text}/>
                    )
                } )}

            </Row>

        </div>



    )
}
