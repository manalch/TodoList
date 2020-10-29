import { Button, Result } from 'antd';
import React, { Component } from 'react';

class PageNotFound extends Component {
    render() {
        return (
            <div className="page-not-found">
                <Result
                    status="404"
                    title="404"
                    subTitle="Page Not Found"
                    extra={<Button type="primary" href="/">Back to Home</Button>}
                />
            </div>
        );
    }
}

export default PageNotFound;