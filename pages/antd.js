import { Button, DatePicker, Form, InputNumber, Select, Slider, Switch } from 'antd';
import { SmileFilled } from '@ant-design/icons';
import Link from 'next/link';
import antdStyles from 'styles/antd.module.scss';

const FormItem = Form.Item;

const content = {
    marginTop: '100px',
};

export default function Home() {
    const onDatePickerChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div style={content}>
            <div className={antdStyles.headContainer}>
                <Link href='#' className={antdStyles.logo}>
                    <SmileFilled style={{ fontSize: 48 }} />
                </Link>
                <Link href='#'>
                    <SmileFilled style={{ fontSize: 48 }} />
                </Link>
                <p className={antdStyles['text-disabled']}>Welcome to the world !</p>
            </div>
            <div>
                <Form
                    layout='horizontal'
                    size={'large'}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                >
                    <FormItem label='Input Number'>
                        <InputNumber
                            min={1}
                            max={10}
                            style={{ width: 100 }}
                            defaultValue={3}
                            name='inputNumber'
                        />
                    </FormItem>

                    <FormItem label='Switch'>
                        <Switch defaultChecked />
                    </FormItem>

                    <FormItem label='Slider'>
                        <Slider defaultValue={70} />
                    </FormItem>

                    <FormItem label='Select'>
                        <Select
                            defaultValue='lucy'
                            style={{ width: 192 }}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'disabled',
                                    disabled: true,
                                    label: 'Disabled',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                            ]}
                        />
                    </FormItem>

                    <FormItem label='DatePicker'>
                        <DatePicker showTime onChange={onDatePickerChange} />
                    </FormItem>
                    <FormItem style={{ marginTop: 48 }} wrapperCol={{ offset: 8 }}>
                        <Button type='primary' htmlType='submit'>
                            OK
                        </Button>
                        <Button style={{ marginLeft: 8 }}>Cancel</Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    );
}
