// 注意：由于 id: app.hello_world 没有对应的资源，所以访问此页面，终端中会显示Error
import {
    IntlProvider,
    FormattedMessage,
} from 'react-intl';

export default function ReactIntlDemo() {
    return (
        <>
            <IntlProvider /* locale={navigator.language} */ locale='en-us'>
                <h1>Hello World!</h1>
                {/* 旧版本默认 FormattedMessage 会生成<span> */}
                {/* 在版本2升级到3个时候，做了调整，默认生成<React.Fragment>了 */}
                <h1>
                    <FormattedMessage
                        id='app.hello_world'
                        defaultMessage='Hello World!'
                        description='Hello world header greeting'
                    />
                </h1>
            </IntlProvider>
        </>
    );
}
