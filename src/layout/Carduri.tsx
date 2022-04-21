
import {Breadcrumb, Row} from 'antd';
import {Style} from './Style';
import {Content} from "antd/es/layout/layout";
import {useRootStore} from "../index";
import {IContentModel} from "../interface/Interfaces";



export  const  Carduri = () => {
    const {contents} = useRootStore()
    console.log(">>root_store",contents)
    return (

        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Row gutter={16} >
                {contents.map((content:IContentModel) => {
                    return (
                        <Style key={content.id} content={content}/>
                    )
                } )}

            </Row>

        </div>



    )
}
