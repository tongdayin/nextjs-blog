// import * as React from 'react'
import {
    IntlProvider,
    FormattedMessage,
    FormattedNumber,
    FormattedRelativeTime,
    useIntl,
} from 'react-intl';

import locales from 'locales';

// Translated messages in French with matching IDs to what you declared
const messagesInFrench = {
    myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
    customMessage: '测试普通文字',
    'app.greeting': 'Hello, {name}!',
    'app.greeting.rich': 'Hello, <b>Eric</b> {icon}',
    foo: 'To buy a shoe, <a>visit our website</a> and <cta>buy a shoe</cta>',
};

const MS_IN_DAY = 1e3 * 3600 * 24;

const PostDate = ({ date }) => {
    const intl = useIntl();
    return (
        <span title={intl.formatDate(date)}>
            <FormattedRelativeTime value={(Date.now() - date) / MS_IN_DAY} unit='day' />
        </span>
    );
};

const App = ({ post }) => (
    <div>
        <h1>{post.title}</h1>
        <p>
            <PostDate date={post.date} />
        </p>
        <div>{post.body}</div>
    </div>
);

export default function ReactIntlDemo() {
    return (
        <>
            {/* <IntlProvider messages={messagesInFrench} locale='fr' defaultLocale='en'> */}
            <IntlProvider messages={locales} locale='fr' defaultLocale='en'>
                <p>
                    <FormattedMessage id='customMessage' />
                    <br />
                    <FormattedMessage
                        id='myMessage'
                        // defaultMessage='Today is {ts, date, ::yyyyMMdd}'
                        values={{ ts: Date.now() }}
                    />
                    <br />
                    ----------- 分割线 -------------
                    <br />
                    <FormattedMessage
                        id='app.greeting'
                        description='Greeting to welcome the user to the app'
                        defaultMessage='Hello, {name}!'
                        values={{
                            name: 'Eric',
                        }}
                    />
                    <br />
                    <FormattedNumber value={19} style='currency' currency='EUR' />
                    <br />
                    <FormattedMessage
                        id='app.greeting.rich'
                        description='Greeting to welcome the user to the app'
                        defaultMessage='Hello, <b>Eric</b> {icon}'
                        values={{
                            b: (chunks) => <b>{chunks}</b>,
                            icon: <svg />,
                        }}
                    />
                    <br />
                    <FormattedMessage
                        id='foo'
                        defaultMessage='To buy a shoe, <a>visit our website</a> and <cta>buy a shoe</cta>'
                        values={{
                            a: (chunks) => (
                                <a
                                    className='external_link'
                                    style={{ color: '#8339c2' }}
                                    target='_blank'
                                    href='https://www.example.com/shoe'
                                    rel='noreferrer'
                                >
                                    {chunks}
                                </a>
                            ),
                            cta: (chunks) => <strong className='important'>{chunks}</strong>,
                        }}
                    />
                    <br />
                </p>
            </IntlProvider>
            <IntlProvider /* locale={navigator.language} */ locale='en-us'>
                <App
                    post={{
                        title: 'Hello, World!',
                        date: new Date(1459913574887),
                        body: 'Amazing content.',
                    }}
                />
            </IntlProvider>
        </>
    );
}
