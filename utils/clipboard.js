import { CopyButton, Button } from 'zent';
import { message } from 'antd'

export default props =>
    <span>
      <CopyButton text={props.text}>
        <a
            href="javascript:void(0)"
            onClick={() => message.success('复制成功')}
            style={{ color:'#2db7f5', marginLeft:'2em'}}>
          复制
        </a>
      </CopyButton>
    </span>