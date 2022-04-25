import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const openNotification = (canGO) => {
    if (canGO) {
        notification.open({
            message: '注册成功',
            description:
                '现在你可以尽情访问该网站了!',
            icon: <SmileOutlined
                style={{ color: '#108ee9' }} />,
        });
    }
    else {
        notification.open({
            message: '注册失败',
            description:
                '好像该账号已存在了，换一个试试吧~',
            icon: <SmileOutlined
                style={{ color: '#78ee2' }} />,
        });
    }

};
export default openNotification;
